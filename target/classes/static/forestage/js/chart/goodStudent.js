const app = new Vue({

  el: '#app',

  data: {
    grade: 2018,
    studentNum: 0,
    provinceName: '',
    provinces: [],
    topTenStudentInfo: []
  },

  watch: {
    grade() {
      this.render_chart1();
      this.render_chart2();
      this.render_chart3();

    }
  },

  created() {

    this.render_chart1();
    this.render_chart2();
    this.render_chart3();
  },
  methods: {

    render_chart1() {
      axios.get('http://47.104.171.69/findAllDepartmentGoodStudentInfo', { params: { grade: this.grade } })
        .then((response) => {

          let chart = echarts.init(document.querySelector('.chart1'));

          let responseData = response.data;

          function getData() {
            let data = {
              name: '学校',
              value: '',
              children: []
            };

            let tempDepartment = responseData[0].departmentName;


            let department = {
              name: responseData[0].departmentName,
              value: '',
              children: [],
            };


            for (let i = 0; i < responseData.length; i++) {

              if (responseData[i].departmentName != tempDepartment) {


                data.children.push(department);


                tempDepartment = responseData[i].departmentName;

                department = new Object();

                department.name = responseData[i].departmentName;
                department.children = [];
                department.value = '';


                department.children.push({
                  name: responseData[i].studentName, value: '', children: [
                    { name: '专业名称', value: responseData[i].majorName },
                    { name: '学霸指数', value: responseData[i].studentScore }
                  ]
                });

              } else {

                department.children.push({
                  name: responseData[i].studentName, value: '', children: [
                    { name: '专业名称', value: responseData[i].majorName },
                    { name: '学霸指数', value: responseData[i].studentScore }
                  ]
                });

                if (i == responseData.length - 1) {
                  data.children.push(department);

                }

              }

            }


            let arr = [];
            arr.push(data);

            return arr;

          };

          let option = {
            textStyle: {
              fontFamily: 'Poppins'
            },
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove'
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
                // restore: {}
              }
            },
            series: [
              {
                type: 'tree',
                id: 0,
                name: '',
                data: getData(),

                top: '10%',
                left: '10%',
                bottom: '20%',
                right: '22%',

                symbol: 'roundRect',
                symbolSize: 10,

                edgeShape: 'polyline',
                edgeForkPosition: '63%',
                initialTreeDepth: 1,
                nodePadding: 100,

                lineStyle: {
                  color: '#17a2b8',
                  width: 2,
                  curveness: 0.3,

                },

                label: {

                  backgroundColor: '#fff',
                  position: 'left',
                  verticalAlign: 'middle',
                  align: 'right',
                  formatter: '{b}   {c}'
                },

                leaves: {
                  label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left',
                  },
                  itemStyle: {
                    color: 'skyblue',
                    borderWidth: '2',
                  }
                },
                roam: true,
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
              }
            ]
          };


          chart.setOption(option, true);

          window.addEventListener('resize', function () {
            chart.resize();
          });

        })

    },
    render_chart2() {
      axios.get("http://47.104.171.69/findSchoolTopTenStudent", { params: { grade: this.grade } }).then((response) => {

        var chart = echarts.init(document.querySelector('.chart2'));

        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#00adb5', '#ffc300', '#ff2e63', '#fcbad3', '#00A488'];

        var option = {
          textStyle: {
            fontFamily: 'Poppins'
          },

          grid: {
            left: '0%',
            right: '2%',
            top: '10%',
            bottom: '3%',
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
                margin: 12,
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
              data: [],
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
              data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
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

        this.topTenStudentInfo = myData;

        for (let i = 0; i < myData.length; i++) {
          option.yAxis[0].data[i] = myData[i].studentName;

          option.series[0].data[i] = myData[i].studentScore;
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
      axios.get("http://47.104.171.69/findAllDepartmentGoodStudentNum", { params: { grade: this.grade} }).then((response) => {

        let chart3 = echarts.init(document.querySelector('.chart3'));

        let option3 = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', '#138cfd'],

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
                  color: '#9fe6b8',
                },
              },
              saveAsImage: {
                show: true,
                title: '保存',
                iconStyle: {
                  color: '#0096ff',
                },
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

              data: []
            }
          ]
        };

        
        let chart4 = echarts.init(document.querySelector('.chart4'));

        let option4 = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', '#138cfd'],

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
                  color: '#9fe6b8',
                },
              },
              saveAsImage: {
                show: true,
                title: '保存',
                iconStyle: {
                  color: '#0096ff',
                },
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

              data: []
            }
          ]
        };

        
        let chart5 = echarts.init(document.querySelector('.chart5'));

        let option5 = {

          textStyle: {
            fontFamily: 'Poppins'
          },
          color: ['#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff', '#138cfd'],

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
                  color: '#9fe6b8',
                },
              },
              saveAsImage: {
                show: true,
                title: '保存',
                iconStyle: {
                  color: '#0096ff',
                },
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

              data: []
            }
          ]
        };

        let myData = response.data;

        for (let i = 0; i < myData.length/3; i++) {
          console.log(i);
          option3.series[0].data.push({name: myData[i].departmentName, value: myData[i].studentNum});
        }

        for (let i = myData.length/3; i < myData.length/3*2; i++) {
          option4.series[0].data.push({name: myData[i].departmentName, value: myData[i].studentNum});
        }

        for (let i = myData.length/3*2; i < myData.length; i++) {
          option5.series[0].data.push({name: myData[i].departmentName, value: myData[i].studentNum});
        }

        chart3.setOption(option3);
        chart4.setOption(option4);
        chart5.setOption(option5);

        window.addEventListener('resize', function () {
          chart3.resize();
          chart4.resize();
          chart5.resize();
        });

      }, (err) => {
        console.log(err);
      })
    }


  }

})














