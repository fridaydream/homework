CalculateRadius = function(r, per) {
    return Math.round(r / Math.tan(Math.PI / per) / 2) - 3;
}
// function calculateRadius(length, totalNum) {
//  return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
// }
var radius = CalculateRadius(129, 20);
var box = document.getElementById("box");
var audio = document.getElementById('audio');
var arr = document.getElementById('box').getElementsByTagName('div');
for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = 'url(images/p' + (i + 1) + '.png) no-repeat';
    arr[i].style.WebkitTransform = 'rotateY(' + 360 / 20 * i + 'deg)' + ' translateZ(' + radius + 'px)';
}
setTimeout(function() {
    $("#container").addClass('per');
})
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
$('#box').on('touchend', function(event) {
    event.preventDefault();
});
$("#box").on('touchmove', function(event) {
    event.preventDefault();
    if (flag) {
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        box.style.transform = 'rotateY(' + x + 'deg)';
    } else {
        return false;
    }
});
var rotategamma = 0;
var first = true;
var timer;
// window.addEventListener('deviceorientation', function(event) {
//     var gamma = event.gamma;
//     _.throttle(function() {
//         if (Math.abs(gamma) > 1) {


//             flag = false;
//             box.style.transform = 'rotateY(' + (gamma + x) + 'deg)';
//             x += gamma;
//         } else {
//             flag = true;
//         }

//     }, 16);
// });
window.addEventListener('deviceorientation', _.throttle(function(event) {
    var gamma = event.gamma;
        if (Math.abs(gamma) > 1) {
            flag = false;
            box.style.transform = 'rotateY(' + (gamma*4 + x) + 'deg)';
            // x += gamma;
        } else {
            flag = true;
        }
}, 16));
$("#music").on('click', function() {
    if (audio.paused) {
        audio.play();
        $(this).text('play');
    } else {
        audio.pause();
        $(this).text('stop');
    }
});