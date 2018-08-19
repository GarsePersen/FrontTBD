export default{
    data(){
      return{
      }
    },
    methods:{
        // resize(){
        //     var container =  $('#contenedormapa'),
        //     image =  $('#avatar'),
        //     imgWidth = container.width()
        //     image.mapster('resize',imgWidth,0,resizeTime);   
        // }
    },
    mounted:function(){
        var mensajeDefecto = "HOLLAAA"
        $('#Mapachile').mapster({
            fillOpacity: 0.4,
            fillColor: "d42e16",
            stroke: true,
            strokeColor: "3320FF",
            strokeOpacity: 0.8,
            strokeWidth: 4,
            singleSelect: true,
            // mapKey: 'name',
            // listKey: 'name',
            isSelectable: false,
            onClick: function(e){
            //   $('#tituloModalTempHistoricaSensor').text(e.key);
            //   $('#modal-graficotemperaturahistorica').modal('show');
            },
            showToolTip:true,
            toolTipClose: ["area-mouseout"],
            areas: [
              {
                key: "Arica y Parinacota",
                toolTip: mensajeDefecto
              },
              {
                key: "Oficina central",
                toolTip: mensajeDefecto
              },
              {
                key: "Integral",
                toolTip: mensajeDefecto
              }] 
        }
        );
        // $(window).bind('resize',this.resize);
    }
  } 