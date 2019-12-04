
const canvasApp = require('./sphere')
require('./index.css')
// require('./clients.css')

// 第一屏的点的生成
function rotatingPoints() {
    var svg1 = d3.select('#points');

    const width = 450;
    const height = 450;

    svg1.attr("width", width);
    svg1.attr("height", height);


    const pointR = 1;
    const pointBg = 'black';
    const circleR = width / 2 - 50;
    const center = [width / 2, height / 2]

    const pointNumber = 30;

    var data = [];

    for (let index = 0; index < pointNumber; index++) {
        const angle = 2 * Math.PI * index / pointNumber
        data.push({
            x: center[0] + circleR * Math.cos(angle),
            y: center[1] + circleR * Math.sin(angle),
            r: pointR,
            c: pointBg
        })
    }

    var circles = svg1
        .selectAll('circle')
        .data(data);

    circles
        .enter()
        .append('circle')
        .attr('cx', function (d) {
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        })
        .attr('fill', function (d) {
            return d.c;
        })
        .attr('r', function (d) {
            return d.r;
        });

}

// rotatingPoints()

function equal(a, b) {
    return Math.abs(a - b) < 0.1;
}

function circles() {
    var div = d3.select('#circle');
    const width = window.innerWidth - 100;
    const height = 700;
    div.style('width', width + 'px');
    div.style('height', height + 'px');
    // div.attr("width", width);
    // div.attr("height", height);

    const pointR = 20;
    const pointBg = 'rgb(91, 155, 213)';
    const pointStrokeColor = 'rgb(65, 113, 156)';
    const circleR = height / 2 - 50;
    const center = [width / 2, height / 2]

    const pointNumber = 10;

    var data = [];

    for (let index = 0; index < pointNumber; index++) {
        const angle = 2 * Math.PI * index / pointNumber + Math.PI / 10;
        data.push({
            x: center[0] + circleR * Math.cos(angle),
            y: center[1] + circleR * Math.sin(angle),
            r: pointR,
            c: pointBg,
            s: pointStrokeColor,
            angle
        })
    }

    var circleContainers = div
        .selectAll('div')
        .data(data);

    circleContainers
        .enter()
        .append('div')
        .attr('class', 'circle')
        .style('top', function (d) {
            return d.y + 'px';
        })
        .style('left', function (d) {
            return d.x + 'px';
        })
        .append('p')
        .attr('class', 'position-relative')
        .style('top', function (d) {
            if (equal(d.angle / Math.PI, 0.5)) {
                return '45px'
            }
            if (equal(d.angle / Math.PI, 1.5)) {
                return '-40px'
            }
        })
        .style('left', function (d) {
            if (d.angle / Math.PI > 1.5 || d.angle / Math.PI < 0.5) {
                return '45px'
            }
            if (d.angle / Math.PI > 0.51 && d.angle / Math.PI < 1.49) {
                return '-195px'
            }
            if (equal(d.angle / Math.PI, 0.5) || equal(d.angle / Math.PI, 1.5)) {
                return '-70px'
            }

            // return
        })
        .text(function (d) {
            return d.angle / Math.PI
        })
}
// circles()

// function step(timestamp) {
//     var transform = d3.zoomTransform(canvas.node());
//     canvas.attr('transform', "rotate(" + transform.x + "," + transform.y + "deg) scale(1)")
// }

// window.requestAnimationFrame(step);

window.addEventListener("load", canvasApp, false);
