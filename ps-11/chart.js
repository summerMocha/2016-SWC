  // A simple scatter plot
    var width=800;//set the width is 500 px
   var height=800;//set the height also 500px



var margin = {
  top: 100,
  left: 30,
  right: 30,
  bottom: 50
};

var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);

  // Declare data

  var data = [
    {x: 2, y: 3},
    {x: 4, y: 4},
    {x: 6, y: 7},
    {x: 8, y: 6},
    {x: 10, y: 9},
    {x: 12, y: 11},
    {x: 3, y: 2},
    {x: 4, y: 4},
    {x: 7, y: 6},
    {x: 6, y: 8},
    {x: 9, y: 10},
    {x: 11, y: 12}
  ];

// Create scales
var xScale = d3.scaleLinear()
  .domain([0,20])
  .range([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
  .domain([0,20])
  .range([height - margin.bottom, margin.top]);

// Draw axes
var xAxis = svg.append("g")
  .attr("transform","translate(0," + (height-margin.bottom) + ")")
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform","translate(" + margin.left + ",0)")
  .call(d3.axisLeft().scale(yScale));

// Draw circles for scatter plot
var circles = svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return xScale(d.x); })
    .attr("cy", function(d) { return yScale(d.y); })
    .attr("r",3);