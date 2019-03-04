<template>
    <div class="e-map">
        <div id="echarts3d"></div>
    </div>
</template>
<style scoped  lang="less">
.e-map {
  color: #fff;
  text-align: center;
  font-size: 20px;
  #echarts3d {
    position: absolute;
    // border: 1px solid red;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 600px;
  }
  position: relative;
  z-index: 999;
}
</style>

<script>
var echarts = require('echarts');
require('echarts-gl');
var world = require('../../static/world.js');
export default {
    name: 'e-map',
    data() {
        return {
            
        }
    },
    mounted() {
        // this.echarts3d();
    },
    methods: {
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
            [['重庆', CQData],['重庆1', CQData1],['广州', GZData], ['南宁', NNData], ['北京', BJData]].forEach(function (item, i) {
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
