<template src="./index.html"></template>
<style src="./index.css"></style>
<script src="./index.js"></script>

<script type="text/javascript">
  var datos = [135, 100, 150, 125, 225, 175];
  var config = { columnWidth: 45, columnGap: 5, margin: 10, height: 235 };

  d3.select("svg")
  .selectAll("rect")
  .data(datos)
  .enter().append("rect")
  .attr("width", config.columnWidth)
  .attr("x", function(d,i) {
    return config.margin + i * (config.columnWidth + config.columnGap)
  })
  .attr("y", function(d,i) { return config.height - d })
  .attr("height", function(d,i) { return d });

</script>
