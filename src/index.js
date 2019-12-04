
const canvasApp = require('./sphere')
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

window.addEventListener("load", canvasApp, false);

new fullpage('#fullpage', {
    //options here
    // autoScrolling: true,
    // scrollHorizontally: true
});

//methods
// fullpage_api.setAllowScrolling(false);