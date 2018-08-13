export default{
    title:"Grafo",
    data:function(){
      
      return {
        nodos: [],
        relaciones: []
      }
    },
    methods:{
      loadGraphGrafo(nodes,connections){
          var i;
          for (i in nodes){
            var size = nodes[i].tamaño *3;
            console.log("el tamaño original es: ",nodes[i].tamaño);
            console.log("el tamaño nuevo es: ",size);
            nodes[i].tamaño = size;
          }
          console.log("holiwiii pan con kiwi");
          console.log(nodes); 
          var visualization = d3plus.viz()
            .container("#viz")
            .type("network")
            .data(nodes)
            .edges(connections)
            .size("tamaño")
            .id("nombre")
            .tooltip(["nombre", "tipo","genero", "followers","ultimo_tweet"])
            .draw()
      },
    
    
    getNodos() {
      this.$http.get('http://165.227.12.119:9091/InfluyentUserArtist/graph/nodes')
      .then(response => {
          this.nodos = response.body;
          this.getRelaciones(this.nodos); 
      }, 
        response => {
      console.log("No se pueden cargar los datos");
      });
    },
    getRelaciones(nodos) {
      this.$http.get('http://165.227.12.119:9091/InfluyentUserArtist/graph/relations')
      .then(response => {
          this.relaciones = response.body;
          console.log(this.nodos);
          console.log(this.relaciones);
          this.loadGraphGrafo(this.nodos,this.relaciones); 
      }, response=> {
          console.log("No se pueden cargar los datos");
      });
    }
  },
    mounted:function(){
      let self = this;
      self.getNodos();
    }
}
