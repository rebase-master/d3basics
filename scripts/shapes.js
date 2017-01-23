var dataArray = [5,11,18];

var svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

var newX = 300;


svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
            .attr('x1',function (d, i) {
                return newX;
            })
            .attr('y1',function (d, i) {
                return 80+(i*20);
            })
            .attr('x2',function (d) {
                return newX + d*15;
            })
            .attr('y2',function (d,i) {
                return 80+(i*20);
            })
            .style('stroke', 'green')
            // .attr('stroke', 'blue')
            .attr('stroke-width', 2)
;


