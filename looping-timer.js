function startTimer(duration) {
    let timer = 0;
    setInterval(function () {
        if (++timer > duration-1) {
            timer = 0;
        }
        console.log(timer);
    }, 1000);
}
window.onload = function () {
    var countupsec = 5;
    startTimer(countupsec);
};
