var click = 0;
var CirculeX = 300;
var CirculeY = 300;

function increment(parameters) {
    var x = parameters.clientX - CirculeX;
    var y = parameters.clientY - CirculeY;
    var dist = Math.sqrt(y**2 + x**2);
    console.log("Вычислил радиус ", dist);
    if (dist < 50) {
        click++;
        console.log("click = ", click);
        redraw();
    };
};

var canvas_click = document.getElementById("Canvas");
canvas_click.addEventListener("click", increment);
var ctx = canvas_click.getContext("2d");

setInterval(function move () {
    CirculeY += -100 + Math.random() * (100 + 1 + 100);
    CirculeX += -100 + Math.random() * (100 + 1 + 100);
    console.log("moveX= ",+ CirculeX + "moveY= ",+ CirculeY);
    if ((CirculeX > 1920) || (CirculeX < 0)) {CirculeX = 500};
    if ((CirculeY > 1080) || (CirculeY < 0)) {CirculeY = 500};
    redraw();
}, 100);

function redraw() {
    ctx.clearRect(0,0,canvas_click.width, canvas_click.height);
    ctx.font = "20px Verdana";
    ctx.fillText(`Кликнул ${click} раз`, 100, 100);
    ctx.beginPath();
    ctx.fillStyle = "#ff7867";
    ctx.arc(CirculeX, CirculeY, 50, 0, 2*3.14);
    ctx.fill();
}
redraw();