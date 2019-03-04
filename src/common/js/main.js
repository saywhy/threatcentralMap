
var mymap = L.map("mapid", {
    zoomControl:false,
    attributionControl:false,
    zoom: 3,
    minZoom: 2,
    maxZoom: 5
}).setView([10, 5], 3);

var southWest = L.latLng( - 700, -200);
var northEast = L.latLng(700, 200);
var bounds = L.latLngBounds(southWest, northEast);
mymap.setMaxBounds(bounds);

var map_svg,attackBox;
var attack = {};
var marks;

d3.json("./map_data/world_map.json",
function(a, b) {
    
    function removeAll(){
        for (var a = f.length - 1; a >= 0; a--)
        {
            f[a].remove();
        } 
        f = []; 
    }
	attack.run = function() {
        for (var a = f.length - 1; a >= 0; a--)
        {
            if(f[a].isEnd()){
                if(!f[a].isCleaning){
                    f[a].isCleaning = true;
                    f[a].delete();
                    f.splice(a, 1);
                }
            }else{
                f[a].update();
                f[a].render();
            }
        } 
    };
    var c = topojson.feature(b, b.objects.countries);
    L.geoJSON(c, {
        style: {
            color: "#4195d2",
            opacity: .35,
            weight: .7,
            fillColor: "#1955c8",
            fillOpacity: .5
        }
    }).addTo(mymap);
    var d = d3.select("#mapid").select("svg");
    map_svg = d;

    marks = new Marks(mymap,map_svg);

    var f = (d.append("g"), []);
    attackBox = f;
    mymap.on("zoomstart", function(){
        marks.clear();
        img_process.stop();
        removeAll();

    });
    mymap.on("zoomend", function(){
        marks.render();
        img_process.start();
    });

    attack.add = function(data) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            rootScope.pushToAttackList(item);
            rootScope.$apply();
            if(item.latitude == null || item.longitude == null){
                continue;
            }
            var flt = new Flight(mymap, map_svg);
            var color = 'hsl(' + (+item.dport%360) + ', 100%, 70%)';
            
            if(item.type && colorList[item.type]){
                color = colorList[item.type];
                flt.type = item.type;
            }
            flt.setPlaneColor(color),
            flt.setBeginColor('#f00'),
            flt.setEndColor(color);

            flt.dport = item.dport;
            flt.rank = i%10;
            var atc =
            {
                s:{
                    lat: item.latitude,
                    lng: item.longitude
                },
                t:{
                    lat: item.latitude2,
                    lng: item.longitude2
                }
            };

            flt.init(atc);
            f.push(flt);
        } 
    }
    function Process(run,time){
        this.runing = null;
        this.start = function(){
            if(this.runing){
                clearInterval(this.runing);
            }
            run();
            this.runing = setInterval(function() {
                run();
            },
            time);
            return this;
        };
        this.stop = function(){
            clearInterval(this.runing);
            this.runing = null;
            return this;
        };
        this.restart = function(){
            this.stop();
            this.start();
            return this;
        };

    };

    var img_process = new Process(attack.run,25).start();
    var ws;
    function initWebSocket(){
        ws = new WebSocket('ws://map.norsecorp.com/socketcluster/');
        ws.onopen = function() {  
            console.log("open");  
            ws.send('{"event":"#handshake","data":{"authToken":null},"cid":3}'); 
            ws.send('{"event":"#subscribe","data":{"channel":"global"},"cid":4}'); 
        }  
        ws.onmessage = function(e) { 
            if(e.data == '#1'){
                ws.send('#2'); 
            }
            try{
                var data = JSON.parse(e.data);
                if(data['data']){
                    attack.add(data.data.data);
                }
            }catch(error) {
        　　}
        }  
        ws.onclose = function(e) {  
            console.log("closed");  
            ws.onopen();
            initWebSocket();
        }  
        ws.onerror = function(e) {  
            console.log("error");  
        } 

    }
    getIntelligence();
    function getIntelligence(){
        var index = 1;
        var updateIntelligence = new Process(function(){
            d3.json("./data/intelligence/"+ index +".json",function(e, data) {
                marks.data = data.marks;
                marks.render();
                rootScope.setCategory_top(data.category);
                rootScope.readCountry(data.country);
                rootScope.$apply();
            });
            index++;
            if(index > 24){
                index = 0;
            }
        },10*60*1000).start();
        
    }
    function getAttack(){
        d3.json("./data/attack.json",function(e, data) {
            var index = 0;
            var attackList = data;
            var maxNum = 5;
            var chance = 0.1;
            var readAttack = new Process(function(){
                if(index == 0){
                    rootScope.dst_init();
                }
                if(Math.random() < chance){
                    var num = parseInt(Math.random() * maxNum) + 1;

                    var atkGroup = [];
                    for (var i = 0; i < num; i++) {
                      var item = attackList[index];
                      var atk = {
                        indicator:item.indicator,
                        type:item.type,
                        dst_ip:item.dst_ip,
                        dst_subdivisions_name:item.dst_geo.subdivisions_name,
                        first_seen:moment(item.first_seen).format('YYYY-MM-DD HH:mm:ss'),
                        latitude2:item.dst_geo.latitude,
                        longitude2:item.dst_geo.longitude,
                        time:moment().format('HH:mm:ss.SSS')
                      };

                      if(item.src_geo){
                        atk.latitude = item.src_geo.latitude;
                        atk.longitude = item.src_geo.longitude;
                        atk.src_country_name = item.src_geo.country_name;
                      }else{
                        atk.latitude = null;
                        atk.longitude = null;
                        atk.src_country_name = '未知';
                      }
                      if(atkGroup.length > 0 
                            &&  item.dst_geo 
                            &&  item.src_geo
                            &&  atk.latitude == atkGroup[atkGroup.length-1].latitude
                            &&  atk.longitude == atkGroup[atkGroup.length-1].longitude
                            &&  atk.latitude2 == atkGroup[atkGroup.length-1].latitude2
                            &&  atk.longitude2 == atkGroup[atkGroup.length-1].longitude2
                        ){
                        atkGroup.push(atk);
                      }else{
                        attack.add(atkGroup);
                        atkGroup = [];
                        atkGroup.push(atk);
                      }
                      index++;
                      if(index >= attackList.length){
                        index = 0;
                      }
                    }
                    attack.add(atkGroup);
                }
            },100).start();
        });
    }
    d3.json("./map_data/province_coordinates.json",function(e, data) {
        rootScope.dst_top_all = data;
        getAttack();
    });
});

var category_legend = d3.select("#attack-category-legend")
for (var key in pathList) {
    var d = pathList[key];
    var li = category_legend.append("li");
    li.append("i").append("svg")
    .attr("fill",colorList[key])
    .attr("x","0px")
    .attr("y","0px")
    .attr("width","200")
    .attr("height","200")
    .attr("viewBox","0 0 200 200")
    .attr("enable-background","new 0 0 200 200")
    .attr("xml:space","preserve")
    .append("path")
    .attr("d",d);
    li.append("span").text(categoryNames[key]);
}