var test = function() {
	this.x = 1;
};

var scatterGraph = function(data, cWidth, cHeight, g, container) {
  var margin = {
    left: 30,
    right: 10,
    top: 10,
    bottom: 30
  }
  
  var containerHeight = cHeight - (margin.top + margin.bottom);
  var containerWidth = cWidth - (margin.left + margin.right);
  var dataSize = data.length;
  var gap = g;
  var width = (containerWidth - (dataSize*gap))/dataSize;
  var max, min;

  for(var i = 0; i < dataSize; i++) {
    if(max) {
      if(max < data[i]) {
        max = data[i];
      }
    } else {
      max = data[i];
    }
    
    if(min) {
      if(min > data[i]) {
        min = data[i];
      }
    } else {
        min = data[i];
    }
  }

  var dataScale = d3.scaleLinear()
    .domain([min, max])
    .range([margin.left, containerHeight-margin.right]);

  var newData = [];
  for(var i = 0; i < dataSize; i++) {
    newData.push(dataScale(data[i]));
  }

  containerHeight += width;
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth + margin.left + margin.right)
    .attr("height", containerHeight + margin.bottom+margin.top);

  var circles = svgContainer.selectAll("circle")
  .data(newData)
  .enter()
  .append("circle");
    
  var circleAttributes = circles
  .attr("cx", function(d,i) {return containerHeight - (d+(width/2)) + margin.left;})
  .attr("cy", function(d,i){return i*(gap+width)+(width/2)+margin.top;})
  .attr("r", width/2)
  .style("fill", "lightblue");

  var xScale = d3.scaleLinear()
  .domain([min, max])
  .range([margin.left, containerWidth-margin.right]);

  var yScale = d3.scaleLinear()
  .domain([0, data.length])
  .range([containerHeight-margin.top, margin.bottom]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var xAxisGroup = svgContainer.append("g")
  .attr("transform", "translate(0," + containerHeight + ")")
  .call(xAxis);

  var yAxisGroup = svgContainer.append("g")
  .attr("transform", "translate("+margin.left+","+margin.top+")")
  .call(yAxis);

  return [svgContainer, circles, circleAttributes];
};