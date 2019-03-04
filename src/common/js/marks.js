function Marks(a, b) {
    this.map = a,
    this.svg = b,
    this.curZoom = this.map.getZoom(),

    this.group = null,
    this.merge = function(data,skip){
        this.data = {};
        for (var ip in data) {
            var item = data[ip];
            if(item.geo && item.geo.latitude != null && item.geo.longitude != null){
                var key = this.getKey(item.geo);
                if(!this.data[key]){
                    this.data[key] = {
                        latitude:item.geo.latitude,
                        longitude:item.geo.longitude,
                        length:item.count
                    }
                }else{
                    this.data[key].length += item.count;
                } 
            }
        }
        return this.data;
    },
    this.getKey = function(ip,skip){
        if(!skip){
            skip = 1;
        }
        var latitude = ip.latitude > 0 ? parseInt(ip.latitude) : parseInt(ip.latitude - 1);
        var longitude = ip.longitude > 0 ? parseInt(ip.longitude) : parseInt(ip.longitude - 1);

        var keys = [
            {
                latitude:latitude + 1,
                longitude:longitude
            },{
                latitude:latitude,
                longitude:longitude + 1
            },{
                latitude:latitude + 1,
                longitude:longitude + 1
            }
        ];
        var distance = Victor(ip.longitude, ip.latitude).distance(Victor(longitude, latitude));
        var key = longitude + '_' + latitude;
        for (var i = keys.length - 1; i >= 0; i--) {
            var item = keys[i];
            var distance_now = Victor(ip.longitude, ip.latitude).distance(Victor(item.longitude, item.latitude));
            if(distance_now < distance){
                distance = distance_now;
                key = item.longitude + '_' + item.latitude;
            }
        }
        return key;
    },

    this.render = function() {
        this.curZoom = this.map.getZoom();
        if(this.group == null){
            this.group = this.svg.append("g");
        }
        this.group.selectAll('circle').remove();
        for (var key in this.data) {
            var item = this.data[key];
            var px = mymap.latLngToLayerPoint([item.latitude, item.longitude]);
            this.group.append("circle")
                .attr("fill", "#db2f10")//ed5b0c\#80dafb
                .attr("opacity","1")
                .attr("cx", px.x)
                .attr("cy", px.y)
                .attr("r", Math.log(item.length) * (this.curZoom / 9) );
        }
    },

    this.clear = function() {
        if(this.group == null){
            this.group = this.svg.append("g");
            return;
        }
        this.group.selectAll('circle').remove();
    }
}