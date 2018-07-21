import d3 from "d3";
export default{
  data:function(){
    return {
      graphData:[]
    }
  },
  props:['title'],
  methods:{
    loadGraph(data){
      var margin = {top: 30, right: 30, bottom: 100, left: 50},
      width = 800 - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;

      var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

      var y = d3.scale.linear().range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(10);

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .ticks(24);

      var svg = d3.select('#grafico')
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

      data.forEach(function(d) {
          d.name = d.name;
          d.positiveTweets = +d.positiveTweets;
          d.negativeTweets = +d.negativeTweets;
          d.total_tweets = +d.total_tweets;
      });

        x.domain(data.map(function(d) { 
          return d.name; 
        }));
        y.domain([0, d3.max(data, function(d) {
         return d.total_tweets; 
       })]);

        
        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("fill","#9ecae1")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.total_tweets); })
            .attr("height", function(d) { return height - y(d.total_tweets); })
            .append("title")
            .text(function (d,i) {
                return "Post Totales:"+d.total_tweets;
              });

        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("fill","#c6dbef")
            .attr("x", function(d){return  x(d.name) + x.rangeBand()/2 ;})
            .attr("width", x.rangeBand()/2)
            .attr("y", function(d) { return y(d.positiveTweets); })
            .attr("height", function(d) { return height - y(d.positiveTweets); })
            .append("title")
            .text(function (d,i) {
                return "Post Positivos:"+d.positiveTweets;
              });
              
        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("fill","#6baed6")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand()/2)
            .attr("y", function(d) { return y(d.negativeTweets); })
            .attr("height", function(d) { return height - y(d.negativeTweets); })
            .append("title")
            .text(function (d,i) {
                return "Post Negativos:"+d.negativeTweets;
              });
        
        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Cantidad de Post");
        
        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

        svg.append("text").text(this.title)
    }
  },
  mounted:function(){
    let self = this;
    fetch('http://165.227.12.119:9091/statistics/best10/genre/rock')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let aux= myJson;

      console.log(aux);
      
      self.loadGraph(aux);
    });
  }
}