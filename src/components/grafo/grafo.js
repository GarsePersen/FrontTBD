export default{
    title:"Grafo",
    data:function(){
      
      return {
        nodos: [],
        relaciones: []
      }
    },
    methods:{
      loadGraphGrafo(){
          /*var nodes = [
            {"name": "alpha","size":24, "type": "user","edad":30},
            {"name": "beta","size":10, "type": "star"},
            {"name": "gamma","size":12, "type": "user"},
            {"name": "delta","size":10, "type": "user"},
            {"name": "epsilon","size":16, "type": "star"},
            {"name": "zeta","size":20, "type": "user","edad":35},
            {"name": "theta","size":14, "type": "star"},
            {"name": "eta","size":12, "type": "user"}
          ]
          var connections = [
            {"source": "alpha", "target": "beta"},
            {"source": "alpha", "target": "gamma"},
            {"source": "beta", "target": "delta"},
            {"source": "beta", "target": "epsilon"},
            {"source": "zeta", "target": "gamma"},
            {"source": "theta", "target": "gamma"},
            {"source": "eta", "target": "gamma"}
          ]
          */
          var visualization = d3plus.viz()
            .container("#viz")
            .type("network")
            .data(nodes)
            .edges(connections)
            .size("size")
            .id("name")
            .tooltip(["name", "tipo", "followers", "genre"])
            .draw()
      },
    
    
    getNodos() {
      this.$http.get('http://165.227.12.119:9091/userStatistics/graph/nodes')
      .then(response => {
          this.nodos = response.body;
          this.getRelaciones(); 
      }, 
        response => {
      console.log("No se pueden cargar los datos");
      });
    },
    getRelaciones() {
      this.$http.get('http://165.227.12.119:9091/userStatistics/graph/relations')
      .then(response => {
          this.relaciones = response.body;
          this.loadGrap3hGrafo(); 
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
