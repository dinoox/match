const app = new Vue({

  el: '#app',

  data: {
    grade: 2015,
    majors: [],
    departments: [],
    majorName: '中药资源与开发专业',
    departmentName: '农学院'
  },

  watch: {
    grade() {
      this.render_chart1();
      this.render_chart4();
      this.render_chart5();

      this.render_chart8();

    }
  },

  created() {

    this.render_chart1();
    this.render_chart4();
    this.render_chart5();

    this.render_chart8();

    this.findAllMajor();
    this.findAllDepartment();

    this.findDepartmentAllVocationStudentNum();
    this.findMajorAllVocationStudentNum();

    this.findDepartmentAllProvinceEmploymentStudentNum();
    this.findMajorAllProvinceEmploymentStudentNum();

  },
  methods: {

    render_chart1() {
      axios.get("http://47.104.171.69/findSchoolAllVocationStudentNum", { params: { grade: this.grade } }).then((response) => {

        let chart = echarts.init(document.querySelector('.chart1'));

        let option = {

          textStyle: {
            fontFamily: 'Poppins'
          },

          color: ['#f4d2ac', '#f3b8b4', '#cfccd6', '#7ec8cb', '#cae9e1'],

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true,
            right: '4%',
            top: '2%',
            feature: {
              saveAsImage: {
                show: true,
                title: '保存',
                iconStyle: {
                  color: 'rgba(124, 214, 207, .5)',
                },
              },
              dataView: {
                show: true,
                readOnly: true,
                textareaBorderColor: 'rgba(0,0,0,.1)',
                textColor: 'rgba(0,0,0,.6)',
                buttonColor: '#2f89cf',
                iconStyle: {
                  color: '#f4d2ac',
                },
              },
            }
          },

          legend: {
            icon: "circle",
            orient: 'horizontal',
            left: '9%',
            bottom: '5%',
            textStyle: {
              color: 'rgba(0,0,0,.6)',
              fontSize: 12
            },
            itemGap: 10
          },

          series: [
            {
              name: '学生数目',
              type: 'pie',
              radius: ['30%', '50%'],
              center: ['50%', '25%'],

              label: {
                show: true,
                fontSize: 13
              },

              labelLine: {
                show: true,
                length: 16,
                length2: 8
              },

              data: []
            },
            {
              name: '学生数目',
              type: 'pie',
              radius: ['20%', '50%'],
              center: ['50%', '60%'],
              roseType: 'area',

              label: {
                show: true,
                fontSize: 13
              },

              labelLine: {
                show: true,
                length: 8,
                length2: 18
              },

              data: []
            }
          ]
        };

        let myData = response.data;

        console.log(this.grade);

        for (let i = 0; i < myData.length; i++) {
          option.series[0].data.push({ name: myData[i].vocationName, value: myData[i].studentNum });
          option.series[1].data.push({ name: myData[i].vocationName, value: myData[i].studentNum });
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
      axios.get("http://47.104.171.69/findSchoolAllVocationStudentNum", { params: { grade: this.grade } }).then((response) => {

        let myData = response.data;


        let chart = echarts.init(document.querySelector('.chart4'));

        let option = {
          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#2f89cf'],
          toolbox: {
            right: '4%',
            top: '30%',
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
              type: 'shadow',
              label: {
                show: true,
                shadowBlur: 0
              },
              shadowStyle: {
                opacity: 0.5,
              }
            }
          },
          grid: {
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '2%',
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
                show: false,
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
              barWidth: '30%',
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
          option.series[0].data[i] = myData[i].studentNum;
          option.xAxis[0].data[i] = myData[i].vocationName;
        }

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })

    },
    render_chart5() {

      let that = this;

      function findDepartmentAllVocationStudentNum1() {
        return axios.get("http://47.104.171.69/findDepartmentAllVocationStudentNum", {
          params: {
            grade: that.grade,
            departmentName: '经济管理学院'
          }
        })
      }

      function findDepartmentAllVocationStudentNum2() {
        return axios.get("http://47.104.171.69/findDepartmentAllVocationStudentNum", {
          params: {
            grade: that.grade,
            departmentName: '信息科学与工程学院'
          }
        })
      }


      axios.all([findDepartmentAllVocationStudentNum1(), findDepartmentAllVocationStudentNum2()])
        .then(axios.spread(function (response1, response2) {

          let myData1 = response1.data;
          let myData2 = response2.data;

          let chart = echarts.init(document.querySelector('.chart5'));

          let option = {

            color: ['#7cd6cf', '#63b2ee', '#76da91', '#f8cb7f'],

            textStyle: {
              fontFamily: 'Poppins'
            },
            tooltip: {},
            legend: {
              top: '5%',
              left: '2%',
              orient: 'vertical',
            },
            radar: {

              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,.4)',
                  borderRadius: 3,
                  padding: [4, 5]
                }
              },
              splitLine: {
                lineStyle: {
                  // color: '#113865', // 分隔线颜色
                  // width: 1, // 分隔线线宽
                }
              },
              indicator: [
                { name: '升学', max: 400 },
                { name: '企业', max: 400 },
                { name: '未就业', max: 100 },
                { name: '事业', max: 100 },
                { name: '行政', max: 100 },
              ]
            },
            series: [{
              name: '全校范围岗位统计',
              type: 'radar',
              // areaStyle: {normal: {}},
              symbol: 'roundRect',
              symbolSize: 8,
              label: {
                show: true,
              },
              itemStyle: {
                // color: 'red',
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
              data: [
                {
                  value: [],
                  name: '经济管理学院（Economic management）'
                },
                {
                  value: [],
                  name: '信息科学与工程学院（Information science）'
                }
              ]
            }]
          };

          for (let i = 0; i < myData1.length; i++) {
            option.series[0].data[0].value.push(myData1[i].studentNum);
            option.series[0].data[1].value.push(myData2[i].studentNum);
            option.radar.indicator[i].name = myData1[i].vocationName;
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        }))
    },
    render_chart8() {

      axios.get('http://47.104.171.69/findSchoolAllProvinceEmploymentStudentNum', { params: { grade: this.grade } })
        .then((response) => {

          console.log(response.data);

          let chart = echarts.init(document.querySelector('.chart8'));

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

              left: 0,
              bottom: 0,
              showLabel: true,
              text: ["高", "低"],

              pieces: [{
                gt: 200,
                lte: 6000,
                label: '200 - 6000 人',
                color: '#065aab',
              },{
                gt: 100,
                lte: 200,
                label: '100 - 200 人',
                color: '#066eab'
              }, {
                gt: 50,
                lte: 100,
                label: '50 - 100 人',
                color: '#0682ab'
              }, {
                gt: 10,
                lte: 50,
                label: '10 - 50 人',
                color: '#0696ab'
              }, {
                gt: 0,
                lte: 10,
                label: '1 - 10人',
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


        }, (error) => { console.log(error); })
    },




    findAllMajor() {
      axios.get("http://47.104.171.69/findAllMajorName").then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.majors.push(response.data[i].name);
        }

      })
    },
    findAllDepartment() {
      axios.get("http://47.104.171.69/findAllDepartment").then((response) => {

        for (let i = 0; i < response.data.length; i++) {
          this.departments.push(response.data[i].name);
        }
      })
    },


    findDepartmentAllVocationStudentNum() {

      if (document.querySelector('#departmentName').value.search('{') == -1) {
        this.departmentName = document.querySelector('#departmentName').value;
      }

      axios.get("http://47.104.171.69/findDepartmentAllVocationStudentNum",
        {
          params: {
            grade: this.grade,
            departmentName: this.departmentName
          }
        }).then((response) => {

          var chart = echarts.init(document.querySelector('.chart2'));

          var option = {

            textStyle: {
              fontFamily: 'Poppins'
            },
            color: ['#5bb1ea', '#a5d5e3', '#9cb7c0', '#b2d2d1', '#cae9e1'],

            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            toolbox: {
              show: true,
              right: '4%',
              top: '2%',
              feature: {

                saveAsImage: {
                  show: true,
                  title: '保存',
                  iconStyle: {
                    color: 'rgba(124, 214, 207, .5)',
                  },
                },
                dataView: {
                  show: true,
                  readOnly: true,
                  textareaBorderColor: 'rgba(0,0,0,.1)',
                  textColor: 'rgba(0,0,0,.6)',
                  buttonColor: '#2f89cf',
                  iconStyle: {
                    color: '#f4d2ac',
                  }
                },
              }
            },

            legend: {
              left: '16%',
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
                radius: ['35%', '70%'],
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

          let myData = response.data;

          for (let i = 0; i < myData.length; i++) {
            option.series[0].data.push({ name: myData[i].vocationName, value: myData[i].studentNum });
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        })
    },
    findMajorAllVocationStudentNum() {


      if (document.querySelector('#majorName').value.search('{') == -1) {
        this.majorName = document.querySelector('#majorName').value;
      }

      axios.get("http://47.104.171.69/findMajorAllVocationStudentNum",
        {
          params: {
            grade: this.grade,
            majorName: this.majorName
          }
        }).then((response) => {
          var chart = echarts.init(document.querySelector('.chart3'));

          var option = {

            textStyle: {
              fontFamily: 'Poppins'
            },
            color: ['#5bb1ea', '#a5d5e3', '#9cb7c0', '#b2d2d1', '#cae9e1'],

            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            toolbox: {
              show: true,
              right: '4%',
              top: '2%',
              feature: {
                saveAsImage: {
                  show: true,
                  title: '保存',
                  iconStyle: {
                  color: 'rgba(124, 214, 207, .5)',
                  }
                },
                dataView: {
                  show: true,
                  readOnly: true,
                  textareaBorderColor: 'rgba(0,0,0,.1)',
                  textColor: 'rgba(0,0,0,.6)',
                  buttonColor: '#2f89cf',
                  iconStyle: {
                    color: '#f4d2ac',
                  }
                },
              }
            },

            legend: {
              left: '16%',
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
                radius: ['35%', '70%'],
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

          let myData = response.data;
          console.log(myData);
          for (let i = 0; i < myData.length; i++) {
            option.series[0].data.push({ name: myData[i].vocationName, value: myData[i].studentNum });
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });
        })
    },

    findDepartmentAllProvinceEmploymentStudentNum() {

      if (document.querySelector('#departmentName1').value.search('{') == -1) {
        this.departmentName = document.querySelector('#departmentName1').value;
      }

      axios.get('http://47.104.171.69/findDepartmentAllProvinceEmploymentStudentNum', { params: { grade: this.grade, departmentName: this.departmentName } })
        .then((response) => {

          console.log(response.data);

          let chart = echarts.init(document.querySelector('.chart6'));

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

              left: 0,
              bottom: 0,
              showLabel: true,
              text: ["高", "低"],

              pieces: [{
                gt: 10,
                lte: 300,
                label: '10 - 300 人',
                color: '#065aab',
              }, {
                gt: 6,
                lte: 10,
                label: '6 - 10 人',
                color: '#066eab'
              }, {
                gt: 3,
                lte: 6,
                label: '3 - 6 人',
                color: '#0682ab'
              }, {
                gt: 0,
                lte: 3,
                label: '1 - 3人',
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
              zoom: 1.13,
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


        }, (error) => { console.log(error); })
    },
    findMajorAllProvinceEmploymentStudentNum() {

      if (document.querySelector('#majorName1').value.search('{') == -1) {
        this.majorName = document.querySelector('#majorName1').value;
      }

      axios.get('http://47.104.171.69/findMajorAllProvinceEmploymentStudentNum', { params: { grade: this.grade, majorName: this.majorName } })
        .then((response) => {

          console.log(response.data);

          let chart = echarts.init(document.querySelector('.chart7'));

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

              left: 0,
              bottom: 0,
              showLabel: true,
              text: ["高", "低"],

              pieces: [{
                gt: 10,
                lte: 200,
                label: '10 - 200 人',
                color: '#065aab',
              }, {
                gt: 6,
                lte: 10,
                label: '6 - 10 人',
                color: '#066eab'
              }, {
                gt: 3,
                lte: 6,
                label: '3 - 6 人',
                color: '#0682ab'
              }, {
                gt: 0,
                lte: 3,
                label: '1 - 3人',
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
              zoom: 1.13,
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


        }, (error) => { console.log(error); })
    },

  }
})














