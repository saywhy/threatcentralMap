var myApp = angular.module('myApp', ['echarts-angular']);
var rootScope;
myApp.controller('myCtrl', function($scope) {
    //雷达图开始
    $scope.setCategory_top = function(data){
        var categoryArr = [];
        for (var i = data.length - 1; i >= 0; i--) {
            categoryArr.push(data[i][1]);
        }
        $scope.chart_category = {
            backgroundColor: 'none',
            radar: {
                indicator: [
                    {name: '钓鱼链接和网站'},
                    {name: '恶意程序'},
                    {name: '恶意IP'},
                    {name: '僵尸网络C&C'},
                    {name: '移动恶意程序'},
                    {name: '恶意域名'},
                    {name: 'APT攻击'}
                ],
                shape: 'circle',
                splitNumber: 6,
                name: {
                    textStyle: {
                        color: 'rgb(255, 255,255)',
                        fontSize:0.7+'vw'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)',
                            'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)',
                            'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.4)',
                            'rgba(255, 255, 255, 0.5)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.4)'
                    }
                }
            },
            series: [
                {
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.2
                        }
                    },
                    data: [categoryArr],
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#d1e1f8'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.3
                        }
                    }
                }
            ]

        };
    };
    //受害区域图开始
    $scope.setDst_top = function(){
        $scope.option = {
            backgroundColor: 'none',
            tooltip : {
                trigger: 'item',
                formatter:function(event){
                    return  'Top ' + (event.dataIndex+1) + '<br>' + 
                            event.data.name + '：'+ event.data.value[2];
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#bad1f4',
                        borderColor: '#030917',
                        opacity: .5
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series : [
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: $scope.dst_top,
                    symbolSize: function (val) {
                        return 8 + Math.log(val[2]);
                    },
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            color: '#ea7900',
                            shadowBlur: 6,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            ]  
        }
    };
    rootScope = $scope;
    $scope.typeNames = {
        "APT":"APT攻击",
        "MaliciousURLsDF":"恶意域名",
        "BotnetCAndCURLsDF":"僵尸网络C&C",
        "MobileMaliciousHashDF":"移动恶意程序",
        "MaliciousHashDF":"恶意程序",
        "PhishingURLsDF":"钓鱼链接和网站",
        "IPReputationDF":"恶意IP"
    };
    $scope.attackList = [];
    for (var i = 0; i < 7; i++) {
        $scope.attackList.push({indicator:'　'});
    }
    $scope.dst_top = [];
    $scope.dst_top_all = {};
    $scope.readCountry = function(List){
        $scope.country_top = [];
        for (var i = 0; i < 7; i++) {
            var ss=List[0][1]-List[6][1];
            List[i][3]= Math.floor( 30 + ((List[i][1] - List[6][1])/ss) * 60) + "%";
            $scope.country_top.push(List[i]);
        }
    }
    $scope.pushToAttackList = function(atc){
   
        $scope.attackList.push(atc);
        if($scope.attackList.length > 7){
            $scope.attackList.shift();
        }
        $scope.dst_count(atc.dst_subdivisions_name);
        setTimeout(function(){
            $scope.setDst_top();
        },0);
    }
    $scope.dst_init = function(){
        $scope.dst_top = [];
    }
    $scope.dst_count = function(name){
        if($scope.dst_top_all[name]){
            $scope.dst_top_all[name].value[2]++;
        }
        var value = $scope.dst_top_all[name].value[2];
        var isTOP1 = true;
        for (var i = $scope.dst_top.length - 1; i >= 0; i--) {
            var item = $scope.dst_top[i];
            if(item.name == name){
                $scope.dst_top.splice(i,1);
                continue;
            }
            if(item.value[2] >= value){
                $scope.dst_top.splice(i+1,0,$scope.dst_top_all[name]);
                isTOP1 = false;
                break;
            }
        }
        if(isTOP1){
            $scope.dst_top.splice(0,0,$scope.dst_top_all[name]);
        }
        if($scope.dst_top.length > 7){
            $scope.dst_top.pop();
        } 
    }
});