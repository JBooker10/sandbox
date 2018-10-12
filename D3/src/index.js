import * as d3 from "d3";


const gdp_data = [17, 9, 5, 3, 34]
const area_width = 200;
const area_height = 200;
const left_margin = 10;
const right_margin = 10;


const max_gdp = Math.max.apply(Math, gdp_data);

const myScale = d3.scaleLinear()
                  .domain([0, max_gdp])
                  .range([0, area_width - left_margin - right_margin ]);

const spacing = area_height / (gdp_data.length + 1);

const fda = d3.select("#example-1")

fda.selectAll("rect")
    .data(gdp_data)
    .enter()
    .append("rect")
    .attr("y", (d, i) => spacing * (i + 1))
    .attr("x", left_margin)
    .attr("width", (d, i) => myScale(d))
    .attr("height", "20")
    .style("fill", "blue")
    .style("stroke", "black")
    .style("stroke-width", 2)