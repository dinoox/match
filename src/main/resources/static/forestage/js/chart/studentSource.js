const app = new Vue({

  el: '#app',

  data: {
    grade: 2018,
    studentNum: 0,
    allStudentNum: 0,
    goodStudentNum: 0,
    povertyStudentNum: 0,
    provinces: [],
    provinceName: '上海',
  },

  watch: {
    grade() {
      this.render_chart1();
      this.render_chart3();
      this.render_chart4();
      this.render_chart5();

      this.findProvinceAllCityStudentNum();
    }
  },

  created() {
    this.r();
    this.render_chart1();
    this.render_chart3();
    this.render_chart4();
    this.render_chart5();

    this.findAllProvince();
    this.findProvinceAllCityStudentNum();
  },

  methods: {

    r(){
      axios.get('http://47.104.171.69/login')

    },

    render_chart1() {
      axios.get('http://47.104.171.69/findAllProvinceStudentNum', { params: { grade: this.grade } })
        .then((response) => {

          let chart = echarts.init(document.querySelector('.chart1'));

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
                gte: 200,
                lte: 6000,
                label: '200 - 6000 人 ',
                color: '#065aab',
              }, {
                gte: 150,
                lte: 200,
                label: '150 - 200 人',
                color: '#066eab',
              }, {
                gte: 100,
                lte: 150,
                label: '100 - 150 人',
                color: '#0682ab'
              }, {
                gte: 50,
                lte: 100,
                label: '50 - 100 人',
                color: '#0696ab'
              }, {
                gt: 0,
                lte: 50,
                label: '1 - 50人',
                color: '#06a0ab'
              }, {
                value: 0,
                label: 'no one',
                color: '#ebf1f7'
              }],
            },
            geo: {
              map: 'china',
              roam: true,
              scaleLimit: {
                min: 1,
                max: 4
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
                  areaColor: "#6699cc",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
                }
              }
            },
            series: [{
              name: '学生数目',
              type: 'map',
              geoIndex: 0,
              data: []
            }]
          };


          this.allStudentNum = 0;

          for (let i = 0; i < response.data.length; i++) {

            let name = response.data[i].provinceName;
            let value = response.data[i].studentNum;

            option.series[0].data.push({ name: name, value: value });
            this.allStudentNum += response.data[i].studentNum;
          }

          option.series[0].data.push({ name: '南海诸岛', value: 0 });

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });


        }, (error) => { })

    },

    render_chart3() {
      axios.get("http://47.104.171.69/findAllProvincePovertyScaleExceptShanDong", { params: { grade: this.grade } }).then((response) => {


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
              },
              restore: {}
            }
          },

          grid: {
            left: '1%',
            top: '2%',
            right: '2%',
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
              name: '不贫困学生数',
              type: 'line',
              smooth: true,
              lineStyle: {
                color: "#00d887",
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
              //拐点
              symbol: 'circle',
              symbolSize: 8,
              showSymbol: false,
              //设置拐点的颜色以及边框
              itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              data: []
            },
            {
              name: '一级贫困学生数',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
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
              // 设置拐点 小圆点
              symbol: "circle",
              // 拐点大小
              symbolSize: 8,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: '#0184d5',
                borderColor: 'rgba(123, 204, 255,.1)',
                borderWidth: 12
              },
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              data: []
            },
            {
              name: '二级贫困学生数',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: "#0184d5",
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
                        color: "rgba(51, 8, 103, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(48, 207, 208, 0.1)"
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
                color: "#30cfd0",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              data: []
            },
            {
              name: '三级贫困学生数',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: "#fed6e3",
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
                        color: "rgba(254, 215, 227, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(168, 237, 234, 0.1)"
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
                color: "#fed6e3",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              data: []
            },

          ]
        };


        for (let i = 0; i < response.data.length; i++) {

          option.series[0].data[i] = response.data[i].povertyZeroStudentNum;
          option.series[1].data[i] = response.data[i].povertyOneStudentNum;
          option.series[2].data[i] = response.data[i].povertyTwoStudentNum;
          option.series[3].data[i] = response.data[i].povertyThreeStudentNum;
          option.xAxis[0].data[i] = response.data[i].provinceName;

        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });


      }, (error) => { })
    },

    render_chart4() {
      axios.get('http://47.104.171.69/findAllProvincePovertyScale', { params: { grade: this.grade } })
        .then((response) => {

          let chart = echarts.init(document.querySelector('.chart4'));

          let responseData = response.data;

          var colors = [
            '#00ADD0',
            '#FFA12F',
            '#B62AFF',
            '#604BFF',
            '#6E35FF',
            '#002AFF',
            '#20C0F4',
            '#95F300',
            '#04FDB8',
            '#AF5AFF'
          ];

          let that = this;

          function getData() {
            let data = {
              name: '中国',
              value: that.allStudentNum,
              children: []
            };
            for (let i = 0; i < responseData.length; i++) {
              let obj = {
                name: responseData[i].provinceName,
                value: 0,

                children: [],
              };

              obj.children.push({ name: '不贫困学生数', value: responseData[i].povertyZeroStudentNum });
              obj.children.push({ name: '一级贫困学生数', value: responseData[i].povertyOneStudentNum });
              obj.children.push({ name: '二级贫困学生数', value: responseData[i].povertyTwoStudentNum });
              obj.children.push({ name: '三级贫困学生数', value: responseData[i].povertyThreeStudentNum });

              that.povertyStudentNum += parseInt(responseData[i].povertyOneStudentNum)
                + parseInt(responseData[i].povertyTwoStudentNum) + parseInt(responseData[i].povertyThreeStudentNum);

              obj.value += parseInt(responseData[i].povertyZeroStudentNum) + parseInt(responseData[i].povertyOneStudentNum)
                + parseInt(responseData[i].povertyTwoStudentNum) + parseInt(responseData[i].povertyThreeStudentNum);

              data.children.push(obj);
            }

            let arr = [];
            arr.push(data);

            arr = handle(arr, 0);
            return arr;
          };

          let handle = function (data, index, color = '#00f6ff') {
            //index标识第几层
            return data.map((item, index2) => {
              //计算出颜色
              if (index == 1) {
                color = colors.find((item, eq) => eq == index2 % 10);
              }

              // 设置label大小
              switch (index) {
                case 0:
                  item.symbolSize = 50
                  break;
                case 1:
                  item.symbolSize = 30
                  break;
                default:
                  item.symbolSize = 10
                  break;
              }
              // 设置线条颜色
              item.lineStyle = { color: color }

              if (item.children) {//存在子节点
                item.itemStyle = {
                  borderColor: color,
                  color: color
                };
                item.children = handle(item.children, index + 1, color)
              } else {//不存在
                item.itemStyle = {
                  color: 'transparent',
                  borderColor: color
                };
              }
              return item;
            })
          };

          var option = {

            textStyle: {
              fontFamily: 'Poppins'
            },
            toolbox: { //工具栏
              show: true,
              iconStyle: {
                borderColor: "#03ceda"
              },
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
            tooltip: {//提示框
              trigger: "item",
              triggerOn: "mousemove",
              backgroundColor: "rgba(1,70,86,1)",
              borderColor: "rgba(0,246,255,1)",
              borderWidth: 0.5,
              textStyle: {
                fontSize: 10
              }
            },
            series: [
              {
                name: '全国贫困生源图谱',
                type: "tree",
                hoverAnimation: true, //hover样式
                data: getData(),

                layout: "radial",
                symbol: "circle",
                symbolSize: 10,
                nodePadding: 20,
                animationDurationUpdate: 750,
                expandAndCollapse: true, //子树折叠和展开的交互，默认打开
                initialTreeDepth: 2,
                roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
                focusNodeAdjacency: true,
                itemStyle: {
                  borderWidth: 1,
                },
                initialTreeDepth: 1,
                label: { //标签样式
                  show: true,
                  color: "rgba(0,0,0,.8)",
                  fontSize: 10,
                  formatter: '{b} : {c} 人'
                },
                lineStyle: {
                  width: 1,
                  curveness: 0.5,
                }
              }
            ]
          };

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        }, (error) => { })
    },

    render_chart5() {
      axios.get('http://47.104.171.69/findAllProvinceGoodStudentNum', { params: { grade: this.grade } })
        .then((response) => {

          let chart = echarts.init(document.querySelector('.chart5'));

          let option = {

            textStyle: {
              fontFamily: 'Poppins'
            },
            tooltip: {
              triggerOn: "mousemove",
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

              left: 16,
              bottom: 0,
              showLabel: true,
              text: ["高", "低"],

              pieces: [{
                gt: 15,
                lte: 200,
                label: '15 - 200 人',
                color: '#065aab',
              }, {
                gt: 10,
                lte: 15,
                label: '10 - 15 人',
                color: '#066eab'
              }, {
                gt: 5,
                lte: 10,
                label: '5 - 10 人',
                color: '#0682ab'
              }, {
                gt: 0,
                lte: 5,
                label: '1 - 5人',
                color: '#06a0ab'
              }, {
                value: 0,
                label: 'no one',
                color: '#ebf1f7'
              }],
            },
            geo: {
              map: 'china',
              roam: true,
              scaleLimit: {
                min: 1,
                max: 2
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
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowOffsetX: 10,
                  shadowOffsetY: 0,
                  borderColor: "rgba(0, 0, 0, 0.25)"
                },
                emphasis: {
                  areaColor: "#6699cc",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
                }
              }
            },
            series: [{
              name: '学生数目',
              type: 'map',
              geoIndex: 0,
              data: []
            }]
          };

          this.goodStudentNum = 0;
          for (let i = 0; i < response.data.length; i++) {

            let name = response.data[i].provinceName;
            let value = response.data[i].studentNum;

            option.series[0].data.push({ name: name, value: value });

            this.goodStudentNum += response.data[i].studentNum;
          }

          option.series[0].data.push({ name: '南海诸岛', value: 0 });

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });


        }, (error) => { })
    },

    findAllProvince() {
      axios.get("http://47.104.171.69/findAllProvince").then((response) => {
        this.provinces = response.data;
      }, (error) => {

      })
    },

    findProvinceAllCityStudentNum() {

      if(document.querySelector('#provinceName').value.search('{') == -1 ) {
      this.provinceName = document.querySelector('#provinceName').value;
      }

      axios.get("http://47.104.171.69/findProvinceAllCityStudentNum",
        {
          params: {
            grade: this.grade,
            provinceName: this.provinceName
          }
        }).then((response) => {

          let chart = echarts.init(document.querySelector('.chart2'));

          let option = {

            textStyle: {
              fontFamily: 'Poppins'
            },
            tooltip: {
              triggerOn: "click"
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

              left: 0,
              bottom: 0,
              showLabel: true,
              text: ["高", "低"],

              pieces: [{
                gte: 200,
                lte: 500,
                label: '200 - 500 人 ',
                color: '#065aab',
              }, {
                gte: 150,
                lte: 200,
                label: '150 - 200 人',
                color: '#066eab',
              }, {
                gte: 100,
                lte: 150,
                label: '100 - 150 人',
                color: '#0682ab'
              }, {
                gte: 50,
                lte: 100,
                label: '50 - 100 人',
                color: '#0696ab'
              }, {
                gt: 0,
                lte: 50,
                label: '1 - 50人',
                color: '#06a0ab'
              }, {
                value: 0,
                label: 'no one',
                color: '#ebf1f7'
              }],
            },
            geo: {
              map: '',
              roam: true,
              scaleLimit: {
                min: 1,
                max: 10
              },
              zoom: 1.23,
              top: '10%',
              left: '30%',
              label: {
                normal: {
                  show: true,
                  fontSize: "13",
                  color: "rgba(0,0,0,0.7)"
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowOffsetX: 5,
                  shadowOffsetY: 5,
                  borderColor: "rgba(0, 0, 0, 0.25)"
                },
                emphasis: {
                  areaColor: "#6699cc",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  borderWidth: 0
                }
              }
            },
            series: [{
              name: '学生数目',
              type: 'map',
              geoIndex: 0,
              data: []
            }]
          };

          this.studentNum = 0;

          for (let i = 0; i < response.data.length; i++) {

            let cityName = response.data[i].cityName;
            let studentNum = response.data[i].studentNum;

            option.series[0].data.push({ name: cityName, value: studentNum });
            this.studentNum += response.data[i].studentNum;
          }

          option.geo.map = this.provinceName;

          //true表示重新绘制
          chart.setOption(option, true);

          window.addEventListener('resize', function () {
            chart.resize();
          })

        })

    }



  }

})







