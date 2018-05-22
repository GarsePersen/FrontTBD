<template>
</template>
<script>
import d3 from "d3";
export default{
  data:function(){
    return {
      graphData:[]
    }
  },
  props:['title'],
  methods:{
    loadGraph:function(data){
      var margin = {top: 20, right: 20, bottom: 70, left: 40},
      width = 700 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
      console.log('print'+ height);
      // Parse the date / time
      var	parseDate = d3.time.format("%Y-%m").parse;
      var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
      var y = d3.scale.linear().range([height, 0]);
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .tickFormat(d3.time.format("%Y-%m"));
      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .ticks(10);
      var svg = d3.select(this.$el).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
          data.forEach(function(d) {
              d.date = parseDate(d.date);
              d.value = +d.value;
          });
        x.domain(data.map(function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
          .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" );
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Value ($)");
        svg.selectAll("bar")
            .data(data)
          .enter().append("rect")
            //.style("fill", "steelblue")
            .attr("x", function(d) { return x(d.date); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); });
        svg.append("text").text(this.title)
    }
  },
  mounted:function(){
    console.log('BarGraph');
    this.$http.get('http://localhost:3000/sales')
    .then(response=>{
      this.graphData = response.body;
     console.log('graphData',this.graphData);
     this.loadGraph(this.graphData);
    }, response=>{
       console.log('error cargando lista');
    })
  }
}
</script>
<style>
rect{
  fill:#54C08B;
}
.axis {
    font: 10px sans-serif;
  }
  .axis path,
  .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
  }
</style>