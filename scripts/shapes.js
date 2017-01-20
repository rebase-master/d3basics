var dataArray = [5,11,18];

var svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

var newX = 300;

svg.selectAll('rect')
    .data(dataArray)
    .enter()
    .append('circle')
        .attr('cx',function (d, i) {
            newX+= (d*6) + (i*20);
            return newX;
        })
        .attr('cy',function (d, i) {
            return 100;
        })
        .attr('r',function (d) {
            return d*3;
        })

;
