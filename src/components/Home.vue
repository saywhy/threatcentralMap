<template>
    <div class="home">
        <!-- <e-map></e-map> -->
        <div class="title">
            <h2>全知威胁情报平台</h2>
        </div>
        <el-row :gutter="10">
            <!-- 左边 -->
            <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
                <div class="grid_content bg_left">
                    <div class="bg_left_top">
                        <p>情报威胁等级分布</p>
                        <div class="bg_left_level">
                            <el-row :gutter="0">
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                                    <div id="level_high">dsds</div>
                                </el-col>
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                                    <div id="level_mid">dsds</div>
                                </el-col>
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                                    <div id="level_low">dsds</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="bg_left_mid ">
                        <p>情报威胁地域态势</p>
                        <div class="bg_left_level">
                            <div id="world_map"></div>
                        </div>
                    </div>
                    <div class="bg_left_bom ">
                        <p>情报种类分布统计</p>
                        <div class="bg_left_level">
                            <el-row :gutter="20" class="bg_left_level_item">
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#993947">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#01458C">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#9C7048">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                                    <div class="item_col" style="background:#54464B">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="bg_left_level_item">
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#117372">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#4B589D">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#7F167B">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                                    <div class="item_col" style="background:#787109">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20" class="bg_left_level_item">
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#717417">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#538F06">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="border-right: 1px dashed #eee;">
                                    <div class="item_col" style="background:#9B818B">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                                    <div class="item_col" style="background:#0193A3">
                                        <p class="item_col_title">情报种类</p>
                                        <p class="item_col_num"> 20</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </el-col>
            <!-- 中间 -->
            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <div class="grid_content bg_mid">
                    <div class="bg_mid_top">
                        <el-row :gutter="0">
                            <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <p>情报总数:198736</p>
                            </el-col>
                            <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <p>监控资产总数:2006</p>
                            </el-col>
                            <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <p>风险资产总数:457</p>
                            </el-col>
                            <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <p>威胁告警总数:3782</p>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                                <p>漏洞总数:526</p>
                            </el-col>
                        </el-row>
                        <div id="echarts3d"></div>
                    </div>
                    <div class="bg_mid_bom">
                        <el-row :gutter="0">
                            <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                                <el-row :gutter="0">
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <p>实时情报更新</p>
                                    </el-col>
                                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <p>实时威胁告警</p>
                                    </el-col>

                                </el-row>
                                <div>
                                    <img src="../assets/img/123.jpg" alt="" class="bg_mid_bom_img">
                                </div>
                            </el-col>
                            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                                <p>信息扩展和关联</p>
                                <div id="info_relation">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <!-- 右边 -->
            <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
                <div class="grid_content bg_right">
                    <div class="bg_right_top">
                        <p>监控资产统计</p>
                        <div id="risk">
                        </div>
                    </div>
                    <div class="bg_right_mid">
                        <p>风险资产TOP5</p>
                        <el-table :data="tableData" style="width: 100%;" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor">
                            <el-table-column prop="ip" label="IP地址" width="180" style="background:rgba(6, 33, 65, 0.5)">
                            </el-table-column>
                            <el-table-column prop="type" label="资产类型" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地区">
                            </el-table-column>
                            <el-table-column prop="num" label="威胁数">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="bg_right_bom">
                        <p>威胁告警</p>
                        <el-row :gutter="0">
                            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <div id="threat_alarm_left">
                                </div>
                            </el-col>
                            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <div id="threat_alarm_right">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style  lang="less">
.home {
  //   min-height: 1080px;
  //   min-width: 1920px;
  * {
    box-sizing: border-box;
  }
  padding: 0 15px;
  overflow: auto;
  color: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  text-align: center;
  border: 1px solid #000000;
  background: url(../assets/img/bg4.png) no-repeat 0px 0px;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
  .title {
    margin-top: 30px;
    // position: absolute;
    // z-index: 99;
    width: 100%;
    left: 0;
    top: 20px;
    height: 50px;
  }
  .el-col {
    border-radius: 4px;
    .grid_content {
      border-radius: 4px;
      min-height: 980px;
    }
    .bg_left {
      background: rgba(6, 33, 65, 0.5);
      border-radius: 5px;
      p {
        height: 30px;
      }
      .bg_left_top {
        border: 1px solid #0f2767;
        border-radius: 5px;
        padding-top: 20px;
        height: 250px;
        margin-bottom: 30px;
        .bg_left_level {
          height: 220px;
          padding-top: 20px;
          #level_high {
            // border: 1px solid red;
            height: 150px;
          }
          #level_mid {
            // border: 1px solid red;
            height: 150px;
          }
          #level_low {
            // border: 1px solid red;
            height: 150px;
          }
        }
      }
      .bg_left_mid {
        border: 1px solid #0f2767;
        border-radius: 5px;
        //  background: green;
        height: 330px;
        padding-top: 10px;
        margin-bottom: 20px;
        #world_map {
          height: 285px;
          width: 100%;
        }
      }
      .bg_left_bom {
        padding: 10px;
        border: 1px solid #0f2767;
        height: 340px;
        .bg_left_level_item {
          height: 90px;
          margin-bottom: 10px;
          .item_col {
            padding-top: 10px;
            height: 80px;
            border-radius: 3px;
            .item_col_title {
              font-size: 14px;
              height: 26px;
            }
            .item_col_num {
              font-size: 30px;
              font-weight: 700;
            }
          }
        }
      }
    }
    .bg_mid {
      p {
        height: 30px;
      }
      .bg_mid_top {
        border: 1px solid #0f2767;
        height: 610px;
        padding-top: 30px;
        margin-bottom: 20px;
        background: rgba(6, 33, 65, 0.5);
        #echarts3d {
          height: 580px;
        }
      }
      .bg_mid_bom {
        border: 1px solid #0f2767;
        background: rgba(6, 33, 65, 0.5);
        height: 340px;
        padding-top: 10px;
        #info_relation {
          //   border: 1px solid red;
          height: 300px;
        }
        .bg_mid_bom_img {
          width: 100%;
          height: 300px;
        }
      }
    }
    .bg_right {
      background: rgba(6, 33, 65, 0.5);
      border-radius: 5px;
      .bg_right_top {
        border: 1px solid #0f2767;
        border-radius: 5px;
        padding-top: 20px;
        height: 250px;
        margin-bottom: 30px;
        #risk {
          height: 200px;
          width: 100%;
        }
      }
      .bg_right_mid {
        border: 1px solid #0f2767;
        border-radius: 5px;
        padding-top: 10px;
        height: 330px;
        margin-bottom: 20px;
        p {
          height: 30px;
        }
        .el-table {
          color: #fff;
          background-color: rgba(6, 33, 65, 0.9) !important;
          border-radius: 3px;
        }
        .el-table th,
        .el-table tr {
          background-color: rgba(6, 33, 65, 0.9);
        }
        .el-table--enable-row-hover .el-table__body tr:hover > td {
          background-color: rgba(65, 6, 26, 0.65) !important;
        }
        .el-table td,
        .el-table th.is-leaf {
          border-bottom: 1px solid #0f2767;
        }
        .el-table--border::after,
        .el-table--group::after,
        .el-table::before {
          content: "";
          position: absolute;
          background-color: #ebeef5;
          z-index: -1;
        }
      }
      .bg_right_bom {
        padding: 10px;
        border: 1px solid #0f2767;
        height: 340px;
        p {
          height: 30px;
        }
        #threat_alarm_left {
          padding-top: 10px;
          height: 280px;
          //   border: 1px solid red;
        }
        #threat_alarm_right {
          padding-top: 10px;
          height: 280px;
          //   border: 1px solid red;
        }
      }
    }
  }
}
</style>

<script>
import EMap from 'components/e-map'
import '../../node_modules/echarts/map/js/world.js'
var echarts = require('echarts');
require('echarts-gl');
var world = require('../../static/world.js');
export default {
    components: {
        EMap
    },
    name: 'home',
    data() {
        return {
            tableData: [{
                ip: '192.168.1.2',
                type: '资产类型',
                address: '上海市',
                num: '221'
            }, {
                ip: '192.168.1.197',
                type: '资产类型',
                address: '北京市',
                num: '124'
            }, {
                ip: '192.168.21.185',
                type: '资产类型',
                address: '深圳',
                num: '122'
            }, {
                ip: '192.168.12.182',
                type: '资产类型',
                address: '杭州市',
                num: '112'
            }, {
                ip: '192.168.22.145',
                type: '资产类型',
                address: '重庆市',
                num: '97'
            }
            ]
        }
    },
    mounted() {
        this.level_high_echarts(); //高危
        this.level_mid_echarts();
        this.level_low_echarts();
        this.risk_echarts();
        this.threat_alarm_left_echarts();
        this.threat_alarm_right_echarts();
        this.world_map_echarts(); //世界地图
        this.info_relation_echarts();
        //  this.echarts3d();
    },
    methods: {
        gotoworldmap() {
            this.$router.push({
                path: '/WorldMap'
            })

        },
        level_high_echarts() {
            var mychart = echarts.init(document.getElementById("level_high"));
            var percent = 69; //百分数
            var color_percent0 = '',
                color_percent100 = '',
                dotArray = [];
            calculateDot(percent)//80%显示4个点，
            function calculateDot(data, type) {
                if (type == "level_high") {

                }
                if (data <= 20) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 20 && data <= 40) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 40 && data <= 60) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,123,0,.3)'
                } else if (data > 60 && data <= 80) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                } else if (data > 80 && data <= 100) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                }
            }
            var option = {
                title: {
                    "x": '45%',
                    "y": '45%',
                    textAlign: "center",
                    top: '68%',//字体的位置
                    'text': '高危',
                    "textStyle": {
                        "fontWeight": 'normal',
                        "color": '#FFF',
                        "fontSize": 14
                    }
                },
                xAxis: {
                    show: false,//是否展示x轴
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 225,
                    "color": [{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0.4,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: color_percent0 // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: color_percent100 // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }, 'none'],
                    "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
                    "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": ' ',
                    "type": 'pie',
                    "radius": ['48%', '47%'],
                    "avoidLabelOverlap": false,//是否启用防止标签重叠策略
                    "startAngle": 225,

                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 315,
                    "color": ['rgba(41,54,116,.9)', "#11275A", "transparent"],
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "clockwise": false,//饼图的扇区是否是顺时针排布。
                    "itemStyle": {
                        "normal": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        },
                        "emphasis": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        }
                    },
                    "z": 10,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },

                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": (100 - percent) * 270 / 360,
                        "label": {
                            normal: {
                                formatter: percent + '%',
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'normal',
                                    color: '#fff'
                                }
                            }
                        },
                        "name": ''
                    }, {
                        "value": 1,
                        "name": ''
                    }, {
                        "value": 100 - (100 - percent) * 270 / 360,
                        "name": ''
                    }]
                },
                ]
            };
            mychart.setOption(option, true);
        },
        level_mid_echarts() {
            var mychart = echarts.init(document.getElementById("level_mid"));
            var percent = 49; //百分数
            var color_percent0 = '',
                color_percent100 = '',
                dotArray = [];
            calculateDot(percent)//80%显示4个点，
            function calculateDot(data, type) {
                if (type == "level_high") {

                }
                if (data <= 20) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 20 && data <= 40) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 40 && data <= 60) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,123,0,.3)'
                } else if (data > 60 && data <= 80) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                } else if (data > 80 && data <= 100) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                }
            }
            var option = {
                title: {
                    "x": '45%',
                    "y": '45%',
                    textAlign: "center",
                    top: '68%',//字体的位置
                    'text': '中危',
                    "textStyle": {
                        "fontWeight": 'normal',
                        "color": '#FFF',
                        "fontSize": 14
                    }
                },
                xAxis: {
                    show: false,//是否展示x轴
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 225,
                    "color": [{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0.4,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: color_percent0 // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: color_percent100 // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }, 'none'],
                    "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
                    "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": ' ',
                    "type": 'pie',
                    "radius": ['48%', '47%'],
                    "avoidLabelOverlap": false,//是否启用防止标签重叠策略
                    "startAngle": 225,

                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 315,
                    "color": ['rgba(41,54,116,.9)', "#11275A", "transparent"],
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "clockwise": false,//饼图的扇区是否是顺时针排布。
                    "itemStyle": {
                        "normal": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        },
                        "emphasis": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        }
                    },
                    "z": 10,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },

                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": (100 - percent) * 270 / 360,
                        "label": {
                            normal: {
                                formatter: percent + '%',
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'normal',
                                    color: '#fff'
                                }
                            }
                        },
                        "name": ''
                    }, {
                        "value": 1,
                        "name": ''
                    }, {
                        "value": 100 - (100 - percent) * 270 / 360,
                        "name": ''
                    }]
                },
                ]
            };
            mychart.setOption(option, true);
        },
        level_low_echarts() {
            var mychart = echarts.init(document.getElementById("level_low"));
            var percent = 18; //百分数
            var color_percent0 = '',
                color_percent100 = '',
                dotArray = [];
            calculateDot(percent)//80%显示4个点，
            function calculateDot(data, type) {
                if (type == "level_high") {

                }
                if (data <= 20) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 20 && data <= 40) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(12,255,0,.3)'
                } else if (data > 40 && data <= 60) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,123,0,.3)'
                } else if (data > 60 && data <= 80) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                } else if (data > 80 && data <= 100) {
                    color_percent0 = '#4E8CD4'
                    color_percent100 = 'rgba(255,0,36,.3)'
                }
            }
            var option = {
                title: {
                    "x": '45%',
                    "y": '45%',
                    textAlign: "center",
                    top: '68%',//字体的位置
                    'text': '低危',
                    "textStyle": {
                        "fontWeight": 'normal',
                        "color": '#FFF',
                        "fontSize": 14
                    }
                },
                xAxis: {
                    show: false,//是否展示x轴
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 225,
                    "color": [{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0.4,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: color_percent0 // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: color_percent100 // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }, 'none'],
                    "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
                    "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": ' ',
                    "type": 'pie',
                    "radius": ['48%', '47%'],
                    "avoidLabelOverlap": false,//是否启用防止标签重叠策略
                    "startAngle": 225,

                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },
                        "emphasis": {
                            "show": true,
                            "textStyle": {
                                "fontSize": '14',
                                "fontWeight": 'bold'
                            }
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 75,
                        "name": '1'
                    }, {
                        "value": 25,
                        "name": '2'
                    }]
                }, {
                    "name": '',
                    "type": 'pie',
                    "radius": ['50%', '70%'],
                    "avoidLabelOverlap": false,
                    "startAngle": 315,
                    "color": ['rgba(41,54,116,.9)', "#11275A", "transparent"],
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "clockwise": false,//饼图的扇区是否是顺时针排布。
                    "itemStyle": {
                        "normal": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        },
                        "emphasis": {
                            "borderColor": "transparent",
                            "borderWidth": "20"
                        }
                    },
                    "z": 10,
                    "label": {
                        "normal": {
                            "show": false,
                            "position": 'center'
                        },

                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": (100 - percent) * 270 / 360,
                        "label": {
                            normal: {
                                formatter: percent + '%',
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'normal',
                                    color: '#fff'
                                }
                            }
                        },
                        "name": ''
                    }, {
                        "value": 1,
                        "name": ''
                    }, {
                        "value": 100 - (100 - percent) * 270 / 360,
                        "name": ''
                    }]
                },
                ]
            };
            mychart.setOption(option, true);
        },
        world_map_echarts() {
            var mychart = echarts.init(document.getElementById("world_map"));
            var nameMap = {
                'Singapore Rep.': '新加坡',
                'Dominican Rep.': '多米尼加',
                'Palestine': '巴勒斯坦',
                'Bahamas': '巴哈马',
                'Timor-Leste': '东帝汶',
                'Afghanistan': '阿富汗',
                'Guinea-Bissau': '几内亚比绍',
                "Côte d'Ivoire": '科特迪瓦',
                'Siachen Glacier': '锡亚琴冰川',
                "Br. Indian Ocean Ter.": '英属印度洋领土',
                'Angola': '安哥拉',
                'Albania': '阿尔巴尼亚',
                'United Arab Emirates': '阿联酋',
                'Argentina': '阿根廷',
                'Armenia': '亚美尼亚',
                'French Southern and Antarctic Lands': '法属南半球和南极领地',
                'Australia': '澳大利亚',
                'Austria': '奥地利',
                'Azerbaijan': '阿塞拜疆',
                'Burundi': '布隆迪',
                'Belgium': '比利时',
                'Benin': '贝宁',
                'Burkina Faso': '布基纳法索',
                'Bangladesh': '孟加拉国',
                'Bulgaria': '保加利亚',
                'The Bahamas': '巴哈马',
                'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
                'Belarus': '白俄罗斯',
                'Belize': '伯利兹',
                'Bermuda': '百慕大',
                'Bolivia': '玻利维亚',
                'Brazil': '巴西',
                'Brunei': '文莱',
                'Bhutan': '不丹',
                'Botswana': '博茨瓦纳',
                'Central African Rep.': '中非',
                'Canada': '加拿大',
                'Switzerland': '瑞士',
                'Chile': '智利',
                'China': '中国',
                'Ivory Coast': '象牙海岸',
                'Cameroon': '喀麦隆',
                'Dem. Rep. Congo': '刚果民主共和国',
                'Congo': '刚果',
                'Colombia': '哥伦比亚',
                'Costa Rica': '哥斯达黎加',
                'Cuba': '古巴',
                'N. Cyprus': '北塞浦路斯',
                'Cyprus': '塞浦路斯',
                'Czech Rep.': '捷克',
                'Germany': '德国',
                'Djibouti': '吉布提',
                'Denmark': '丹麦',
                'Algeria': '阿尔及利亚',
                'Ecuador': '厄瓜多尔',
                'Egypt': '埃及',
                'Eritrea': '厄立特里亚',
                'Spain': '西班牙',
                'Estonia': '爱沙尼亚',
                'Ethiopia': '埃塞俄比亚',
                'Finland': '芬兰',
                'Fiji': '斐',
                'Falkland Islands': '福克兰群岛',
                'France': '法国',
                'Gabon': '加蓬',
                'United Kingdom': '英国',
                'Georgia': '格鲁吉亚',
                'Ghana': '加纳',
                'Guinea': '几内亚',
                'Gambia': '冈比亚',
                'Guinea Bissau': '几内亚比绍',
                'Eq. Guinea': '赤道几内亚',
                'Greece': '希腊',
                'Greenland': '格陵兰',
                'Guatemala': '危地马拉',
                'French Guiana': '法属圭亚那',
                'Guyana': '圭亚那',
                'Honduras': '洪都拉斯',
                'Croatia': '克罗地亚',
                'Haiti': '海地',
                'Hungary': '匈牙利',
                'Indonesia': '印度尼西亚',
                'India': '印度',
                'Ireland': '爱尔兰',
                'Iran': '伊朗',
                'Iraq': '伊拉克',
                'Iceland': '冰岛',
                'Israel': '以色列',
                'Italy': '意大利',
                'Jamaica': '牙买加',
                'Jordan': '约旦',
                'Japan': '日本',
                'Kazakhstan': '哈萨克斯坦',
                'Kenya': '肯尼亚',
                'Kyrgyzstan': '吉尔吉斯斯坦',
                'Cambodia': '柬埔寨',
                'Korea': '韩国',
                'Kosovo': '科索沃',
                'Kuwait': '科威特',
                'Lao PDR': '老挝',
                'Lebanon': '黎巴嫩',
                'Liberia': '利比里亚',
                'Libya': '利比亚',
                'Sri Lanka': '斯里兰卡',
                'Lesotho': '莱索托',
                'Lithuania': '立陶宛',
                'Luxembourg': '卢森堡',
                'Latvia': '拉脱维亚',
                'Morocco': '摩洛哥',
                'Moldova': '摩尔多瓦',
                'Madagascar': '马达加斯加',
                'Mexico': '墨西哥',
                'Macedonia': '马其顿',
                'Mali': '马里',
                'Myanmar': '缅甸',
                'Montenegro': '黑山',
                'Mongolia': '蒙古',
                'Mozambique': '莫桑比克',
                'Mauritania': '毛里塔尼亚',
                'Malawi': '马拉维',
                'Malaysia': '马来西亚',
                'Namibia': '纳米比亚',
                'New Caledonia': '新喀里多尼亚',
                'Niger': '尼日尔',
                'Nigeria': '尼日利亚',
                'Nicaragua': '尼加拉瓜',
                'Netherlands': '荷兰',
                'Norway': '挪威',
                'Nepal': '尼泊尔',
                'New Zealand': '新西兰',
                'Oman': '阿曼',
                'Pakistan': '巴基斯坦',
                'Panama': '巴拿马',
                'Peru': '秘鲁',
                'Philippines': '菲律宾',
                'Papua New Guinea': '巴布亚新几内亚',
                'Poland': '波兰',
                'Puerto Rico': '波多黎各',
                'Dem. Rep. Korea': '朝鲜',
                'Portugal': '葡萄牙',
                'Paraguay': '巴拉圭',
                'Qatar': '卡塔尔',
                'Romania': '罗马尼亚',
                'Russia': '俄罗斯',
                'Rwanda': '卢旺达',
                'W. Sahara': '西撒哈拉',
                'Saudi Arabia': '沙特阿拉伯',
                'Sudan': '苏丹',
                'S. Sudan': '南苏丹',
                'Senegal': '塞内加尔',
                'Solomon Is.': '所罗门群岛',
                'Sierra Leone': '塞拉利昂',
                'El Salvador': '萨尔瓦多',
                'Somaliland': '索马里兰',
                'Somalia': '索马里',
                'Serbia': '塞尔维亚',
                'Suriname': '苏里南',
                'Slovakia': '斯洛伐克',
                'Slovenia': '斯洛文尼亚',
                'Sweden': '瑞典',
                'Swaziland': '斯威士兰',
                'Syria': '叙利亚',
                'Chad': '乍得',
                'Togo': '多哥',
                'Thailand': '泰国',
                'Tajikistan': '塔吉克斯坦',
                'Turkmenistan': '土库曼斯坦',
                'East Timor': '东帝汶',
                'Trinidad and Tobago': '特里尼达和多巴哥',
                'Tunisia': '突尼斯',
                'Turkey': '土耳其',
                'Tanzania': '坦桑尼亚',
                'Uganda': '乌干达',
                'Ukraine': '乌克兰',
                'Uruguay': '乌拉圭',
                'United States': '美国',
                'Uzbekistan': '乌兹别克斯坦',
                'Venezuela': '委内瑞拉',
                'Vietnam': '越南',
                'Vanuatu': '瓦努阿图',
                'West Bank': '西岸',
                'Yemen': '也门',
                'South Africa': '南非',
                'Zambia': '赞比亚',
                'Zimbabwe': '津巴布韦'
            };
            var geoCoordMap = {};
            var mapName = 'world';
            mychart.showLoading();
            var maxSize4Pin = 100, minSize4Pin = 20;
            var max = 480, min = 9; // todo 
            console.log(echarts.getMap(mapName));

            var mapFeatures = echarts.getMap(mapName).geoJson.features;
            mychart.hideLoading();
            mapFeatures.forEach(function (v) {
                // 地区名称
                var name = v.properties.name;
                // 地区经纬度
                geoCoordMap[name] = v.geometry.coordinates[0][0];
            });
            var data = [
                { name: 'Afghanistan', value: 28397.812 },
                { name: 'Angola', value: 19549.124 },
                { name: 'Albania', value: 3150.143 },
                { name: 'United Arab Emirates', value: 8441.537 },
                { name: 'Argentina', value: 40374.224 },
            ];
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    console.log(geoCoord);
                    // console.log(geoCoordMap[0]);
                    console.log(data[i].value);
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                console.log(res);
                return res;
            };
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        var value = (params.value + '').split('.');
                        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                            + '.' + value[1];
                        // console.log(params);
                        // return params.seriesName + '<br/>' + params.name + ' : ' + value;
                        return ''
                    }
                },
                series: [
                    {
                        name: '',
                        type: 'map',
                        mapType: 'world',
                        // center: [115.97, 29.71],// 当前视角的中心点，用经纬度表示
                        zoom: 1, 　　　　　　　　　　//当前视角的缩放比例
                        aspectScale: .8,  //这个参数用于 scale 地图的长宽比。
                        // boundingCoords: [[-100, 80], [100, -80]],  //二维数组，定义定位的左上角以及右下角分别所对应的经纬度
                        roam: false,   //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                        nameMap: nameMap,  //自定义地区的名称映射
                        itemStyle: {
                            normal: {
                                color: "red", 　//颜色
                                areaColor: "#4195d2", //区域颜色　　　　　　　　　
                                borderColor: "#4195d2", 　　　　　　//边框颜色
                                borderWidth: .5,　　　　　　　　//柱条的描边宽度，默认不描边。
                                borderType: "solid",　　　　　　 //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
                                opacity: 0.6, 　　　　　　　　　　//图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                            },
                            emphasis: { label: { show: true } }
                        },
                        data: [
                            { name: 'Afghanistan', value: 28397.812 },
                            { name: 'Angola', value: 19549.124 },
                            { name: 'Albania', value: 3150.143 },
                            { name: 'United Arab Emirates', value: 8441.537 },
                            { name: 'Argentina', value: 40374.224 },
                            { name: 'Armenia', value: 2963.496 },
                            { name: 'French Southern and Antarctic Lands', value: 268.065 },
                            { name: 'Australia', value: 22404.488 },
                            { name: 'Austria', value: 8401.924 },
                            { name: 'Azerbaijan', value: 9094.718 },
                            { name: 'Burundi', value: 9232.753 },
                            { name: 'Belgium', value: 10941.288 },
                            { name: 'Benin', value: 9509.798 },
                        ]
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        // data: [
                        //     [16.52, 56.29, 28397.812],
                        //     [42.35, 37.10, 19549.124],
                        // ],
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 5)),
                        symbolSize: function (val) {
                            console.log(val);
                            return val[2] / 1000;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            scale: 6, //缩放比例
                            brushType: 'stroke' //实心空心圆
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'yellow',
                                shadowBlur: 10,
                                shadowColor: 'yellow'
                            }
                        },
                        zlevel: 9
                    },
                ]
            };
            mychart.setOption(option, true);
        },
        risk_echarts() {
            var mychart = echarts.init(document.getElementById("risk"));
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '10',
                    right: '20',
                    bottom: '10',
                    top: '10',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['192.168.1.193', '192.168.1.193', '192.168.1.193', '192.168.1.193', '192.168.1.193'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        },

                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        name: '高',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [4, 0, 0, 4], //柱形图圆角，初始化效果
                                color: 'rgba(150,33,22,.8)',
                            }
                        },
                        data: [301, 334, 390, 330, 320]
                    },
                    {
                        name: '中',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(245,191,65,.8)',
                            }
                        },
                        data: [101, 134, 90, 230, 210]
                    },
                    {
                        name: '低',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 4, 4, 0], //柱形图圆角，初始化效果
                                color: 'rgba(74,164,110,.8)',
                            }
                        },
                        data: [191, 234, 290, 330, 310]
                    },
                ]
            };
            mychart.setOption(option, true);
        },
        tableRowStyle({ row, rowIndex }) {
            return 'background-color:rgba(6, 33, 65, 0.5);color:#fff;'
        },
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            return 'background-color:rgba(6, 33, 65, 0.5);color:#78710A;'
        },
        threat_alarm_left_echarts() {
            var mychart = echarts.init(document.getElementById("threat_alarm_left"));
            var option = {
                title: {
                    text: '威胁等级分布',
                    x: 'center',
                    align: 'center',
                    verticalAlign: 'bottom',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [

                    {
                        name: '',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,//是否开启 hover 在扇区上的放大动画效果。
                        legendHoverLink: false,//是否启用图例 hover 时的联动高亮。
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: '1' },
                            { value: 310, name: '2' },
                            { value: 234, name: '3' },
                            { value: 135, name: '4' },
                            { value: 1548, name: '5' }
                        ]
                    }
                ]
            };
            mychart.setOption(option, true);
        },
        threat_alarm_right_echarts() {
            var mychart = echarts.init(document.getElementById("threat_alarm_right"));
            var option = {
                title: {
                    text: '威胁类型分布',
                    x: 'center',
                    align: 'center',
                    verticalAlign: 'bottom',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    hoverAnimation: false,//是否开启 hover 在扇区上的放大动画效果。
                    legendHoverLink: false,//是否启用图例 hover 时的联动高亮。
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '1' },
                        { value: 310, name: '2' },
                        { value: 234, name: '3' },
                        { value: 135, name: '4' },
                        { value: 1548, name: '5' }
                    ]
                }
                ]
            };
            mychart.setOption(option, true);

        },
        info_relation_echarts() {
            var mychart = echarts.init(document.getElementById("info_relation"));
            var option = {
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                color: ['#83e0ff', '#45f5ce', '#b158ff'],
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 100,
                            edgeLength: 50
                        },
                        symbolSize: 20,
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbolSize: [2, 3],
                        edgeLabel: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 8,
                                    color: '#fff'
                                },
                                formatter: "{c}"
                            }
                        },
                        data: [
                            {
                                name: 'IP:123.45.67.89',
                                symbolSize: 30,
                                draggable: true,
                                category: 1,
                            },
                            {
                                name: 'URL:WWW.BADDOM.COM',
                                symbolSize: 30,
                                draggable: true, //节点可拖拽
                                category: 1,
                            },
                            {
                                name: 'MAL:A07DVJHKYFG',
                                symbolSize: 20,
                            },
                            {
                                name: 'MAL:A0KYFG',
                                symbolSize: 20,
                            },
                            {
                                name: 'EML:JSKS@126.COM',
                                symbolSize: 20,
                            },
                            {
                                name: 'EML:FSAW@163.COM',
                                symbolSize: 20,
                            },
                            {
                                name: 'IP:48.23.123.178',
                                symbolSize: 20,
                                category: 1,
                            },
                            {
                                name: 'IP:192.168.12.183',
                                symbolSize: 20,
                                category: 1,
                            },
                            {
                                name: 'EML:QQsss@qq.COM',
                                symbolSize: 20,
                                category: 1,
                            },
                            {
                                name: 'IP:192.168.12.163',
                                symbolSize: 20,
                                category: 0,
                            },
                            {
                                name: 'EML:RTUSK@126.COM',
                                symbolSize: 20,
                                category: 0,
                            },
                            {
                                name: 'IP:192.168.1.178',
                                category: 0,
                            },
                        ],
                            itemStyle: {
                                    normal: {
                                        borderColor: '#FF7000',
                                        borderWidth: 2,
                                        shadowBlur: 10,
                                        color: '#001c43',
                                    }
                                },
                        links: [
                            {
                                source: 'IP:123.45.67.89',
                                target: 'IP:192.168.12.183',
                                value: '',
                            },
                         
                            {
                                source: 'IP:123.45.67.89',
                                target: 'EML:QQsss@qq.COM',
                                value: '',
                            },
                            // URL:WWW.BADDOM.COM
                            {
                                source: 'URL:WWW.BADDOM.COM',
                                target: 'IP:48.23.123.178',
                                value: '',
                            },
                              {
                                source: 'URL:WWW.BADDOM.COM',
                                target: 'MAL:A0KYFG',
                                value: '',
                            },
                              {
                                source: 'MAL:A0KYFG',
                                target: 'EML:JSKS@126.COM',
                                value: '',
                            },
                              {
                                source: 'IP:48.23.123.178',
                                target: 'EML:FSAW@163.COM',
                                value: '',
                            },
                              {
                                source: 'IP:48.23.123.178',
                                target: 'MAL:A07DVJHKYFG',
                                value: '',
                            },
                            {
                                source: 'IP:123.45.67.89',
                                target: 'IP:192.168.12.163',
                                value: '',
                            },
                            {
                                source: 'IP:123.45.67.89',
                                target: 'EML:RTUSK@126.COM',
                                value: '',
                            },
                            {
                                source: 'IP:123.45.67.89',
                                target: 'IP:192.168.12.163'
                            },
                            {
                                source: 'IP:192.168.12.183',
                                target: 'IP:192.168.1.178',
                                value: '',
                            }
                           
                        ],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#eda553' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#7c785b' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                curveness: 0
                            }
                        },
                        categories: [
                            { name: '人' },
                            { name: '物证' },
                            { name: '不明物体' }
                        ]
                    },
                ]
            }
            mychart.setOption(option, true);
        },
        echarts3d() {
            var mychartmap = echarts.init(document.getElementById("echarts3d"));
            /*
                图中相关城市经纬度,根据你的需求添加数据
                关于国家的经纬度，可以用首都的经纬度或者其他城市的经纬度
            */
            var geoCoordMap = {
                '南宁': [108.479, 23.1152],
                '广州': [113.5107, 23.2196],
                '重庆': [107.7539, 30.1904],
                '重庆1': [106.7539, 31.1904],
                '芬兰': [24.909912, 60.169095],
                '美国': [-100.696295, 33.679979],
                '日本': [139.710164, 35.706962],
                '韩国': [126.979208, 37.53875],
                '瑞士': [7.445147, 46.956241],
                '东南亚': [117.53244, 5.300343],
                '澳大利亚': [135.193845, -25.304039],
                '德国': [13.402393, 52.518569],
                '英国': [-0.126608, 51.208425],
                '加拿大': [-102.646409, 59.994255],
                '北京': [116.46, 39.92],
                '上海': [120.52, 31.53],
            };
            /* 
                记录下起点城市和终点城市的名称，以及权重
                数组第一位为终点城市，数组第二位为起点城市，以及该城市的权重，就是图上圆圈的大小
             */

            var CQData = [
                [{ name: '重庆' }, { name: "美国", value: 20 }]
            ];
            var CQData1 = [
                [{ name: '重庆1' }, { name: "英国", value: 10 }]
            ];
            var BJData = [
                [{ name: '北京' }, { name: "上海", value: 20 }],
            ];
            var GZData = [
                [{ name: '广州' }, { name: "日本", value: 30 }],
            ];
            var NNData = [
                [{ name: '南宁' }, { name: "加拿大", value: 80 }],
                [{ name: '南宁' }, { name: "澳大利亚", value: 95 }],
                [{ name: '南宁' }, { name: "瑞士", value: 50 }]
            ];
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[1].name];
                    var toCoord = geoCoordMap[dataItem[0].name];
                    if (fromCoord && toCoord) {
                        res.push([fromCoord, toCoord])
                    }
                }
                // console.log(res)
                return res;
            }
            // 小飞机的图标，可以用其他图形替换
            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
            var series = [];// 3D飞线
            var dser = [];  // 2D散点坐标
            [['重庆', CQData], ['重庆1', CQData1], ['广州', GZData], ['南宁', NNData], ['北京', BJData]].forEach(function (item, i) {
                dser.push({
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 3,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        fontSize: 24,
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    },
                    itemStyle: {
                        normal: {
                            color: '#f5f802'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name],
                            symbolSize: dataItem[1].value / 4
                        };
                    })
                }, {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 3,
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                fontSize: 18,
                                formatter: '{b}'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ff0000'
                            }
                        },
                        data: [{
                            name: item[0],
                            value: geoCoordMap[item[0]],
                            symbolSize: parseInt(Math.random() * 20 + 10),
                            label: {
                                normal: {
                                    position: 'right'
                                }
                            }
                        }]
                    })
                series.push({
                    type: 'lines3D',
                    effect: {
                        show: true,
                        //symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                        period: 5,//速度
                        trailLength: 0.8//尾部阴影          
                    },
                    lineStyle: {//航线的视图效果
                        color: '#9ae5fc',
                        width: 0,
                        opacity: 0.6
                    },
                    data: convertData(item[1])// 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                })
            });


            var canvas = document.createElement('canvas');

            var myChart = echarts.init(canvas, null, {
                width: 4096,
                height: 2048
            });
            console.log(myChart);

            // echarts.registerMap('world', worldJson.data);
            myChart.setOption({
                backgroundColor: 'rgba(3,28,72,0.3)',
                title: {
                    show: true
                },
                geo: {
                    type: 'map',
                    map: 'world',
                    // center: [116.4551, 40.2539],//当前的视角中心（北京市）
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    boundingCoords: [[-180, 90], [180, -90]], //二维数组，定义定位的左上角以及右下角分别所对应的经纬度。例如
                    zoom: 0, //当前视角的缩放比例。
                    roam: false,
                    nameMap: { 'China': '中国' },//自定义地区的名称映射
                    itemStyle: {
                        borderColor: '#000d2d',
                        normal: {
                            areaColor: '#2455ad', //地图区域的颜色
                            borderColor: '#000c2d'
                        },
                        emphasis: {  //高亮选中状态下的多边形和标签样式。
                            areaColor: '#357cf8'
                        }
                    },
                    label: {
                        fontSize: 24
                    }
                },
                series: dser
            });

            var option = {
                backgroundColor: 'rgba(0,0,0,0)',//canvas的背景颜色
                globe: {
                    baseTexture: myChart,
                    top: 'middle',
                    left: 'center',
                    displacementScale: 0,
                    environment: 'none',
                    shading: 'color',
                    viewControl: {
                        distance: 240,
                        // rotateSensitivity: 10, //鼠标旋转灵敏度
                        // zoomSensitivity: 10,//鼠标缩放灵敏度
                        autoRotate: true,//地球是否自传
                    }
                },
                roam: true,
                series: series
            };
            mychartmap.setOption(option, true);
            // 点击事件
            myChart.on('click', function (params) {
                console.log(params);
            });
            // 缩放事件
            myChart.on('georoam', function (params) {
                // 控制台打印数据的名称
                console.log(params);
            });
            // })
        }
    }
}
</script>



