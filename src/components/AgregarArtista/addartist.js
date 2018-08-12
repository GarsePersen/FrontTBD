export default {
    data(){
      return{
        generos: [{id: 0, nombre: 'Seleccione un genero'}],
        genSelected: 0,
        nuevoartista: "",
        img: "/src/img/musica.jpg"
      }
    },
    title:'Agregando un Artista',
    methods: {
      crearArtista(){
        if(this.genSelected == 0){
          alert("Debe seleccionar un genero asociado a la banda a ingresar");
        }
        if(this.nuevoartista == ""){
          alert("Debe ingresar el nombre de la banda");
        }

        console.log(this.genSelected, this.nuevoartista)
      },
      buscarImagen(){
        if(this.nuevoartista != ""){
          let self = this;
          fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='.concat(this.nuevoartista,'&api_key=24ea2f27b7e0d30cc6b03e841fc36a79&format=json'))
          .then(function(response){return response.json();})
          .then(function(json){
            let imagen = json.artist.image;
            var aux = JSON.parse(JSON.stringify(imagen).split('"#text":').join('"text":'));
            for (let i = 0; i < aux.length; i++) {
              if(aux[i].size == "mega"){
                if(aux[i].text == ""){
                  self.img = "/src/img/musica.jpg"
                }
                else self.img = aux[i].text;
              }
            }
          }).catch(function(error){
            self.img = "/src/img/musica.jpg"
          })
        }
        else{
          this.img = "/src/img/musica.jpg"
        }
      },
    },
   

    mounted:function(){
      let self = this
      fetch('http://165.227.12.119:9091/genres')
         .then(function(response){return response.json();})
         .then(function(json){
             json.forEach(genero => self.generos.push({id: genero.id, nombre: genero.name}));
        });      
    },
    
  }