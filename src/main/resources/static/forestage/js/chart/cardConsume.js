const app = new Vue({

  el: '#app',

  data: {
    grade: 2018,
  },

  watch: {
    grade() {
      this.render_chart1();
      this.render_chart2();
      this.render_chart3();
      this.render_chart4();
    }
  },

  created() {

    this.render_chart1();
    this.render_chart2();
    this.render_chart3();
    this.render_chart4();

  },
  methods: {

    render_chart1() {
      axios.get("http://47.104.171.69/findAllTermCardConsume", { params: { grade: this.grade } }).then((response) => {

        let chart = echarts.init(document.querySelector('.chart1'));

        let option = {
          textStyle: {
            fontFamily: 'Poppins'
          },


          toolbox: {
            top: '0%',
            right: '2%',
            feature: {
              magicType: {
                type: ['line', 'bar'],
                title: {
                  line: '折线图',
                  bar: '柱状图',
                },
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            top: '0%',
            right: '20%',
          },
          grid: {
            top: '6%',
            left: '0%',
            right: '5%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: [],
              axisLabel: {
                interval: 0,
                margin: 12,
                color: 'rgba(0,0,0,.6)',
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                margin: 12,
                color: 'rgba(0,0,0,.6)'
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: 'rgba(0,0,0,.5)'
                },
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true
              }
            }
          ],
          series: [
            {
              name: '一卡通消费',
              type: 'bar',
              barWidth: '30%',
              data: [],
              color: '#d7ecfb',
              label: {
                show: true,
                position: 'top',
                color: '#17a2b8'
              },
              itemStyle: {

                normal: {
                  barBorderRadius: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 6,
                  color: (params) => {
                    let colors = ['#d7ecfb', '#d3f5f5', '#ffe9d3', '#e6d9ff'];
                    return colors[params.dataIndex];
                  }
                }
              }
            }
          ]
        };

        let allmoney = 0; 


        for (let i = 0; i < response.data.length; i++) {
          option.xAxis[0].data.push(response.data[i].termName);
          option.series[0].data.push(response.data[i].cardConsume);
          allmoney += response.data[i].cardConsume;
        }

        let allConsume = document.querySelectorAll('.tip-allConsume');

        allConsume.forEach((item) => {
          item.innerHTML = allmoney + '元';
        })

    
        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })

    },
    render_chart2() {

      axios.get("http://47.104.171.69/findAllTermCardConsume", { params: { grade: this.grade } }).then((response) => {

        var chart = echarts.init(document.querySelector('.chart2'));

        var option = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#d7ecfb', '#d3f5f5', '#ffe9d3', '#e6d9ff'],

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true,
            right: '2%',
            top: '2%',
            feature: {
              dataView: {
                show: true,
                readOnly: true,
                textareaBorderColor: 'rgba(0,0,0,.1)',
                textColor: 'rgba(0,0,0,.6)',
                buttonColor: '#2f89cf',
                iconStyle: {
                  color: '#63b2ee',
                }
              },
              saveAsImage: {
                show: true,
                title: '保存',
                iconStyle: {
                  color: '#7cd6cf',
                },
              }
            }
          },

          legend: {
            left: '5%',
            bottom: '5%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: 'rgba(0,0,0,.6)',
              fontSize: 12
            }
          },


          series: [
            {
              name: '消费总额',
              type: 'pie',
              radius: ['30%', '70%'],
              center: ['50%', '40%'],


              label: {
                show: false,
                fontSize: 12
              },

              labelLine: {
                show: false,
                length: 6,
                length2: 8
              },

              data: []
            }
          ]
        };


        for (let i = 0; i < response.data.length; i++) {
          option.series[0].data.push({ name: response.data[i].termName, value: response.data[i].cardConsume });
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      })
    },
    render_chart3() {

      let that = this;

      function findAllTermMaleCardConsume() {
        return axios.get("http://47.104.171.69/findAllTermMaleCardConsume", { params: { grade: that.grade}});
      }

      function findAllTermFemaleCardConsume() {
        return axios.get("http://47.104.171.69/findAllTermFemaleCardConsume", { params: { grade: that.grade}});
      }

      axios.all([findAllTermMaleCardConsume(), findAllTermFemaleCardConsume()])
        .then(axios.spread(function (response1, response2) {

        let chart = echarts.init(document.querySelector('.chart3'));

        let option = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          tooltip: {
            trigger: 'axis',

          },

          legend: {
            top: '0%',
            right: '20%',
            textStyle: {
              color: 'rgba(0,0,0,.5)',
              fontSize: 12
            }
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: true,
                textareaBorderColor: 'rgba(0,0,0,.1)',
                textColor: 'rgba(0,0,0,.6)',
                buttonColor: '#2f89cf',
              },
              saveAsImage: {
                show: true,
                title: '保存'
              }
            }
          },

          grid: {
            left: '1%',
            top: '8%',
            right: '5%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [{
              type: 'category',
              boundaryGap: false,
              data: [],
              axisLabel: {
                interval: 0,
                margin: 14,
                textStyle: {
                  color: 'rgba(0,0,0,.6)',
                  fontSize: 12
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.2)'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: true
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.1)'
                }
              },
              axisLabel: {
                margin: 14,
                textStyle: {
                  color: 'rgba(0,0,0,.6)',
                  fontSize: 12
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.1)'
                }
              }
            }
          ],
          series: [
            {
              name: '男生消费',
              type: 'line',
              smooth: true,
              lineStyle: {
                color: '#0184d5',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                    }
                  ],
                  false
                ),

              },
              //拐点
              symbol: 'circle',
              symbolSize: 8,
              showSymbol: false,
              //设置拐点的颜色以及边框
              itemStyle: {
                color: '#0184d5',
                borderColor: 'rgba(123, 204, 255,.1)',
                borderWidth: 12
              },
              data: []
            },
            {
              name: '女生消费',
              type: 'line',
              smooth: true,
              
              lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(0, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(0, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),

                }
              },
              // 设置拐点 小圆点
              symbol: "circle",
              // 拐点大小
              symbolSize: 8,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              data: []
            }
          ]
        };

        console.log(response1);
        console.log(response2);

        for (let i = 0; i < response1.data.length; i++) {
          option.series[0].data[i] = response1.data[i].cardConsume;
          option.series[1].data[i] = response2.data[i].cardConsume;
          option.xAxis[0].data[i] = response1.data[i].termName;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });
      }))
    },
    render_chart4() {
      axios.get('http://47.104.171.69/findAllProvinceAllTermCardConsume', { params: { grade: this.grade } })
      .then((response) => {

        let chart = echarts.init(document.querySelector('.chart4'));

        let option = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          tooltip: {
            triggerOn: "click",
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: true,
                textareaBorderColor: 'rgba(0,0,0,.1)',
                textColor: 'rgba(0,0,0,.6)',
                buttonColor: '#2f89cf',
              },
              saveAsImage: {
                show: true,
                title: '保存'
              },
              restore: {}
            }
          },
          visualMap: {

            left: 26,
            bottom: 40,
            showLabel: true,
            text: ["高", "低"],

            pieces: [{
              gte: 2000000,
              label: '200万以上 ',
              color: '#2C5A53',
            }, {
              gte: 1000000,
              lte: 2000000,
              label: '100万 - 200万',
              color: '#3F8077',
            }, {
              gte: 500000,
              lte: 1000000,
              label: '50万 - 100万',
              color: '#51A69B',
            }, {
              gte: 100000,
              lte: 500000,
              label: '10万 - 50万元',
              color: '#3F8077'
            }, {
              gt: 0,
              lte: 100000,
              label: '1 - 10万元',
              color: '#77F3E2'
            }, {
              value: 0,
              label: '0元',
              color: '#ebf1f7'
            }],
          },
          geo: {
            map: 'china',
            roam: true,
            scaleLimit: {
              min: 1,
              max: 8
            },
            zoom: 1.23,
            top: '10%',
            label: {
              normal: {
                show: true,
                fontSize: "13",
                color: "rgba(0,0,0,0.7)"
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 1,
                borderColor: "rgba(32, 71, 105, 0.5)"
              },
              emphasis: {
                areaColor: "#3a6e22",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
              }
            }
          },
          series: [{
            name: '一卡通总消费',
            type: 'map',
            geoIndex: 0,
            data: []
          }]
        };


        this.allStudentNum = 0;

        for (let i = 0; i < response.data.length; i++) {

          let name = response.data[i].provinceName;
          let value = response.data[i].cardConsume;

          option.series[0].data.push({ name: name, value: value });

        }

        option.series[0].data.push({ name: '南海诸岛', value: 0 });

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });


      }, (error) => { })
    }


  }

})














