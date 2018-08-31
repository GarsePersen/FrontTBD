export default{
    data(){
      return{
      }
    },
    methods:{
 
    },
    mounted:function(){
        var mensajeDefecto = "HOLLAAA";
        var color = "fff"
        $('#Mapachile').mapster({
          fillOpacity: 1,
          // fillColor: "d42e16",
          stroke: true,
          strokeColor: "fff",
          strokeOpacity: 0.5,
          strokeWidth: 2,
          mapKey: 'name',
          listKey: 'name',
          isSelectable: false,
          staticState:true,
          onClick: function(e){
          //   $('#tituloModalTempHistoricaSensor').text(e.key);
          //   $('#modal-graficotemperaturahistorica').modal('show');
          },
          showToolTip:true,
          toolTipClose: ["area-mouseout"],
          areas: [
            {
              key: "Arica y Parinacota",
              toolTip: "Arica y Parinacota",
              fillColor: color
            },
            {
              key: "Tarapacá",
              toolTip: "Tarapacá",
              fillColor: color
            },
            {
              key: "Antofagasta",
              toolTip: "Antofagasta",
              fillColor: "d42e16"
            },
            {
              key: "Atacama",
              toolTip: "Atacama",
              fillColor: "d42e16"
            },
            {
              key: "Coquimbo",
              toolTip: 'Coquimbo',
              fillColor: "d42e16"
            },
            {
              key: "Valparaíso",
              toolTip: "Valparaíso",
              fillColor: "d42e16"
            },
            {
              key: "Metropolitana de Santiago",
              toolTip: "Metropolitana de Santiago",
              fillColor: "d42e16"
            },
            {
              key: "Libertador General Bernardo O'Higgins",
              toolTip: "Libertador General Bernardo O'Higgins",
              fillColor: "d42e16"
            },
            {
              key: "Maule",
              toolTip: "Maule",
              fillColor: "d42e16"
            },
            {
              key: "Bío Bío",
              toolTip: "Bío Bío",
              fillColor: "d42e16"
            },
            {
              key: "La Araucanía",
              toolTip: "La Araucanía",
              fillColor: "d42e16"
            },
            {
              key: "Los Ríos",
              toolTip: "Los Ríos",
              fillColor: "d42e16"
            },
            {
              key: "Los Lagos",
              toolTip: "Los Lagos",
              fillColor: "d42e16"
            },
            {
              key: "Aysén del General Carlos Ibañes del Campo",
              toolTip: "Aysén del General Carlos Ibañes del Campo",
              fillColor: "d42e16"
            },
            {
              key: "Magallanes y Antártica Chilena",
              toolTip: "Magallanes y Antártica Chilena",
              fillColor: "d42e16"
            },
          ] 
        }
      );
    }
  } 