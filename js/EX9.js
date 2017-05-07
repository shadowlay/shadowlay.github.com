/**
 * Created by dell on 2017/5/7.
 */
var map = new BMap.Map("myMap");
var west_lake = new BMap.Point(120.153069, 30.250863);
var HZNU = new BMap.Point(120.015018,30.296072);
map.centerAndZoom(west_lake, 15);


//向地图添加标准地图控件、平移缩放控件、比例尺控件和缩略图控件。
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("杭州西湖");
map.enableScrollWheelZoom();

//创建标注
// var marker = new BMap.Marker(west_lake);
var myIcon = new BMap.Icon("img/EX9/marker.png", new BMap.Size(50, 50));
var marker = new BMap.Marker(west_lake,{icon: myIcon});
var marker_HZNU = new BMap.Marker(HZNU,{icon: myIcon});
// var marker_HZNU = new BMap.Marker(HZNU);
map.addOverlay(marker);
map.addOverlay(marker_HZNU);

//拖拽标注，并显示拖拽后的位置
marker.enableDragging();
marker.addEventListener("dragend",function(e){
    alert("当前位置:" + e.point.lng + "," + e.point.lat);
})

marker_HZNU.enableDragging();
marker_HZNU.addEventListener("dragend",function(e){
    alert("当前位置:" + e.point.lng + "," + e.point.lat);
})



//BMap.LocalSearch还提包含searchNearby和searchInBounds方法，为您提供周边搜索和范围搜索服务
var local = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map
    }
});
local.search("宾馆");


//导航控件
var transit = new BMap.TransitRoute(map, {
    // pageCapacity: 4,
    renderOptions: {
        map: map,
        panel: "HZNU-Hotel"
    }
});
transit.search(HZNU, "宾馆");

$(document).ready(function() {
    $(".button2").click(function() {
        map.centerAndZoom(west_lake,15);
    });

});

$(document).ready(function() {
    $(".button1").click(function() {
        map.centerAndZoom(HZNU,18);

        var Dinning_Room = new BMap.Marker(new BMap.Point(120.018647,30.295718));
        map.addOverlay(Dinning_Room);
        Dinning_Room.addEventListener("click",function(){
            var opts = {
                width: 240,
                height: 200,
                title: "食堂"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/dinning.jpg'></br><b>食堂</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.018647,30.295718));
        });

        var b8 = new BMap.Marker(new BMap.Point(120.01517,30.296384));
        map.addOverlay(b8);
        b8.addEventListener("click",function(){
            var opts = {
                width: 240,
                height: 200,
                title: "博文苑8号楼"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/zhu.jpg'></br><b>博文苑8号楼，男寝哦</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.01517,30.296384));
        });

        var Dormitory = new BMap.Marker(new BMap.Point(120.016212,30.296626));
        map.addOverlay(Dormitory);
        Dormitory.addEventListener("click",function(){
            var opts = {
                width: 260,
                height: 200,
                title: "博文苑9号楼"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/zhu.jpg'></br><b>我的宿舍</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.016212,30.296626));
        });
        var door = new BMap.Marker(new BMap.Point(120.020434,30.296228));
        map.addOverlay(door);
        door.addEventListener("click",function(){
            var opts = {
                width: 150,
                height: 180,
                title: "正大门"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/door.jpg'></br><b>正门</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.020434,30.296228));
        });

        var Library = new BMap.Marker(new BMap.Point(120.022213,30.298715));
        map.addOverlay(Library);
        Library.addEventListener("click",function(){
            var opts = {
                width: 220,
                height: 200,
                title: "图书馆"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/library.jpg'></br><b>藏书丰富,楼好看</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.022213,30.298715));
        });

        var Playground = new BMap.Marker(new BMap.Point(120.014295,30.295137));
        map.addOverlay(Playground);
        Playground.addEventListener("click",function(){
            var opts = {
                width: 220,
                height: 200,
                title: "操场"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/background.jpg'></br><b>去年运动会的盛况</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.014295,30.295137));
        });

        var Milk = new BMap.Marker(new BMap.Point(120.019141,30.2964));
        map.addOverlay(Milk);
        Milk.addEventListener("click",function(){
            var opts = {
                width: 180,
                height: 180,
                title: "一鸣真鲜奶吧"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/milk.png'></br><b>酸奶蛮好喝</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.019141,30.2964));
        });

        var Deliver = new BMap.Marker(new BMap.Point(120.016805,30.296252));
        map.addOverlay(Deliver);
        Deliver.addEventListener("click",function(){
            var opts = {
                width: 220,
                height: 220,
                title: "菜鸟驿站"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/kuaidi.jpg'></br><b>这里拿快递</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.016805,30.296252));
        });

        var Supermarket = new BMap.Marker(new BMap.Point(120.016976,30.295383));
        map.addOverlay(Supermarket);
        Supermarket.addEventListener("click",function(){
            var opts = {
                width: 220,
                height: 200,
                title: "超市"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/supermarket.jpg'></br><b>价格公道</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.016976,30.295383));
        });

        var my = new BMap.Marker(new BMap.Point(120.02003,30.294841));
        map.addOverlay(my);
        my.addEventListener("click",function(){
            var opts = {
                width: 220,
                height: 150,
                title: "阿里巴巴商学院"
            }
            var infoWindow = new BMap.InfoWindow("<br><img src='img/EX9/my.jpg'></br><b>楼好看</b>", opts);
            map.openInfoWindow(infoWindow, new BMap.Point(120.02003,30.294841));
        });

    });
});
