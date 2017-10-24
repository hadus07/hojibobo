/*Logo Mousemove*/
document.body.onmousemove = function(event) {
	document.getElementById('logo').style.transform = "scale("+Math.log(event.clientY)/7+")";
	return false;
}
/*Google Maps*/
function initMap() {
	var uluru = {lat: 37.533071, lng: 126.996846};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: uluru,
		scrollwheel: false
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
/*Closing Notification*/
document.querySelectorAll('#bar span')[0].onclick = function() {
	document.getElementById('notif').style.display = 'none';
	return false;
}
/*Image show*/
for(var i=0; i<document.querySelectorAll('.section span').length; i++) {
	document.querySelectorAll('.section span')[i].onclick = function() {
		document.getElementById('imageshow').style.backgroundImage = 'url('+this.parentNode.parentNode.parentNode.childNodes[1].src.toString()+')';
		document.getElementById('imageshowcont').style.display = 'block';
		for(var j=0; j<document.querySelectorAll('#imageshow li').length; j++) {
			document.querySelectorAll('#imageshow li')[j].innerHTML = this.parentNode.parentNode.children.item(j).innerHTML;
		}
		return false;
	}
}
document.querySelectorAll('#imageshow span')[0].onclick = function() {
	document.getElementById('imageshowcont').style.display = 'none';
	return false;
}
if(document.querySelectorAll('#main > h1')[0] != undefined) {
	document.querySelectorAll('#main > h1')[0].innerHTML = document.getElementsByTagName('title')[0].innerHTML;
}
/*Section Animation*/
window.onscroll = function() {
    var a = Number(window.getComputedStyle(document.getElementById('slider')).getPropertyValue('height').toString().slice(0, this.length-2));
    var b = Number(window.getComputedStyle(document.getElementById('carousel')).getPropertyValue('height').toString().slice(0, this.length-2));
	if(document.querySelectorAll('#main h1')[0] != undefined) {
		var c = Number(window.getComputedStyle(document.querySelectorAll('#main h1')[0]).getPropertyValue('height').toString().slice(0, this.length-2));
    }
    if(window.scrollY > a+b/2) {
        for(var i=0; i<document.getElementsByClassName('section').length; i++) {
        	document.getElementsByClassName('section')[i].style.animationPlayState = 'running';
        }
    }
}
/*Carousel Animation*/
document.querySelectorAll('#slider span')[0].onclick = function() {
	document.getElementById('carousel').scrollIntoView(false);
	document.getElementById('carousel').setAttribute('class', 'carousel');
	window.setTimeout(function() {
		document.getElementById('carousel').removeAttribute('class');
	}, 1000);
}
/*Section Show & Hide*/
for(var i=0; i<document.getElementsByClassName('section').length; i++) {
	document.getElementsByClassName('section')[i].onclick = function() {
		if(this.childNodes.item(3).style.display == 'block') {
			this.childNodes.item(3).style.display = 'none';
		}else {
			this.childNodes.item(3).style.display = 'block';
		}
	}
}