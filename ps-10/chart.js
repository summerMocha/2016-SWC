var dataArray = [
  {age: 10, salary: 300},
  {age: 15, salary: 600},
  {age: 20, salary: 2000},
  {age: 25, salary: 10000},
  {age: 30, salary: 15000},
  {age: 35, salary: 25000},
  {age: 40, salary: 36000},
  {age: 45, salary: 41000},
  {age: 50, salary: 44638}
];

var line = [
  5000, 10000, 20000, 40000
];

var age = [
  10, 15, 20, 25, 30, 35, 40, 45, 50
];

function ageToX (data) {
  return (data.age / 5) * 60 - 100;
};

function salaryToY (data) {
  return data.salary / 100;
};

function getYValue(data) {
  return 489 - salaryToY(data);
};

var svg = d3.select('svg');
svg.selectAll('rect')
   .data(dataArray)
   .enter()
   .append('rect')
   .attr('fill', '#002b80')
   .attr('height', salaryToY)
   .attr('width', 50)
   .attr('x', ageToX)
   .attr('y', getYValue);

for (var i = 0; i < line.length; i++) {
  svg.append('line')
     .attr('x1', 0)
     .attr('y1', 500 - line[i] / 100)
     .attr('x2', 10)
     .attr('y2', 500 - line[i] / 100)
     .attr('stroke', '#000000')
     .attr('stroke-width', 2);
}

for (var i = 0; i < age.length; i++) {
  var x1 = age[i] / 5 * 60 - 60;
  svg.append('line')
     .attr('x1', x1)
     .attr('y1', 500)
     .attr('x2', x1)
     .attr('y2', 490)
     .attr('stroke', '#000000')
     .attr('stroke-width', 2);
}



