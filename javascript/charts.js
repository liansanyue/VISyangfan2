function load() {
    require.config({
        paths: {
            echarts: 'source'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        //回调函数
        // DrawEchart;
        
        function(ec) {
            var chartContainerpie = document.getElementById("pie_place");
            var myChartpie = ec.init(chartContainerpie);
            var optionpie = {
                

                legend: {
                    orient: 'vertical',
                    x: 'center',
                    y: '80%',
                    data: ['AQI<100               186天         51%', 'AQI>100                179天          49%']

                },
                calculable: true,
                series: [{

                    type: 'pie',
                    radius: '50%',

                    center: ['50%', '35%'],
                    data: [

                        {
                            value: 51,
                            name: 'AQI<100               186天         51%'
                        }, {
                            value: 49,
                            name: 'AQI>100                179天          49%'
                        }

                    ],

                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{d}%'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }]
            };
            var chartContainerpie1 = document.getElementById("pie_place1");
            var myChartpie1 = ec.init(chartContainerpie1);
            var optionpie1 = {
              
                legend: {
                    orient: 'vertical',
                    x: 'center',
                    y: '80%',
                    data: ['AQI<100               186天         51%', 'AQI>100                179天          49%']

                },
                calculable: true,
                series: [{

                    type: 'pie',
                    radius: '50%',

                    center: ['50%', '35%'],
                    data: [

                        {
                            value: 51,
                            name: 'AQI<100               186天         51%'
                        }, {
                            value: 49,
                            name: 'AQI>100                179天          49%'
                        }

                    ],

                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{d}%'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }]
            };
            var chartContainerpie2 = document.getElementById("pie_place2");
            var myChartpie2 = ec.init(chartContainerpie2)
            var optionpie2 = {
                color: ['#5FD5F3', '#FFB981', '#B6A2DE'],

                legend: {
                    orient: 'vertical',
                    x: 'center',
                    y: '80%',
                    data: ['AQI<100                5月          41%', 'AQI>100                7月          59%']

                },
                calculable: true,
                series: [{

                    type: 'pie',
                    radius: '50%',

                    center: ['50%', '35%'],
                    data: [

                        {
                            value: 41,
                            name: 'AQI<100                5月          41%'
                        }, {
                            value: 59,
                            name: 'AQI>100                7月          59%'
                        }

                    ],

                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{d}%'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }
                }]
            };
            var chartContainerline = document.getElementById("line_place");
            var myChartline = ec.init(chartContainerline);
            var optionline = {
               //   backgroundColor: 'white',
                color: ['red'],

                //数据提示框配置
                tooltip: {
                    trigger: 'axis'
                },

                saveAsImage: false,
                xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        name: "时间（月）"
                    }

                ],
                yAxis: [{

                    type: 'value',
                    name: "AOI(空气质量)"

                }],
                series: [{

                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120]

                }]
            };
            var chartContainerline1 = document.getElementById("line_place1");
            var myChartline1 = ec.init(chartContainerline1);
            var optionline1 = {
                color: ['red'],

                //数据提示框配置
                tooltip: {
                    trigger: 'axis'
                },

                saveAsImage: false,
                xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        name: "时间（月）"
                    }

                ],
                yAxis: [{

                    type: 'value',
                    name: "AOI(空气质量)"

                }],
                series: [{

                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120]

                }]
            };
            var chartContainerline2 = document.getElementById("line_place2");
            var myChartline2 = ec.init(chartContainerline2);
            var optionline2 = {
                color: ['red'],

                //数据提示框配置
                tooltip: {
                    trigger: 'axis'
                },

                saveAsImage: false,
                xAxis: [{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        name: "时间（月）"
                    }

                ],
                yAxis: [{

                    type: 'value',
                    name: "AOI(空气质量)"

                }],
                series: [{

                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120]

                }]
            };
            var chartContainerbar = document.getElementById("bar_place");
            var myChartbar = ec.init(chartContainerbar);
            var optionbar = {
                // backgroundColor: 'white',
                color: ['#2599A3'],

                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [

                    {
                        name: '时间(月)',
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [

                    {
                        name: '(AOI)峰值',
                        type: 'value'
                    }
                ],
                series: [{

                    type: 'bar',
                    barWidth: null,
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120],
                    itemStyle: {
                        normal: {

                            barBorderRadius: 5
                        }

                    }

                }]
            };
            var chartContainerbar1 = document.getElementById("bar_place1");
            var myChartbar1 = ec.init(chartContainerbar1);
            var optionbar1 = {
                color: ['#2599A3'],

                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [

                    {
                        name: '时间(月)',
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [

                    {
                        name: '(AOI)空气质量',
                        type: 'value'
                    }
                ],
                series: [{

                    type: 'bar',
                    barWidth: null,
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120],
                    itemStyle: {
                        normal: {

                            barBorderRadius: 5
                        }

                    }

                }]
            };
            var chartContainerbar2 = document.getElementById("bar_place2");
            var myChartbar2 = ec.init(chartContainerbar2);
            var optionbar2 = {
                color: ['#2599A3'],

                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [

                    {
                        name: '时间(月)',
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [

                    {
                        name: '(AOI)空气质量',
                        type: 'value'
                    }
                ],
                series: [{

                    type: 'bar',
                    barWidth: null,
                    data: [100, 130, 130, 120, 125, 176, 135, 162, 255, 100, 110, 120],
                    itemStyle: {
                        normal: {

                            barBorderRadius: 5
                        }

                    }

                }]
            }
            myChartpie.setOption(optionpie);
            myChartpie1.setOption(optionpie1);
            myChartpie2.setOption(optionpie2);
            myChartline.setOption(optionline);
            myChartline1.setOption(optionline1);
            myChartline2.setOption(optionline2);
            myChartbar.setOption(optionbar);
            myChartbar1.setOption(optionbar1);
            myChartbar2.setOption(optionbar2);

            /*点击地区*/
            var option = new Array();
            option = [optionbar, optionline, optionpie];
            var option1 = new Array();
            option1 = [optionbar1, optionline1, optionpie1];
            var option2 = new Array();
            option2 = [optionbar2, optionline2, optionpie2];
            var data = [topvalue_BeiJing_Data["月粒度"], topvalue_ShangHai_Data["月粒度"], topvalue_GuangZhou_Data["月粒度"]];
            var a = 0,
                b = 0,
                c = 0;
           /*  var count = [a, b, c];
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < 12; j++) {
                    if ((data[i][j] < 100) || (data[i][j] == 100)) {
                        count[i]++;
                    }

                }
            } */
            //标记
            var count_flag = new Array(3);
            count_flag[0]=new Array(51,49);
            count_flag[1]=new Array(78,22);
            count_flag[2]=new Array(85,15);
            /* for (var i = 0; i < count.length; i++) {
                count_flag[i] = parseInt((count[i] / 12) * 100);

            } */
            var flag = 0;
            var ad = document.getElementsByClassName("ad");
            var li = ad[0].getElementsByTagName("li");

            function diqu_onclick(li, option) {
                for (var i = 0; i < li.length; i++) {
                    li[i].id = i;
                    li[i].onclick = function() {


                        option[0].series[0].data = data[this.id];
                        option[1].series[0].data = data[this.id];
                        option[2].series[0].data[0].value = count_flag[this.id][0];
                        option[2].series[0].data[0].name = option[2].legend.data[0] = 'AQI<100                ' +parseInt(365*count_flag[this.id][0]/100)+ '天         ' +count_flag[this.id][0] + '%';
                        option[2].series[0].data[1].value = count_flag[this.id][1];
                        option[2].series[0].data[1].name = option[2].legend.data[1] = 'AQI>100                ' +parseInt(365-(365*count_flag[this.id][0]/100))+ '天          ' + count_flag[this.id][1] + '%';
                        // alert(option[j].series[0].data);
                        flag = this.id; //标记，为点击粒度提供依据
                        remove_boder_bottom(this.id, li);

                        myChartpie.setOption(optionpie);
                        myChartpie1.setOption(optionpie1);
                        myChartpie2.setOption(optionpie2);
                        myChartline.setOption(optionline);
                        myChartline1.setOption(optionline1);
                        myChartline2.setOption(optionline2);
                        myChartbar.setOption(optionbar);
                        myChartbar1.setOption(optionbar1);
                        myChartbar2.setOption(optionbar2);


                    }
                }

            }

            diqu_onclick(li, option);
            var li1 = ad[1].getElementsByTagName("li");
            diqu_onclick(li1, option1);
            var li2 = ad[2].getElementsByTagName("li");
            diqu_onclick(li2, option2);
            /*点击地区结束*/


            /*点击粒度*/

            var feng_yue = [topvalue_BeiJing_Data['月粒度'], topvalue_ShangHai_Data['月粒度'], topvalue_GuangZhou_Data['月粒度']];
            var pingjun_yue = [Av_BeiJing_Data['月粒度'], Av_ShangHai_Data['月粒度'], Av_GuangZhou_Data['月粒度']];
            var AQI_yue = [sm_BeiJing_Data['月粒度'], sm_ShangHai_Data['月粒度'], sm_GuangZhou_Data['月粒度']];
            var data_yue = [feng_yue, pingjun_yue, AQI_yue];

            var feng_zhou = [topvalue_BeiJing_Data['周粒度'], topvalue_ShangHai_Data['周粒度'], topvalue_GuangZhou_Data['周粒度']];
            var pingjun_zhou = [Av_BeiJing_Data['周粒度'], Av_ShangHai_Data['周粒度'], Av_GuangZhou_Data['周粒度']];
            var AQI_zhou = [sm_BeiJing_Data['周粒度'], sm_ShangHai_Data['周粒度'], sm_GuangZhou_Data['周粒度']];
            var data_zhou = [feng_zhou, pingjun_zhou, AQI_zhou];

            var feng_ji = [topvalue_BeiJing_Data['季粒度'], topvalue_ShangHai_Data['季粒度'], topvalue_GuangZhou_Data['季粒度']];
            var pingjun_ji = [Av_BeiJing_Data['季粒度'], Av_ShangHai_Data['季粒度'], Av_GuangZhou_Data['季粒度']];
            var AQI_ji = [sm_BeiJing_Data['季粒度'], sm_ShangHai_Data['季粒度'], sm_GuangZhou_Data['季粒度']];
            var data_ji = [feng_ji, pingjun_ji, AQI_ji];
            var data_lidu = [data_yue, data_zhou, data_ji];

            var lidu = document.getElementsByClassName("lidu");
            var li_lidu = lidu[0].getElementsByTagName("li");
            var data_x = [
                ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53'],
                ['春', '夏', '秋', '冬']
            ];
            var x = ['月', '周', '季'];
            var y_name = ['时间(月)', '时间(周)', '时间(季)'];
            var flag_lidu = 0;
            var flag_zong = 0;

              function lidu_onclick(li_lidu,option,myChartpie,myChartline,myChartbar,optionpie,optionbar,optionline){
                    for (var i=0;i<li_lidu.length;i++)
                    {

                        li_lidu[i].id=i;
                        li_lidu[i].onclick=function(){ 
                              if(this.id==1)
                      {option[1].xAxis[0].axisLabel = {
                            interval: 9
                        };}
                        else{
                           option[1].xAxis[0].axisLabel = {
                            interval: 0
                        }; 
                        }
                            data=data_lidu[this.id][flag_zong];//改变横坐标的同时，改变三个地区的数据;
                            
                            
                            option[0].xAxis[0].name=y_name[this.id];
                            option[0].xAxis[0].data=data_x[this.id];
                            
                            option[0].series[0].data=data_lidu[this.id][flag_zong][flag];
                            option[1].xAxis[0].data=data_x[this.id];
                            option[1].series[0].data=data_lidu[this.id][flag_zong][flag];
                            option[1].series[0].name=y_name[this.id];
                          /*   option[2].series[0].data[0].value=count_flag[this.id];
                            option[2].series[0].data[0].name=option[2].legend.data[0]='AQI<100                '+count[this.id]+x[this.id]+'          '+count_flag[this.id]+'%';
                            option[2].series[0].data[1].value=100-count_flag[this.id];
                            option[2].series[0].data[1].name=option[2].legend.data[1]='AQI>100                '+(12-count[this.id])+x[this.id]+'          '+(100-count_flag[this.id])+'%'; */
                       
                            flag_lidu=this.id;
                            remove_boder_bottom(this.id,li_lidu);


                            /*myChartpie.clear();
                            myChartpie1.clear();
                            myChartpie2.clear();*/
                            myChartbar.clear();
                            myChartline.clear();
                           /* myChartline1.clear();
                            myChartpie2.clear();
                            myChartbar1.clear();
                            myChartbar2.clear()*/;
                           // myChartpie.setOption(optionpie);
                           /* myChartpie1.setOption(optionpie1);
                            myChartpie2.setOption(optionpie2);*/
                            myChartline.setOption(optionline);
                           /* myChartline1.setOption(optionline1);
                            myChartline2.setOption(optionline2);*/
                            myChartbar.setOption(optionbar);
                          /*  myChartbar1.setOption(optionbar1);
                            myChartbar2.setOption(optionbar2);*/

                        }
                    }
                }
                lidu_onclick(li_lidu,option,myChartpie,myChartline,myChartbar,optionpie,optionbar,optionline);
                var li_lidu1=lidu[1].getElementsByTagName("li");
                 lidu_onclick(li_lidu1,option1,myChartpie1,myChartline1,myChartbar1,optionpie1,optionbar1,optionline1);
                var li_lidu2=lidu[2].getElementsByTagName("li");
                 lidu_onclick(li_lidu2,option2,myChartpie2,myChartline2,myChartbar2,optionpie2,optionbar2,optionline2);   
                remove_boder_bottom(0,li_lidu);
                remove_boder_bottom(0,li_lidu1);
                remove_boder_bottom(0,li_lidu2);   
                
            // alert(lidu.length);
            /*点击粒度结束*/

            /*点击纵坐标*/

            var yue_feng = [topvalue_BeiJing_Data["月粒度"], topvalue_ShangHai_Data["月粒度"], topvalue_GuangZhou_Data["月粒度"]];
            var ji_feng = [topvalue_BeiJing_Data["季粒度"], topvalue_ShangHai_Data["季粒度"], topvalue_GuangZhou_Data["季粒度"]];
            var zhou_feng = [topvalue_BeiJing_Data["周粒度"], topvalue_ShangHai_Data["周粒度"], topvalue_GuangZhou_Data["周粒度"]];
            var data_feng = [yue_feng, zhou_feng, ji_feng];

            var yue_ping = [Av_BeiJing_Data["月粒度"], Av_ShangHai_Data["月粒度"], Av_GuangZhou_Data["月粒度"]];
            var ji_ping = [Av_BeiJing_Data["季粒度"], Av_ShangHai_Data["季粒度"], Av_GuangZhou_Data["季粒度"]];
            var zhou_ping = [Av_BeiJing_Data["周粒度"], Av_ShangHai_Data["周粒度"], Av_GuangZhou_Data["周粒度"]];
            var data_pingjun = [yue_ping, zhou_ping, ji_ping];

            var yue_AQ = [sm_BeiJing_Data["月粒度"], sm_ShangHai_Data["月粒度"], sm_GuangZhou_Data["月粒度"]];
            var ji_AQ = [sm_BeiJing_Data["季粒度"], sm_ShangHai_Data["季粒度"], sm_GuangZhou_Data["季粒度"]];
            var zhou_AQ = [sm_BeiJing_Data["周粒度"], sm_ShangHai_Data["周粒度"], sm_GuangZhou_Data["周粒度"]];
            var data_AOI = [yue_AQ, zhou_AQ, ji_AQ];

            var data_zong = [data_feng, data_pingjun, data_AOI];
            var zong_name = ['AQI峰值', 'AQI平均值', 'AQI<100的天数'];
            var y = document.getElementsByClassName("y");
            var li_y = y[0].getElementsByTagName("li");

            function onclick_zong(li_y, option) {
                for (var i = 0; i < li_y.length; i++) {
                    li_y[i].id = i;
                    li_y[i].onclick = function() {

                        data = data_zong[this.id][flag_lidu]; //改变横坐标的同时，改变三个地区的数据;


                        option[0].yAxis[0].name = zong_name[this.id];

                        option[0].series[0].data = data_zong[this.id][flag_lidu][flag];

                        option[1].series[0].data = data_zong[this.id][flag_lidu][flag];
                        option[1].yAxis[0].name = zong_name[this.id];
                       /*  option[2].series[0].data[0].value = count_flag[this.id];
                        option[2].series[0].data[0].name = option[2].legend.data[0] = 'AQI<100                ' + count[this.id] + x[this.id] + '          ' + count_flag[this.id] + '%';
                        option[2].series[0].data[1].value = 100 - count_flag[this.id];
                        option[2].series[0].data[1].name = option[2].legend.data[1] = 'AQI>100                ' + (12 - count[this.id]) + x[this.id] + '          ' + (100 - count_flag[this.id]) + '%'; */

                        flag_zong = this.id;
                        remove_boder_bottom(this.id, li_y);
                       /*  myChartpie.setOption(optionpie);
                        myChartpie1.setOption(optionpie1);
                        myChartpie2.setOption(optionpie2); */
                        myChartline.setOption(optionline);
                        myChartline1.setOption(optionline1);
                        myChartline2.setOption(optionline2);
                        myChartbar.setOption(optionbar);
                        myChartbar1.setOption(optionbar1);
                        myChartbar2.setOption(optionbar2);
                    }
                }
            }
            onclick_zong(li_y, option);
            var li_y1 = y[1].getElementsByTagName("li");
            onclick_zong(li_y1, option1);
            var li_y2 = y[2].getElementsByTagName("li");
            onclick_zong(li_y2, option2);
            /*点击纵坐标结束*/


        }
    );

}

load();