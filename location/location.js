function onSuccess(pos){
	document.getElementById("position").innerHTML ="L: "+ pos.coords.latitude + " <br>" +"l: " + pos.coords.longitude +"<br>" + "accuracy: " + pos.coords.accuracy+ " <br>" + "altitude:"+ pos.coords.altitudeAccuracy;
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

