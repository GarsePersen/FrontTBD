
export default{
  data() {
    return {
      artistas: [],
      loaded: false,
    }
  },
  props:['title'],
  methods:{
    loadGraphGA(data){
      var mayorL = 0;
      for (let i = 0; i < data.length; i++) {
        if(data[i].name.length > mayorL){ mayorL = data[i].name.length}
      }
      var margin = {top: 50, right: 30, bottom: mayorL*9, left: 60},
      width = 600 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

      var x = d3.scale.ordinal().rangeRoundBands([0, width], .07);

      var y = d3.scale.linear().range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(10);

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .ticks(24)
          .tickFormat(d3.format(".2s"));
        

      var svg = d3.select('#grafico')
        .append("svg")
        .attr("style","margin-left:-30%")
        .attr("style","margin-right:-4%")
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
          console.log(d.total_tweets)
         return d.total_tweets; 
       })]);

      svg.selectAll("bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("id",function(d) { return d.name; })
          .attr("fill","#78B43F")
          .attr("x", function(d){return  x(d.name);})
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.total_tweets*d.positiveTweets); })
          .attr("height", function(d) { return height - y(d.total_tweets*d.positiveTweets); })
          
          .append("title")
          .text(function (d,i) {
              return "Porcentaje Tweets Positivos:"+(d.positiveTweets * 100).toFixed(2)+"%";
            });
            
      svg.selectAll("bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("style","")
        .attr("data-toggle","showModal")
        .attr("fill","#E87422")
        .attr("x", function(d){return  x(d.name);})
        .attr("width", x.rangeBand())

        .attr("y", function(d) { return y(d.total_tweets*d.negativeTweets+d.total_tweets*d.positiveTweets); })
        .attr("height", function(d) { return height - y(d.total_tweets*d.negativeTweets); })

        .append("title")
        .text(function (d,i) {
            return "Porcentaje Tweets Negativos:"+(d.negativeTweets* 100).toFixed(2)+"%";
          });
        
      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Cantidad de Tweets");
        
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-60)" );

      var leyendas = ["Tweets positivos","Tweets negativos"];
      var colores = ["#70AA32","#E26809"];
      var w = 60;
      var legend = d3.select('#leyenda')
        .append("svg")
        .attr("class", "legend")
        .attr("x", w - 60)
        .attr("y", 30)
        .attr("width", 155)
        .attr("height", 60)
          
      legend.selectAll('g').data(leyendas)
        .enter()
        .append('g')
        .each(function(d, i) {
          var g = d3.select(this);
          g.append("rect")
            .attr("x", w - 65)
            .attr("y", i*25)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", colores[i]);
  
          g.append("text")
            .attr("x", w - 50)
            .attr("y", i * 25 + 8)
            .attr("height",30)
            .attr("width",100)
            .text(d);

        });  
        
    },
    fnum(x) {
      if(isNaN(x)) return x;
    
      if(x < 9999) {
        return x;
      }
    
      if(x < 1000000) {
        return Math.round(x/1000) + "K";
      }
      if( x < 10000000) {
        return (x/1000000).toFixed(2) + "M";
      }
    
      if(x < 1000000000) {
        return Math.round((x/1000000)) + "M";
      }
    
      if(x < 1000000000000) {
        return Math.round((x/1000000000)) + "B";
      }
    
      return "1T+";
    }
  },
  mounted:function(){
    let self = this;
    fetch('http://165.227.12.119:9091/statistics/worst10/genres')
    .then(function(response) {
      self.loaded = true;
      return response.json();
    })
    .then(function(myJson) {
      let aux= myJson;
      self.loadGraphGA(aux);
      aux.forEach(function(d) {
        var pos = Math.round(d.positiveTweets*d.total_tweets);
        var neg = Math.round(d.negativeTweets*d.total_tweets);
        self.artistas.push({name:d.name,pos:self.fnum(pos),neg:self.fnum(neg)});
      });
      
    });
  }
}