x = 190;
y = 190;

function launch() {
    document.getElementById('launcher').disabled = true;
    document.getElementById('freezer').disabled = false;
    let ball = document.getElementById('ball');
    let speedx = Math.random() * 10;
    let speedy = Math.random() * 10;
    myInterval = setInterval(frame, 20);

    function frame() {
        if (x >= 380) {
            speedx = -Math.random() * 10;
        }
        else if (x <= 0) {
            speedx = Math.random() * 10;
        }
        if (y >= 380) {
            speedy = -Math.random() * 10;
        }
        else if (y < 0) {
            speedy = Math.random() * 10;
        }
        x += speedx;
        y += speedy;
        ball.style.top = x + "px";
        ball.style.left = y + "px";
    }
}

function freeze() {
    document.getElementById('freezer').disabled = true;
    document.getElementById('launcher').disabled = false;
    clearInterval(myInterval);
}