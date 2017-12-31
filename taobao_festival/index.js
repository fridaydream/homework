CalculateRadius = function(r, per) {
    return Math.round(r / Math.tan(Math.PI / per) / 2) - 3;
}
// function calculateRadius(length, totalNum) {
// 	return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
// }
var radius = CalculateRadius(129, 20);
var box = document.getElementById("box");
var audio = document.getElementById('audio');
var arr = document.getElementById('box').getElementsByTagName('div');
for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = 'url(images/p' + (i + 1) + '.png) no-repeat';
    arr[i].style.WebkitTransform = 'rotateY(' + 360 / 20 * i + 'deg)' + ' translateZ(' + radius + 'px)';
}
$('#container').addClass('per');
var startX = 0;
x = 0,
    endX = 0;
var flag = true;
$("#box").on('touchstart', function(event) {
    event.preventDefault();
    //触碰点横坐标
    var touch = event.targetTouches[0];
    startX = touch.pageX - x;
});
$("#box").on('touchmove', function(event) {
    if (flag) {
        event.preventDefault();
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        box.style.transform = 'rotateY(' + x + 'deg)';
    }
});
window.addEventListener('deviceorientation', function(event) {
    var gamma = event.gamma;
    if (Math.abs(gamma) > 4) {
        flag = false;

        box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
    } else {
        flag = true;
    }
});
$("#music").on('tap', function() {
    if (audio.paused) {
        audio.play();
        $(this).text('play');
    } else {
        audio.pause();
        $(this).text('stop');
    }
});