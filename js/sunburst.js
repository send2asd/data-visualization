(function () {
    'use strict';

    const numberFormat = d3.format(",d");
    const chartWidth = 1500;
    const chartRadius = chartWidth / 6;

    const chartArc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(chartRadius * 1.5)
            .innerRadius(d => d.y0 * chartRadius)
            .outerRadius(d => Math.max(d.y0 * chartRadius, d.y1 * chartRadius - 1));

    const createPartition = data => {
        const hierarchyRoot = d3.hierarchy(data)
                .sum(d => d.size)
                .sort((a, b) => b.value - a.value);
        return d3.partition()
                 .size([2 * Math.PI, hierarchyRoot.height + 1])
                 (hierarchyRoot);
    };

    d3.json('countries.json').then((data) => {
        console.log(data);
      
        const hierarchyData = createPartition(data);
        const scaleColor = d3.scaleOrdinal()
                .range(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

        hierarchyData.each(d => d.current = d);

        const svgContainer = d3.select('#partitionSVG')
                .style("width", "100%")
                .style("height", "auto")
                .style("font", "9px sans-serif");

        const group = svgContainer.append("g")
                .attr("transform", `translate(${chartWidth / 2},${chartWidth / 2})`);

        const paths = group.append("g")
                .selectAll("path")
                .data(hierarchyData.descendants().slice(1))
                .join("path")
                .attr("fill", d => {
                    while (d.depth > 1) d = d.parent;
                    return scaleColor(d.data.name);
                })
                .attr("fill-opacity", d => isVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
                .attr("d", d => chartArc(d.current));

        paths.filter(d => d.children)
                .style("cursor", "pointer")
                .on("click", handleClicked);

        paths.append("title")
                .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${numberFormat(d.value)}`);

        const textLabels = group.append("g")
                .attr("pointer-events", "none")
                .attr("text-anchor", "middle")
                .style("user-select", "none")
                .selectAll("text")
                .data(hierarchyData.descendants().slice(1))
                .join("text")
                .attr("dy", "0.35em")
                .attr("fill-opacity", d => +isVisibleLabel(d.current))
                .attr("transform", d => computeTextTransform(d.current))
                .text(d => d.data.name);

        const centralCircle = group.append("circle")
                .datum(hierarchyData)
                .attr("r", chartRadius)
                .attr("fill", "none")
                .attr("pointer-events", "all")
                .on("click", handleClicked);

        function handleClicked(p) {
            centralCircle.datum(p.parent || hierarchyData);

            hierarchyData.each(d => d.target = {
                    x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                    x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                    y0: Math.max(0, d.y0 - p.depth),
                    y1: Math.max(0, d.y1 - p.depth)
                });

            const transition = group.transition().duration(750);

            paths.transition(transition)
                .tween("data", d => {
                    const interpolate = d3.interpolate(d.current, d.target);
                    return t => d.current = interpolate(t);
                })
                .filter(function (d) {
                    return +this.getAttribute("fill-opacity") || isVisible(d.target);
                })
                .attr("fill-opacity", d => isVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attrTween("d", d => () => chartArc(d.current));

            textLabels.filter(function (d) {
                return +this.getAttribute("fill-opacity") || isVisibleLabel(d.target);
            }).transition(transition)
                    .attr("fill-opacity", d => +isVisibleLabel(d.target))
                    .attrTween("transform", d => () => computeTextTransform(d.current));
        }

        function computeTextTransform(d) {
            const angle = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const radius = (d.y0 + d.y1) / 2 * chartRadius;
            return `rotate(${angle - 90}) translate(${radius},0) rotate(${angle < 180 ? 0 : 180})`;
        }

        function isVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }

        function isVisibleLabel(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }
    });

}());
