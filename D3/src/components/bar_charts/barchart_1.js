import * as d3 from "d3";  

const svgWidth = 500;
const svgHeight = 300;

const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
const barPadding = 5;
const barWidth = (svgWidth / dataset.length)


const svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "bar-chart")

const barChart = svg.selectAll("rect")
                    .data(dataset)
                    // creates mapping between data and DOM
                    .enter()
                    // append a <rect> element for each item
                    .append("rect")
                    // y-coordinate shape: subtract - d from the height of the svg container
                    .attr("y", d => svgHeight - d)
                    // height set to the value of the data point
                    .attr("height", d => d)
                    // total width of container divided by the amount of bars
                    .attr("width", barWidth - barPadding)
                    // set the x-coordinates. i = index of given item in array
                    // multiply index with barWidth variable
                    // translate will push the bar 100 pixels to the right
                    .attr("transform", (d, i) => {
                       let translate = [barWidth * i, 0]
                       return `translate(${translate})`
                    })



