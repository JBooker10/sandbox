import * as d3 from "d3"; 

const temperatures = [
    { temp: 32, month: "January"},
    { temp: 38, month: "February"},
    { temp: 47, month: "March"},
    { temp: 59, month: "April"},
    { temp: 70, month: "May"},
    { temp: 80, month: "June"},
    { temp: 84, month: "July"},
    { temp: 83, month: "August"},
    { temp: 76, month: "September"},
    { temp: 64, month: "October"},
    { temp: 49, month: "November"},
    { temp: 37, month: "December"}
]

const months = temperatures.map(t => t.month)

const margin = {
    top: 5,
    right: 5,
    bottom: 50,
    left: 50
}

const fullWidth = 700;
const fullHeight = 200;

// width and height vals will be used in the ranges of scales
const width = fullWidth - margin.right - margin.left;
const height = fullHeight - margin.top - margin.bottom;

// Rectangles are drawn using x, y, width and height attributes
// x & y correspond to the left and top edges of the <rect>

const svg = d3.select("#barchart-1")
              .append("svg")
              .attr("width", fullWidth)
              .attr("height", fullHeight)
              .append("g")
              .attr('transform', `translate(${margin.left},${margin.top})`)

// Verical bars

// spans the width of the chart -- 0 (left edge) to width (right edge)
const monthScale = d3.scaleBand()
                    .domain(months)
                    .range([0, width])
                    .paddingInner(0.1)

// spans the height of the chart goes from height to - bottom
const tempScale = d3.scaleLinear()
                    .domain([0, d3.max(temperatures, d => d.temp )])
                    .range([height, 0])
                    .nice();


const bandWidth = monthScale.bandwidth();

const barHolder = svg.append('g')
                     .classed('bar-holder', true)

// draw bars

const xAxis = d3.axisBottom(monthScale).tickSizeOuter(0)
const yAxis = d3.axisLeft(tempScale)


barHolder.selectAll('rect.bar')
        .data(temperatures)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('x', (d,i)  => monthScale(d.month))
        .attr('width', bandWidth)
        .attr('y', d => tempScale(d.temp))
        .attr('height', d => height - tempScale(d.temp))

 svg.append('g')
    .classed('x axis', true)
    .attr('transform', `translate(0,${height})`)
    .call(xAxis)

svg.append('g')
    .classed('y axis', true)
    .call(yAxis)


let bars = barHolder.selectAll('rect.bar')
                      .data(temperatures)
                      .enter()
                      .append('rect')
                      .classed('bar', true)
                      .attr('x', (d, i) => monthScale(d.month))
                      .attr('width', bandWidth)
                      .attr('y', d => tempScale(d.temp))
                      .attr('height', d => height - tempScale(d.temp))

 isCelsius = false;


const convert = () => {
  
    let converter = isCelsius ? toFarenheit : toCelsius;
    yText.text(isCelsius ? 'Fahrenheit' :  'Celsius')
    isCelsius = !isCelsius
    temperatures.forEach(t => t.temp = converter(t.temp))

    bars
    .transition()
    .duration(2500)
    .attr('y', d => tempScale(d.temp))
    .attr('height', d => height - tempScale(d.temp))
}

const toCelsius = f => ((f-32)*5/ 9);

const toFarenheit = c => ( c*9/ 5 + 32)

setInterval(convert, 3000);


// d3.scaleLinear
// bandwidth
// classed

// https://www.pshrmn.com/tutorials/d3/bar-charts/
// https://www.pshrmn.com/tutorials/d3/shapes/