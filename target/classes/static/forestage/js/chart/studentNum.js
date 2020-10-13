const app = new Vue({
  
  el: '#app',

  data: {
    grade: 2018,
    studentNum: 0,
    provinceName: '上海',
    provinces: [],
    feedbacks: []
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

    this.findAllProvince();

    this.findSomeFeedback();

    this.findProvinceAllCityStudentNum();

  },
  methods: {

    render_chart1() {
      axios.get("http://47.104.171.69/findAllDepartmentStudentNum", { params: { grade: this.grade} }).then((response) => {

        let myData = response.data;

        let allStudent = 0;

        for (let i = 0; i < myData.length; i++) {
          allStudent = allStudent + Number(myData[i].studentNum);
        }

        let chart = echarts.init(document.querySelector('.chart1'));

        let option = {
          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#2f89cf'],
          toolbox: {
            right: '2%',
            feature: {
              dataView: {
                show: true,
                readOnly: true,
                textareaBorderColor: 'rgba(0,0,0,.1)',
                textColor: 'rgba(0,0,0,.6)',
                buttonColor: '#2f89cf',
              },
              saveAsImage: {},
              magicType: {
                type: ['line','bar'],
                title: {
                  line: '折线图',
                  bar: '柱状图',
                },
                option: {
                  line: {
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        show: true,
                        type: 'line'
                      }
                    }
                  }
                }
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params) {

              let result;

              params.forEach(function (item) {

                let dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2f89cf"></span>'
                result = dotHtml + ' ' + item.name + '<br/>' + item.seriesName + ' : ' + item.value + '<br/>' + '所占比例' + ' : ' + (params[0].data / allStudent * 100).toFixed(3) + '%';

              })

              return result;
            }
          },
          legend: {
            top: '1%',
            right: '20%'
          },
          grid: {
            top: '5%',
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
                formatter: function (value) {
                  return value.split("").join("\n");
                }
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
                show: false
              }
            }
          ],
          series: [
            {
              name: '学生人数',
              type: 'bar',
              barWidth: '60%',
              data: [],

              itemStyle: {
                barBorderRadius: 5,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 6
              }
            }
          ]
        };


        for (let i = 0; i < myData.length; i++) {
          option.xAxis[0].data[i] = myData[i].departmentName;
          option.series[0].data[i] = myData[i].studentNum;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })

    },
    render_chart2() {
      axios.get("http://47.104.171.69/findAllDepartmentStudentNumInterceptBefore", { params: { grade: this.grade} }).then((response) => {

        var chart = echarts.init(document.querySelector('.chart2'));

        var option = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', '#138cfd'],

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
              },
              saveAsImage: {
                show: true,
                title: '保存'
              }
            }
          },

          legend: {
            left: '2%',
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
              name: '学生数目',
              type: 'pie',
              radius: ['10%', '70%'],
              center: ['50%', '40%'],
              roseType: 'radius',

              label: {
                show: false,
                fontSize: 12
              },

              labelLine: {
                show: false,
                length: 6,
                length2: 8
              },

              data: [
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' }
              ]
            }
          ]
        };

        let myData = response.data;

        for (let i = 0; i < myData.length; i++) {
          option.series[0].data[i].name = myData[i].departmentName;
          option.series[0].data[i].value = myData[i].studentNum;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })
    },
    render_chart3() {
      axios.get("http://47.104.171.69/findAllDepartmentStudentNumInterceptAfter", { params: { grade: this.grade} }).then((response) => {

        var chart = echarts.init(document.querySelector('.chart3'));

        var option = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', '#138cfd'],

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
              },
              saveAsImage: { show: true, title: '保存' }
            }
          },

          legend: {
            // left: '2%',
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
              name: '学生数目',
              type: 'pie',
              radius: ['10%', '70%'],
              center: ['50%', '40%'],
              roseType: 'radius',

              label: {
                show: false,
                fontSize: 12
              },

              labelLine: {
                show: false,
                length: 6,
                length2: 8
              },

              data: [
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' },
                { value: 0, name: '' }
              ]
            }
          ]
        };

        let myData = response.data;

        for (let i = 0; i < myData.length; i++) {
          option.series[0].data[i].name = myData[i].departmentName;
          option.series[0].data[i].value = myData[i].studentNum;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })


    },
    render_chart4() {
      axios.get("http://47.104.171.69/findAllDepartmentStudentNumTopFive", { params: { grade: this.grade} }).then((response) => {

        var chart = echarts.init(document.querySelector('.chart4'));

        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

        var option = {
          textStyle: {
            fontFamily: 'Poppins'
          },

          grid: {
            left: '0%',
            top: '10%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            show: false
            
          },
          yAxis: [
            {
              type: 'category',
              data: [],
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: 'rgba(0,0,0,.6)',
              }
            },
            {

              data: [],
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                margin: 10,
                color: 'rgba(0,0,0,.6)'
              }
            }
          ],
          series: [
            {
              name: '条',
              type: 'bar',
              data: [70, 34, 60, 78, 69],
              yAxisIndex: 0,
              itemStyle: {
                barBorderRadius: 20,
                color: function (params) {
                  return myColor[params.dataIndex];
                }
              },
              barCategoryGap: 50,
              barWidth: 10,

              label: {
                show: true,
                position: 'inside',
                formatter: '{c}'
              }
            },
            {
              name: '框',
              type: 'bar',
              barCategoryGap: 50,
              barWidth: 15,
              data: [1000, 1000, 1000, 1000, 1000],
              yAxisIndex: 1,
              itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
              }
            }
          ]
        };


        let myData = response.data;

        for (let i = 0; i < myData.length; i++) {
          option.yAxis[0].data[i] = myData[i].departmentName;
          option.yAxis[1].data[i] = myData[i].studentNum;

          option.series[0].data[i] = myData[i].studentNum;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })
    },

    findAllProvince() {
      axios.get("http://47.104.171.69/findAllProvince").then((response) => {
        this.provinces = response.data;
      }, (error) => {

      })
    },

    findSomeFeedback() {
      axios.get("http://47.104.171.69/findSomeFeedback").then((response) => {
        this.feedbacks = response.data;
      }, (error) => {

      })
    },

    findProvinceAllCityStudentNum() {

      if(document.querySelector('#provinceName').value.search('{') == -1) {
      this.provinceName = document.querySelector('#provinceName').value;
      }

      axios.get("http://47.104.171.69/findProvinceAllCityStudentNum",
        {
          params: {
            grade: this.grade,
            provinceName: this.provinceName
          }
        }).then((response) => {

          let chart = echarts.init(document.querySelector('.chart5'));

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
              top: '7%',
              right: '3%',
              bottom: '0%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: [],
                axisLabel: {
                  interval: 0,
                  textBorderWidth: 0.1,
                  textBorderColor: 'skyblue',
                  formatter: function (value) {
                    return value.split("").join("\n");
                  },
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
                  margin: 12,
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
                name: '学生数量',
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
              }
            ]
          };

          for (let i = 0; i < response.data.length; i++) {
            option.xAxis[0].data[i] = response.data[i].cityName;
            option.series[0].data[i] = response.data[i].studentNum;
            this.studentNum += response.data[i].studentNum;
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          })

        })

    }

  }

})














