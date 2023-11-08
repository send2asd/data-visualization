d3.json("countries_tree.json").then(function(data)
{

  var margin = {top: 40, right: 200, bottom: 40, left: 200},
      width = 5200 - margin.left - margin.right,
      height = 1000 - margin.top - margin.bottom;

  var svg = d3.select("#treeSVG")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var i = 0,
      duration = 750,
      root;

  var treemap = d3.tree()
      .size([height, width])
      .separation(function(a, b) {
          return a.parent == b.parent ? 1 : 2;
      });

  root = d3.hierarchy(data, function(d) { return d.children; });
  root.x0 = height / 2;
  root.y0 = 0;

  root.children.forEach(collapse);

  update(root);

  function collapse(d) {
    if(d.children) {
      d._children = d.children
      d._children.forEach(collapse)
      d.children = null
    }
  }

  function update(source) {
    var treeData = treemap(root);

    var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

    nodes.forEach(function(d){ d.y = d.depth * 180});

    //Nodes section

    var node = svg.selectAll('g.node')
        .data(nodes, function(d) {return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', click);

    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 5)
        .style("fill", function(d) {
            return d3.schemeCategory10[d.depth % 10];
        });

    nodeEnter.append('text')
    .attr("dy", ".35em")
    .attr("x", function(d) {
        return d.children || d._children ? -13 : 13;
    })
    .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
    })
    .style("font-weight", "bold")
    .text(function(d) { return d.data.name; });

    var nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      .duration(duration)
      .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")";
       });

    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function(d) {
          return d3.schemeCategory10[d.depth % 10];
      })
      .attr('cursor', 'pointer');

    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select('circle')
      .attr('r', 1e-6);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // links section

    var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .style("stroke", function(d) {
          return d3.schemeCategory10[d.depth % 10];
        })
        .style("stroke-width", "1.5px")
        .attr('d', function(d){
          var o = {x: source.x0, y: source.y0};
          return straightLine(o, o);
        });

    var linkUpdate = linkEnter.merge(link);

    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return straightLine(d, d.parent) })
        .style("stroke", function(d) {
          return d3.schemeCategory10[d.depth % 10];
        });

    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
          var o = {x: source.x, y: source.y};
          return straightLine(o, o);
        })
        .remove();

    nodes.forEach(function(d){
      d.x0 = d.x;
      d.y0 = d.y;
    });

    function straightLine(s, d) {
      return `M ${s.y},${s.x} L ${d.y},${d.x}`;
    }

    function click(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      update(d);
    }
  }
});
