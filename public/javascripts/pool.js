var poolCue = [];
var inFlight = 0;

function teeOff() {
    if (poolCue.length > 0 && inFlight <= 2) {
        launch();
    }
}

function poolAjax() {
    poolCue.push(Array.prototype.slice.call(arguments));
    teeOff();
}

function launch() {
    inFlight += 1;
    var bird = poolCue.shift();
    var success = bird.success;
    bird.success = function () {
        inFlight -= 1;
        teeOff();
        success.apply(undefined, arguments);
    }
    $.ajax.apply(undefined, poolCue.shift());
}
