var test = function() {
	this.x = 1;
};

var chartHelper = function(data, cWidth, cHeight, g, container) {
  var containerHeight = cHeight;
  var containerWidth = cWidth;
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

  var linearScale = d3.scaleLinear()
    .domain([min, max])
    .range([0, containerHeight]);

  var newData = [];
  for(var i = 0; i < dataSize; i++) {
    newData.push(linearScale(data[i]));
  }
    
  containerHeight += width;
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight);
    
  var circles = svgContainer.selectAll("circle")
  .data(newData)
  .enter()
  .append("circle");
    
  var circleAttributes = circles
  .attr("cx", function(d,i) {return i*(gap+width)+(width/2);})
  .attr("cy", function(d){return d+(width/2);})
  .attr("r", width/2)
  .style("fill", "lightblue");

  return [svgContainer, circles, circleAttributes];
};