import d3 from "d3";
export default{
  data:function(){
    return {
      graphData:[]
    }
  },
  props:[''],
  methods:{
    loadGraph(data){
			var margin = {top: 20, right: 80, bottom: 30, left: 50},
					width = 960 - margin.left - margin.right,
					height = 600 - margin.top - margin.bottom;

			var parseDate = d3.time.format("%Y-%m-%d").parse;
			
			

			var x = d3.time.scale()
					.range([0, width]);

			var y = d3.scale.linear()
					.range([height, 0]);

			var color = d3.scale.category10();

			var xAxis = d3.svg.axis()
					.scale(x)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left");

			var line = d3.svg.line()
				.interpolate("linear")
				.x(function(d) { 
					return x(d.fecha);})
				.y(function(d) { 
					return y(d.tweets);});

			var svg = d3.select("#graficoCrecimiento").append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				
			for (let i = 0; i < data.length; i++) {
				data[i].fecha = data[i].fecha.split("T",1)[0];
				data[i].index = i;
			}

			var datos =[];
			var fecha= [];
			for (let i = 0; i < data.length; i++) {
				if(fecha.indexOf(data[i].fecha) == -1){
					fecha.push(data[i].fecha);
					datos.push(data[i]);
				}
			}
			console.log(datos);
			data = datos;


			color.domain(d3.keys(data[0]).slice(1));
			var bandas = color.domain().map(function(name, index){
				return {
					name: name,
					index: index,
					values: data.map(function(d) {
						return {
							fecha:  parseDate(d.fecha), 
							tweets: +d[name]
						};
					})
				};
			});
			
			x.domain(d3.extent(data, function(d) { return parseDate(d.fecha); }));
				
			y.domain([
				d3.min(bandas, function(c) { return d3.min(c.values, function(v) { return v.tweets; }); }),
				d3.max(bandas, function(c) { return d3.max(c.values, function(v) { return v.tweets; }); })
			]);
				
			svg.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);
				
				svg.append("g")
				.attr("class", "y axis")
				.call(yAxis)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Tweets");
				
				var banda = svg.selectAll(".banda")
				.data(bandas)
				.enter()
				.append("g")
				.attr("class", "banda");
				
				banda.append("path")
				.attr("class", "line")
				.attr("d", function(d){
					return line(d.values);
				})
				.style("stroke", function(d){
					return color(d.index);
				});
				
			banda.append("text")
				.datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
				.attr("transform", function(d) { return "translate(" + x(d.value.fecha) + "," + y(d.value.tweets) + ")"; })
				.attr("x", 3)
				.attr("dy", ".35em")
				.text(function(d) { return d.name; });
		}
	},
  mounted:function(){
    let self = this;
    fetch('http://165.227.12.119:9091/statistics/best10/artistIncrease')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let aux= myJson;
      self.loadGraph(aux);
    });
  }
}



