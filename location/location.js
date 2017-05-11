function onSuccess(pos){
	document.getElementById("position").innerHTML ="L: "+ pos.coords.latitude + " <br>" +"l: " + pos.coords.longitude +"<br>" + "accuracy: " + pos.coords.accuracy+ " <br>" + "altitude:"+ pos.coords.altitudeAccuracy;
	var mapString = "https://maps.googleapis.com/maps/api/staticmap?"+"center="+pos.coords.latitude + "," + pos.coords.longitude+"&zoom=17&size=400x400&key=AIzaSyA508uu-N-j7GqRbgLuVaj3-HwFVfJvMtw&maptype=hybrid";
document.getElementById("map").setAttribute("src",mapString);
}

function onError(err){
	document.getElementById("position").innerHTML = err.message;
}

var params = {
	enableHighAccuracy:true,
	timeout:10000,
	maximumAge:0
};

function getLocation(){
	var geo = navigator.geolocation;
	geo.getCurrentPosition(onSuccess,onError,params);
}


