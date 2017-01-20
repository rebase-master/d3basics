var dataArray = [5,11,18];

var svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

var newX = 300;


svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
            .attr('class','second')
            .attr('cx',function (d, i) {
                newX+= (d*6) + (i*20);
                return newX;
            })
            .attr('cy',function (d, i) {
                return 100;
            })
            .attr('rx',function (d) {
                return d*3;
            })
            .attr('ry',function (d) {
                return 30;
            })
;
