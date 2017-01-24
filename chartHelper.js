var test = function() {
	this.x = 1;
};

var scatterYGraph = function(data, margin, cWidth, cHeight, g, container) {

  
  var containerHeight = cHeight - (margin.top + margin.bottom);
  var containerWidth = cWidth - (margin.left + margin.right);
  var dataSize = data.length;
  var gap = g;
  var width = (containerWidth - (dataSize*gap))/dataSize;
  var max, min;

  console.log("Container Width: " + containerWidth);
  console.log("Container Height: " + containerHeight);
  console.log("Gap: " + gap, "Total Gap: " + (dataSize*gap));
  console.log("Width: " + width, "Total width: " + (dataSize * width) );
  console.log(margin);

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
    .domain([max, min])
    .range([margin.top+(width/2), containerHeight - (margin.bottom+width/2)]);

  var rangeScale = d3.scaleLinear()
    .domain([0, dataSize])
    .range([margin.left+(width/2), containerWidth-margin.right])
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth + margin.left + margin.right)
    .attr("height", containerHeight + margin.bottom+margin.top);

  var circles = svgContainer.selectAll("circle")
  .data(data)
  .enter()
  .append("circle");
    
  var circleAttributes = circles
  .attr("cx", function(d,i) {return rangeScale(i);})
  .attr("cy", function(d,i) {return dataScale(d);})
  .attr("id", function(d,i) {return i;})
  .attr("r", width/2)
  .style("fill", "lightblue");

 console.log(circleAttributes);
 
  var yScale  = d3.scaleLinear()
  .domain([min, max])
  .range([containerHeight - margin.bottom, margin.top]);

  var xScale= d3.scaleLinear()
  .domain([0, data.length])
  .range([margin.left, containerWidth-margin.right]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var xAxisGroup = svgContainer.append("g")
  .attr("transform", "translate(0," + (containerHeight-margin.bottom) + ")")
  .call(xAxis);

  var yAxisGroup = svgContainer.append("g")
  .attr("transform", "translate("+margin.left+",0)")
  .call(yAxis);

  return [svgContainer, circles, circleAttributes];
};

var scatterXGraph = function(data, margin, cWidth, cHeight, g, container, landscape) {

  var containerHeight = cHeight - (margin.top + margin.bottom);
  var containerWidth = cWidth - (margin.left + margin.right);
  var dataSize = data.length;
  var gap = g;
  var width = (containerHeight - (dataSize*gap))/dataSize;
  var max, min;

  console.log("Container Width: " + containerWidth);
  console.log("Container Height: " + containerHeight);
  console.log("Gap: " + gap, "Total Gap: " + (dataSize*gap));
  console.log("Width: " + width, "Total width: " + (dataSize * width) );
  console.log(margin);

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

  var rangeScale = d3.scaleLinear()
    .domain([0, dataSize])
    .range([containerHeight - (margin.bottom + width/2), margin.top+(width/2)]);

  var dataScale = d3.scaleLinear()
    .domain([min, max])
    .range([margin.left+(width/2), containerWidth-margin.right])
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth + margin.left + margin.right)
    .attr("height", containerHeight + margin.bottom+margin.top);

  var circles = svgContainer.selectAll("circle")
  .data(data)
  .enter()
  .append("circle");
    
  var circleAttributes = circles
  .attr("cx", function(d,i) {return dataScale(d);})
  .attr("cy", function(d,i) {return rangeScale(i);})
  .attr("id", function(d,i) {return i;})
  .attr("r", width/2)
  .style("fill", "lightblue");

 console.log(circleAttributes);
 
  var yScale  = d3.scaleLinear()
  .domain([0, data.length])
  .range([containerHeight - margin.bottom, margin.top]);

  var xScale= d3.scaleLinear()
  .domain([min, max])
  .range([margin.left, containerWidth-margin.right]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var xAxisGroup = svgContainer.append("g")
  .attr("transform", "translate(0," + (containerHeight-margin.bottom) + ")")
  .call(xAxis);

  var yAxisGroup = svgContainer.append("g")
  .attr("transform", "translate("+margin.left+",0)")
  .call(yAxis);

  return [svgContainer, circles, circleAttributes];
};

var barYGraph = function(data, margin, cWidth, cHeight, g, container) {

  
  var containerHeight = cHeight - (margin.top + margin.bottom);
  var containerWidth = cWidth - (margin.left + margin.right);
  var dataSize = data.length;
  var gap = g;
  var width = (containerWidth - (dataSize*gap))/dataSize;
  var max, min;

  console.log("Container Width: " + containerWidth);
  console.log("Container Height: " + containerHeight);
  console.log("Gap: " + gap, "Total Gap: " + (dataSize*gap));
  console.log("Width: " + width, "Total width: " + (dataSize * width) );
  console.log(margin);

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
    .domain([max, min])
    .range([containerHeight - margin.bottom, margin.top]);

  var rangeScale = d3.scaleLinear()
    .domain([0, dataSize])
    .range([margin.left+(width/2), containerWidth-margin.right])
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth + margin.left + margin.right)
    .attr("height", containerHeight + margin.bottom+margin.top);

  var rects = svgContainer.selectAll("rect")
  .data(data)
  .enter()
  .append("rect");
    
  var rectAttributes = rects
  .attr("x", function(d,i) {return i*(width+gap);})
  .attr("y", function(d,i) {return containerHeight-dataScale(d);})
  .attr("width", width)
  .attr("height", function(d,i) {return dataScale(d);})
  .attr("id", function(d,i) {return i;})
  .style("fill", "lightblue");

 console.log(rectAttributes);
 
  var yScale  = d3.scaleLinear()
  .domain([min, max])
  .range([containerHeight - margin.bottom, margin.top]);

  var xScale= d3.scaleLinear()
  .domain([0, data.length])
  .range([margin.left, containerWidth-margin.right]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var xAxisGroup = svgContainer.append("g")
  .attr("transform", "translate(0," + (containerHeight-margin.bottom) + ")")
  .call(xAxis);

  var yAxisGroup = svgContainer.append("g")
  .attr("transform", "translate("+margin.left+",0)")
  .call(yAxis);

  return [svgContainer, rects, rectAttributes];
};

var barXGraph = function(data, margin, cWidth, cHeight, g, container, landscape) {

  var containerHeight = cHeight - (margin.top + margin.bottom);
  var containerWidth = cWidth - (margin.left + margin.right);
  var dataSize = data.length;
  var gap = g;
  var width = (containerHeight - (dataSize*gap))/dataSize;
  var max, min;

  console.log("Container Width: " + containerWidth);
  console.log("Container Height: " + containerHeight);
  console.log("Gap: " + gap, "Total Gap: " + (dataSize*gap));
  console.log("Width: " + width, "Total width: " + (dataSize * width) );
  console.log(margin);

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

  var rangeScale = d3.scaleLinear()
    .domain([0, dataSize])
    .range([containerHeight - (margin.bottom + width/2), margin.top+(width/2)]);

  var dataScale = d3.scaleLinear()
    .domain([min, max])
    .range([margin.left+(width/2), containerWidth-margin.right])
  
  var svgContainer = d3.select(container).append("svg")
    .attr("width", containerWidth + margin.left + margin.right)
    .attr("height", containerHeight + margin.bottom+margin.top);

  var circles = svgContainer.selectAll("circle")
  .data(data)
  .enter()
  .append("circle");
    
  var circleAttributes = circles
  .attr("cx", function(d,i) {return dataScale(d);})
  .attr("cy", function(d,i) {return rangeScale(i);})
  .attr("id", function(d,i) {return i;})
  .attr("r", width/2)
  .style("fill", "lightblue");

 console.log(circleAttributes);
 
  var yScale  = d3.scaleLinear()
  .domain([0, data.length])
  .range([containerHeight - margin.bottom, margin.top]);

  var xScale= d3.scaleLinear()
  .domain([min, max])
  .range([margin.left, containerWidth-margin.right]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var xAxisGroup = svgContainer.append("g")
  .attr("transform", "translate(0," + (containerHeight-margin.bottom) + ")")
  .call(xAxis);

  var yAxisGroup = svgContainer.append("g")
  .attr("transform", "translate("+margin.left+",0)")
  .call(yAxis);

  return [svgContainer, circles, circleAttributes];
};