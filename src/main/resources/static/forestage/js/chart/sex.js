


const app = new Vue({
  
  el: '#app',

  data: {
    grade: 2018,
    maleNum: 0,
    femaleNum: 0,
    provinceName: '上海',
    provinces: [],
  },

  watch: {
    grade(){
      this.render_chart1();
      this.render_chart2();
      this.render_chart3();
      this.render_chart4();

      this.findProvinceAllCityStudentNum();
    }
  },

  created() {

    this.render_chart1();
    this.render_chart2();
    this.render_chart3();
    this.render_chart4();

    this.findAllProvince();
    this.findProvinceAllCityStudentNum();
  },

  methods: {

    render_chart1() {

      let that = this;

      function findAllProvinceMaleNum() {
        return axios.get("http://47.104.171.69//findAllProvinceMaleNum",{params: {grade: that.grade}});
      }

      function findAllProvinceFemaleNum() {
        return axios.get("http://47.104.171.69//findAllProvinceFemaleNum",{params: {grade: that.grade}});
      }

      axios.all([findAllProvinceMaleNum(), findAllProvinceFemaleNum()])
        .then(axios.spread(function (response1, response2) {

          let chart = echarts.init(document.querySelector('.chart1'));

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
              top: '2%',
              right: '2%',
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
                name: '男生数量',
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
                name: '女生数量',
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

          let maleData = response1.data;
          let femaleData = response2.data;

          for (let i = 0; i < maleData.length; i++) {
            option.series[0].data[i] = maleData[i].studentNum;
            option.series[1].data[i] = femaleData[i].studentNum;
            option.xAxis[0].data[i] = maleData[i].provinceName;
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        }));

    },
    render_chart2() {
      axios.get("http://47.104.171.69/findSchoolSexScale",{params: {grade: this.grade}}).then((response) => {

        let chart = echarts.init(document.querySelector('.chart2'));

        let option = {

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {

            bottom: '0%',
            left: '20%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: 'rgba(0,0,0,.5)',
              fontSize: '12'
            },

          },
          series: [
            {
              color: [
                '#065aab',
                '#0696ab'
              ],
              name: '性别占比',
              type: 'pie',
              radius: ['40%', '60%'],
              center: ['50%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 0, name: "男生人数" },
                { value: 0, name: "女生人数" }
              ]
            }
          ]
        };

        let myData = response.data;

        let studentNum = myData.studentNum;
        let femaleNum = myData.femaleNum;
        let maleNum = myData.maleNum;

        option.series[0].data[0].value = maleNum;
        option.series[0].data[1].value = femaleNum;

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });


        let data1 = document.querySelectorAll('.tip-studentNum');
        let data2 = document.querySelectorAll('.tip-maleNum');
        let data3 = document.querySelectorAll('.tip-femaleNum');

        data1.forEach((data) => {
          data.innerHTML = studentNum + '人';
        })

        data2.forEach((data) => {
          data.innerHTML = maleNum + '人';
        })

        data3.forEach((data) => {
          data.innerHTML = femaleNum + '人';
        })


      }, (err) => {
        console.log(err);
      })

    },
    render_chart3() {
      axios.get("http://47.104.171.69/findProvinceSexScale",{params: {grade: this.grade,provinceName:'山东'}}).then((response) => {

        let chart = echarts.init(document.querySelector('.chart3'));

        let option = {

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {

            bottom: '0%',
            left: '20%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: 'rgba(0,0,0,.5)',
              fontSize: '12'
            },

          },
          series: [
            {
              color: [
                '#065aab',
                '#06a0ab'
              ],
              name: '性别占比',
              type: 'pie',
              radius: ['40%', '60%'],
              center: ['50%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 0, name: "男生人数" },
                { value: 0, name: "女生人数" }
              ]
            }
          ]
        };

        let myData = response.data;

        let studentNum = myData.studentNum;
        let femaleNum = myData.femaleNum;
        let maleNum = myData.maleNum;

        option.series[0].data[0].value = maleNum;
        option.series[0].data[1].value = femaleNum;

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });


        let tip = document.querySelector('.tip-provinceStudentNum');
        let data2 = document.querySelectorAll('.tip-maleNum');
        let data3 = document.querySelectorAll('.tip-femaleNum');


        tip.innerHTML = studentNum + '人';

      }, (err) => {
        console.log(err);
      })


    },
    render_chart4() {

      let that = this;

      function findAllDepartmentMaleNum() {
        return axios.get("http://47.104.171.69//findAllDepartmentMaleNum",{params: {grade: that.grade}});
      }

      function findAllDepartmentFemaleNum() {
        return axios.get("http://47.104.171.69//findAllDepartmentFemaleNum",{params: {grade: that.grade}});
      }

      axios.all([findAllDepartmentMaleNum(), findAllDepartmentFemaleNum()])
        .then(axios.spread(function (response1, response2) {

          let maleData = response1.data;
          let femaleData = response2.data;

          let chart = echarts.init(document.querySelector('.chart4'));

          let option = {
            textStyle: {
              fontFamily: 'Poppins'
            },
            color: ['#065aab', '#06a0ab'],
            tooltip: {
              trigger: 'axis',
            },
            legend: {
              right: '0%'
            },
            grid: {
              top: '2%',
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
                name: '男生',
                type: 'bar',
                barWidth: '30%',
                data: [],

                itemStyle: {
                  barBorderRadius: 5,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 6
                }
              },
              {
                name: '女生',
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


          for (let i = 0; i < maleData.length; i++) {
            option.series[0].data[i] = maleData[i].studentNum;
            option.series[1].data[i] = femaleData[i].studentNum;
            option.xAxis[0].data[i] = maleData[i].departmentName;
          }

          chart.setOption(option);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        }))
    },

    findAllProvince() {
      axios.get("http://47.104.171.69/findAllProvince").then((response) => {  
        this.provinces = response.data;
      },(error) => {})
    },

    findProvinceAllCityStudentNum () {

      if(document.querySelector('#provinceName').value.search('{') == -1 ) {
      this.provinceName = document.querySelector('#provinceName').value;
      }

        let that = this;
         
        function findProvinceAllCityMaleNum() {

          return axios.get('http://47.104.171.69/findProvinceAllCityMaleNum', {
            params: {
              grade: that.grade,
              provinceName: that.provinceName
            }
          })
        }
      
        function findProvinceAllCityFemaleNum() {
          return axios.get('http://47.104.171.69/findProvinceAllCityFemaleNum', {
            params: {
              grade: that.grade,
              provinceName: that.provinceName
            }
          })
        }

        axios.all([findProvinceAllCityMaleNum(), findProvinceAllCityFemaleNum()])
        .then(axios.spread( (response1, response2) => {
          
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
                name: '男生数量',
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
                name: '女生数量',
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

          this.maleNum = 0;
          this.femaleNum = 0;

          let cityMaleData = response1.data;
          let cityFemaleData = response2.data;


          for (let i = 0; i < cityMaleData.length; i++) {
            option.series[0].data[i] = cityMaleData[i].maleNum;
            option.series[1].data[i] = cityFemaleData[i].femaleNum;
            option.xAxis[0].data[i] = cityMaleData[i].cityName;

            this.maleNum += cityMaleData[i].maleNum;
            this.femaleNum += cityFemaleData[i].femaleNum;
          }
    
          chart.setOption(option);
    
          window.addEventListener('resize', function () {
            chart.resize();
          });
          

        }))


    }

  }
})









    
  

    

       
      
 




