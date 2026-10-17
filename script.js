function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

let animation_progress = 0;
let siner = 0;
let y_off = 0;
let y_offt = 0;
let toggled = false;
function update() {
    var sin1 = Math.sin(siner * 0.08);
    y_off = lerp(y_off, y_offt, 0.05);
    var sin2 = Math.sin(siner * 0.05);
    var thename = document.getElementById("main");
    animation_progress += 0.002;
    if (animation_progress > 1) {
        animation_progress = 1;
    }
    if (animation_progress > 0.4) {
        siner = siner + 0.2;
    }
    var mult = easeOutElastic(animation_progress);
    thename.style = `opacity: ${mult};transform: translate(calc(-50% + ${12 * sin1 * main_siner}px),calc(${-100 + mult * 100 - 50}% + ${12 * sin2 * main_siner + y_off}px)) scaleX(${0.5 + mult * 0.5}) scaleY(${1.25 - mult * 0.25});`;

    if (toggled) {
        links_y_t = 0;
        links_opacity_t = 1;
        main_siner_t = 0
    } else {
        links_y_t = -30;
        links_opacity_t = 0;
        main_siner_t = 1;
    }

    var a = document.getElementById("links");
    links_y = lerp(links_y, links_y_t, 0.05);
    main_siner = lerp(main_siner, main_siner_t, 0.02);
    links_opacity = lerp(links_opacity, links_opacity_t, 0.1);
    if (links_opacity > 0.1) a.style = `opacity: ${links_opacity}; transform: translate(-50%,calc(-50% + 30px + ${links_y}px));`
    else a.style = "display: none;"
}
let links_y = 0;
let links_y_t = 0;
let links_opacity = 0;
let links_opacity_t = 0;
let main_siner = 1;
let main_siner_t = 1;
function onMain() {
    toggled = !toggled;
    y_offt = -50 * toggled;

}
setInterval(update, 1 / 60 / 1000)