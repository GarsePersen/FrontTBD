export default {
  data() {
    return {
      isActive: true,
      generos: [{id: 0, nombre: ''}],
    }
  },
  methods: {
    collapse(){
      this.isActive = !this.isActive;
    }
  },
  
    mounted:function(){
      let self = this
      fetch('http://165.227.12.119:9091/genres')
         .then(function(response){return response.json();})
         .then(function(json){
             self.generos = [];
             console.log(json);
             json.forEach(genero => self.generos.push({id: genero.id, nombre: genero.name}));
             console.log(self.generos)
        });
    }
  }
