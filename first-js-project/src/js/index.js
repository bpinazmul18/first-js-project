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