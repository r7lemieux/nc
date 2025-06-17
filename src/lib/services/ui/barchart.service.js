export function buildBarChartV4(d3, selector, data, title) {
    const goodColor = '#119911', badColor = '#AA0509', margin = { top: 50, right: 15, bottom: 50, left: 15 }, width = 440 - margin.left - margin.right, height = 250 - margin.top - margin.bottom;
    const x = d3.scaleBand()
        .range([0, width])
        .paddingInner(.1)
        .paddingOuter(.3);
    const y = d3.scaleLinear()
        .range([height, 0]);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(5, "%");
    const svg = d3.select(selector).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // d3.tsv("data.tsv", d => { d.value = +d.value; return d }, function(error, data) {
    x.domain(data.map(d => d.name));
    y.domain([0, d3.max(data, d => d.value)]);
    svg.append("text")
        .attr("class", "title")
        .attr("x", x(data[0].name))
        .attr("y", -26)
        .text(title);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .selectAll(".tick text")
        .call(wrap, x.bandwidth());
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value))
        .attr('fill', d => {
        console.log(`==>barchart.service.ts:57 d `, d);
        return (d.name.includes('well')) ? goodColor : badColor;
    });
    return svg;
    function wrap(text, width) {
        text.each(function () {
            const text = d3.select(this), words = text.text().split(/\s+/).reverse(), lineHeight = 1.1, // ems
            y = text.attr("y"), dy = parseFloat(text.attr("dy"));
            let word, line = [], lineNumber = 0, tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    if (line.length === 1) {
                    }
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word);
                }
            }
        });
    }
}
//# sourceMappingURL=barchart.service.js.map