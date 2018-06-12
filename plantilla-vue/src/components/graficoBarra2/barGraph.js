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
      
      var margin = {top: 30, right: 30, bottom: 100, left: 50},
      width = 800 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

      var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

      var y = d3.scale.linear().range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(10);

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
              d.name = d.name;
              d.positive_tweets = +d.positive_tweets;
              d.negative_tweets = +d.negative_tweets;
          });

        x.domain(data.map(function(d) { 
          return d.name; 
        }));
        y.domain([0, d3.max(data, function(d) {
         return d.positive_tweets; 
       })]);

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
            .text("Cantidad de Post");

        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("class","bar1")
            .attr("x", function(d){return  x(d.name) + x.rangeBand()/2 ;})
            .attr("width", x.rangeBand()/2)
            .attr("y", function(d) { return y(d.positive_tweets); })
            .attr("height", function(d) { return height - y(d.positive_tweets); });

        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("class","bar2")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand()/2)
            .attr("y", function(d) { return y(d.negative_tweets); })
            .attr("height", function(d) { return height - y(d.negative_tweets); });

        svg.append("text").text(this.title)
    }
  },

  mounted:function(){
    console.log('BarGraph');
    this.$http.get('http://localhost:3000/estadisticas')
    .then(response=>{
      this.graphData = response.body;
     console.log('graphData',this.graphData);
     this.loadGraph(this.graphData);
    }, response=>{
       console.log('error cargando lista');
    })
  }
}