function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("txt").innerHTML = h + ":" + m + ":" +s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

var x = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(shwoPosition);

    }else{
        x.innerHTML = "Your Browser Didn't Support Geolocation"
    }
}


function shwoPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
}