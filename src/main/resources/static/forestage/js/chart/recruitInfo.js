const app = new Vue({
  
  el: '#app',

  data: {
    grade: 2020,
    provinceNum: 0,
    countryNum: 0,
    studentNum: 0
  },

  watch: {
    grade() {

      this.render_chart2();
      this.render_chart1();
    }
  },

  created() {

    this.render_chart2();
    this.render_chart1();

  },
  methods: {

    render_chart1() {
      axios.get("http://47.104.171.69/findAllForeignStudentRecruit", { params: { grade: this.grade} }).then((response) => {

        let chart = echarts.init(document.querySelector('.chart1'));

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
            bottom: '10%',
            showLabel: true,

            pieces: [{
              gte: 5000,
              
              label: '5000 人以上 ',
              color: '#065aab',
            }, {
              gte: 10,
              lte: 50,
              label: '10 - 50 人',
              color: '#0682ab',
            },{
              gt: 1,
              lte: 10,
              label: '1 - 10人',
              color: '#06a0ab'
            }, {
              value: 0,
              label: 'no one',
              color: '#ebf1f7'
            }]
          },
          geo: {
            map: 'world',
            roam: true,

            zoom: 1.23,

            itemStyle: {

              emphasis: {
                areaColor: "#6699cc",
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


        for (let i = 0; i < response.data.length; i++) {

          let name = response.data[i].provinceName;
          let value = response.data[i].studentNum;

          this.countryNum += 1;

          option.series[0].data.push({ name: name, value: value });

        }


        option.series[0].data.push({ name: 'China', value: 6959 });

        chart.setOption(option,true);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })
    }, 
    render_chart2() {
      axios.get("http://47.104.171.69/findAllProvinceStudentRecruit", { params: { grade: this.grade} }).then((response) => {

        let chart = echarts.init(document.querySelector('.chart2'));

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
            }]
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




        for (let i = 0; i < response.data.length; i++) {

          let name = response.data[i].provinceName;
          let value = response.data[i].studentNum;

          this.studentNum += response.data[i].studentNum;

          if(value != 0){
            this.provinceNum += 1;
          }

          option.series[0].data.push({ name: name, value: value });

        }

        option.series[0].data.push({ name: '南海诸岛', value: 0 });

        chart.setOption(option);

        window.addEventListener('resize', function () {
          chart.resize();
        });

      }, (err) => {
        console.log(err);
      })

    },

 


  }

})














