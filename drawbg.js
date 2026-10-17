function drawStar(ctx, cx, cy, spikes, innerRadius, outerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(rot), cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#cfcfff';
    ctx.fill();
}

// background
let CANVAS = document.createElement("canvas");
CANVAS.id = "bg";
document.body.insertBefore(CANVAS,document.body.firstElementChild);
let CONTEXT = CANVAS.getContext('2d');
var scroll = 0;
function bg_update() {
    var speed = 0.1;
    scroll += speed;
    var separation = 30;
    CANVAS.hidden = true;
    CANVAS.width = window.innerWidth / 2;
    CANVAS.height = window.innerHeight / 2;
    CANVAS.hidden = false;
    for (var _i = -1; _i < CANVAS.height / separation + 1; _i++) {
        for (var i = -1; i < CANVAS.width / separation + 1; i++) {
            drawStar(CONTEXT, i * separation + scroll, _i * separation + scroll, 5, 4, 7.5);
        }
    }
    if (scroll > separation) scroll = speed;
}

setInterval(bg_update, 1 / 60 / 1000)