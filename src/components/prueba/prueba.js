import { resolve } from "path";
import axios from 'axios'

export default {
  data() {
    return {
      loaded: false,
      selected: "",
      selectedBool: false,
      bandas: [],
      regionSelected: "",
      generoSelected:"",
      info1: "",
      info3: "",
      info2: "",
      generos: [],
      geostatistics: [],
      regionXV: 0,
      regionI: 0,
      regionII: 0,
      regionIII: 0,
      regionIV: 0,
      regionV: 0,
      regionVI: 0,
      regionVII: 0,
      regionVIII: 0,
      regionIX: 0,
      regionX: 0,
      regionXI: 0,
      regionXII: 0,
      regionXIV: 0,
      regionMet: 0,
    }
  },
  methods: {
    mapPressed(region) {
      let that = this;
      if (region == "I") {
        this.regionSelected = "Región de Tarapacá";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionI;

      }
      if (region == "II") {
        this.regionSelected = "Región de Antofagasta";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionII;
      }
      if (region == "III") {
        this.regionSelected = "Región de Atacama";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionIII;
      }
      if (region == "IV") {
        this.regionSelected = "Región de Coquimbo";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionIV;
      }
      if (region == "V") {
        this.regionSelected = "Región de Valparaíso";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionV;
      }
      if (region == "VI") {
        this.regionSelected = "Región de O'Higgins";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionVI;
      }
      if (region == "Metropolitana") {
        this.regionSelected = "Región Metropolitana";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionMet;
      }
      if (region == "VII") {
        this.regionSelected = "Región del Maule";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionVII;
      }
      if (region == "VIII") {
        this.regionSelected = "Región del Bío Bío";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionVIII;
      }
      if (region == "IX") {
        this.regionSelected = "Región de la Araucanía";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionIX;
      }
      if (region == "X") {
        this.regionSelected = "Región de los Lagos";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionX;
      }
      if (region == "XI") {
        this.regionSelected = "Región de Aisén";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionXI;
      }
      if (region == "XII") {
        this.regionSelected = "Región de Magallanes y Antártica";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionXII;
      }
      if (region == "XIV") {
        this.regionSelected = "Región de los Ríos";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionXIV;
      }
      if (region == "XV") {
        this.regionSelected = "Región de Arica y Parinacota";
        this.info3 = "Cantidad de tweets de la región analizados: " + this.regionXV;
      }
    },
    crearMapa() {
      var mensajeDefecto = "HOLLAAA";
      var colorMet = "FDFFFE"
      var colorI = "FDFFFE"
      var colorII = "FDFFFE"
      var colorIII = "FDFFFE"
      var colorIV = "FDFFFE"
      var colorV = "FDFFFE"
      var colorVI = "FDFFFE"
      var colorVII = "FDFFFE"
      var colorVIII = "FDFFFE"
      var colorIX = "FDFFFE"
      var colorX = "FDFFFE"
      var colorXI = "FDFFFE"
      var colorXII = "FDFFFE"
      var colorXV = "FDFFFE"
      var colorXIV = "FDFFFE"

      //Intensidad colores
      var intensidadColor = "A0DEAE";
      var intensidadColor2 = "78B384";
      var intensidadColor3 = "62A270";
      var intensidadColor4 = "4C925B";
      var intensidadColor5 = "317E41";
      var intensidadColor6 = "286A36";
      var intensidadColor7 = "216830";
      var intensidadColor8 = "0B4918";
      var intensidadColor9 = "053A11";

      //Region I
      if ((this.regionI >= 1) && (this.regionI < 20)) {
        colorI = intensidadColor;
      }
      if ((this.regionI >= 20) && (this.regionI < 40)) {
        colorI = intensidadColor2;
      }
      if ((this.regionI >= 60) && (this.regionI < 60)) {
        colorI = intensidadColor3;
      }
      if ((this.regionI >= 80) && (this.regionI < 80)) {
        colorI = intensidadColor4;
      }
      if ((this.regionI >= 100) && (this.regionI < 100)) {
        colorI = intensidadColor5;
      }
      if ((this.regionI >= 120) && (this.regionI < 120)) {
        colorI = intensidadColor6;
      }
      if ((this.regionI >= 140) && (this.regionI < 140)) {
        colorI = intensidadColor7;
      }
      if ((this.regionI >= 160) && (this.regionI < 160)) {
        colorI = intensidadColor8;
      }
      if (this.regionI >= 160) {
        colorI = intensidadColor9;
      }

      //Region II
      if ((this.regionII >= 1) && (this.regionII < 20)) {
        colorII = intensidadColor;
      }
      if ((this.regionII >= 20) && (this.regionII < 40)) {
        colorII = intensidadColor2;
      }
      if ((this.regionII >= 60) && (this.regionII < 60)) {
        colorII = intensidadColor3;
      }
      if ((this.regionII >= 80) && (this.regionII < 80)) {
        colorII = intensidadColor4;
      }
      if ((this.regionII >= 100) && (this.regionII < 100)) {
        colorII = intensidadColor5;
      }
      if ((this.regionII >= 120) && (this.regionII < 120)) {
        colorII = intensidadColor6;
      }
      if ((this.regionII >= 140) && (this.regionII < 140)) {
        colorII = intensidadColor7;
      }
      if ((this.regionII >= 160) && (this.regionII < 160)) {
        colorII = intensidadColor8;
      }
      if (this.regionII >= 160) {
        colorII = intensidadColor9;
      }


      //Region IV
      if ((this.regionIII >= 1) && (this.regionIII < 20)) {
        colorIII = intensidadColor;
      }
      if ((this.regionIII >= 20) && (this.regionIII < 40)) {
        colorIII = intensidadColor2;
      }
      if ((this.regionIII >= 60) && (this.regionIII < 60)) {
        colorIII = intensidadColor3;
      }
      if ((this.regionIII >= 80) && (this.regionIII < 80)) {
        colorIII = intensidadColor4;
      }
      if ((this.regionIII >= 100) && (this.regionIII < 100)) {
        colorIII = intensidadColor5;
      }
      if ((this.regionIII >= 120) && (this.regionIII < 120)) {
        colorIII = intensidadColor6;
      }
      if ((this.regionIII >= 140) && (this.regionIII < 140)) {
        colorIII = intensidadColor7;
      }
      if ((this.regionIII >= 160) && (this.regionIII < 160)) {
        colorIII = intensidadColor8;
      }
      if (this.regionIII >= 160) {
        colorIII = intensidadColor9;
      }

      //Region IV
      if ((this.regionIV >= 1) && (this.regionIV < 20)) {
        colorIV = intensidadColor;
      }
      if ((this.regionIV >= 20) && (this.regionIV < 40)) {
        colorIV = intensidadColor2;
      }
      if ((this.regionIV >= 60) && (this.regionIV < 60)) {
        colorIV = intensidadColor3;
      }
      if ((this.regionIV >= 80) && (this.regionIV < 80)) {
        colorIV = intensidadColor4;
      }
      if ((this.regionIV >= 100) && (this.regionIV < 100)) {
        colorIV = intensidadColor5;
      }
      if ((this.regionIV >= 120) && (this.regionIV < 120)) {
        colorIV = intensidadColor6;
      }
      if ((this.regionIV >= 140) && (this.regionIV < 140)) {
        colorIV = intensidadColor7;
      }
      if ((this.regionIV >= 160) && (this.regionIV < 160)) {
        colorIV = intensidadColor8;
      }
      if (this.regionIV >= 160) {
        colorIV = intensidadColor9;
      }
      //Region V
      if ((this.regionV >= 1) && (this.regionV < 20)) {
        colorV = intensidadColor;
      }
      if ((this.regionV >= 20) && (this.regionV < 40)) {
        colorV = intensidadColor2;
      }
      if ((this.regionV >= 60) && (this.regionV < 60)) {
        colorV = intensidadColor3;
      }
      if ((this.regionV >= 80) && (this.regionV < 80)) {
        colorV = intensidadColor4;
      }
      if ((this.regionV >= 100) && (this.regionV < 100)) {
        colorV = intensidadColor5;
      }
      if ((this.regionV >= 120) && (this.regionV < 120)) {
        colorV = intensidadColor6;
      }
      if ((this.regionV >= 140) && (this.regionV < 140)) {
        colorV = intensidadColor7;
      }
      if ((this.regionV >= 160) && (this.regionV < 160)) {
        colorV = intensidadColor8;
      }
      if (this.regionV >= 160) {
        colorV = intensidadColor9;
      }

      //Region VI
      if ((this.regionVI >= 1) && (this.regionVI < 20)) {
        colorVI = intensidadColor;
      }
      if ((this.regionVI >= 20) && (this.regionVI < 40)) {
        colorVI = intensidadColor2;
      }
      if ((this.regionVI >= 60) && (this.regionVI < 60)) {
        colorVI = intensidadColor3;
      }
      if ((this.regionVI >= 80) && (this.regionVI < 80)) {
        colorVI = intensidadColor4;
      }
      if ((this.regionVI >= 100) && (this.regionVI < 100)) {
        colorVI = intensidadColor5;
      }
      if ((this.regionVI >= 120) && (this.regionVI < 120)) {
        colorVI = intensidadColor6;
      }
      if ((this.regionVI >= 140) && (this.regionVI < 140)) {
        colorVI = intensidadColor7;
      }
      if ((this.regionVI >= 160) && (this.regionVI < 160)) {
        colorVI = intensidadColor8;
      }
      if (this.regionVI >= 160) {
        colorVI = intensidadColor9;
      }
      //Region VII
      if ((this.regionVII >= 1) && (this.regionVII < 20)) {
        colorVII = intensidadColor;
      }
      if ((this.regionVII >= 20) && (this.regionVII < 40)) {
        colorVII = intensidadColor2;
      }
      if ((this.regionVII >= 60) && (this.regionVII < 60)) {
        colorVII = intensidadColor3;
      }
      if ((this.regionVII >= 80) && (this.regionVII < 80)) {
        colorVII = intensidadColor4;
      }
      if ((this.regionVII >= 100) && (this.regionVII < 100)) {
        colorVII = intensidadColor5;
      }
      if ((this.regionVII >= 120) && (this.regionVII < 120)) {
        colorVII = intensidadColor6;
      }
      if ((this.regionVII >= 140) && (this.regionVII < 140)) {
        colorVII = intensidadColor7;
      }
      if ((this.regionVII >= 160) && (this.regionVII < 160)) {
        colorVII = intensidadColor8;
      }
      if (this.regionVII >= 160) {
        colorVII = intensidadColor9;
      }

      //Region VIII
      if ((this.regionVIII >= 1) && (this.regionVIII < 20)) {
        colorVIII = intensidadColor;
      }
      if ((this.regionVIII >= 20) && (this.regionVIII < 40)) {
        colorVIII = intensidadColor2;
      }
      if ((this.regionVIII >= 60) && (this.regionVIII < 60)) {
        colorVIII = intensidadColor3;
      }
      if ((this.regionVIII >= 80) && (this.regionVIII < 80)) {
        colorVIII = intensidadColor4;
      }
      if ((this.regionVIII >= 100) && (this.regionVIII < 100)) {
        colorVIII = intensidadColor5;
      }
      if ((this.regionVIII >= 120) && (this.regionVIII < 120)) {
        colorVIII = intensidadColor6;
      }
      if ((this.regionVIII >= 140) && (this.regionVIII < 140)) {
        colorVIII = intensidadColor7;
      }
      if ((this.regionVIII >= 160) && (this.regionVIII < 160)) {
        colorVIII = intensidadColor8;
      }
      if (this.regionVIII >= 160) {
        colorVIII = intensidadColor9;
      }

      //Region IX
      if ((this.regionIX >= 1) && (this.regionIX < 20)) {
        colorIX = intensidadColor;
      }
      if ((this.regionIX >= 20) && (this.regionIX < 40)) {
        colorIX = intensidadColor2;
      }
      if ((this.regionIX >= 60) && (this.regionIX < 60)) {
        colorIX = intensidadColor3;
      }
      if ((this.regionIX >= 80) && (this.regionIX < 80)) {
        colorIX = intensidadColor4;
      }
      if ((this.regionIX >= 100) && (this.regionIX < 100)) {
        colorIX = intensidadColor5;
      }
      if ((this.regionIX >= 120) && (this.regionIX < 120)) {
        colorIX = intensidadColor6;
      }
      if ((this.regionIX >= 140) && (this.regionIX < 140)) {
        colorIX = intensidadColor7;
      }
      if ((this.regionIX >= 160) && (this.regionIX < 160)) {
        colorIX = intensidadColor8;
      }
      if (this.regionIX >= 160) {
        colorIX = intensidadColor9;
      }

      //Region X
      if ((this.regionX >= 1) && (this.regionX < 20)) {
        colorX = intensidadColor;
      }
      if ((this.regionX >= 20) && (this.regionX < 40)) {
        colorX = intensidadColor2;
      }
      if ((this.regionX >= 60) && (this.regionX < 60)) {
        colorX = intensidadColor3;
      }
      if ((this.regionX >= 80) && (this.regionX < 80)) {
        colorX = intensidadColor4;
      }
      if ((this.regionX >= 100) && (this.regionX < 100)) {
        colorX = intensidadColor5;
      }
      if ((this.regionX >= 120) && (this.regionX < 120)) {
        colorX = intensidadColor6;
      }
      if ((this.regionX >= 140) && (this.regionX < 140)) {
        colorX = intensidadColor7;
      }
      if ((this.regionX >= 160) && (this.regionX < 160)) {
        colorX = intensidadColor8;
      }
      if (this.regionX >= 160) {
        colorX = intensidadColor9;
      }

      //Region XI
      if ((this.regionXI >= 1) && (this.regionXI < 20)) {
        colorXI = intensidadColor;
      }
      if ((this.regionXI >= 20) && (this.regionXI < 40)) {
        colorXI = intensidadColor2;
      }
      if ((this.regionXI >= 60) && (this.regionXI < 60)) {
        colorXI = intensidadColor3;
      }
      if ((this.regionXI >= 80) && (this.regionXI < 80)) {
        colorXI = intensidadColor4;
      }
      if ((this.regionXI >= 100) && (this.regionXI < 100)) {
        colorXI = intensidadColor5;
      }
      if ((this.regionXI >= 120) && (this.regionXI < 120)) {
        colorXI = intensidadColor6;
      }
      if ((this.regionXI >= 140) && (this.regionXI < 140)) {
        colorXI = intensidadColor7;
      }
      if ((this.regionXI >= 160) && (this.regionXI < 160)) {
        colorXI = intensidadColor8;
      }
      if (this.regionXI >= 160) {
        colorXI = intensidadColor9;
      }

      //Region XII
      if ((this.regionXII >= 1) && (this.regionXII < 20)) {
        colorXII = intensidadColor;
      }
      if ((this.regionXII >= 20) && (this.regionXII < 40)) {
        colorXII = intensidadColor2;
      }
      if ((this.regionXII >= 60) && (this.regionXII < 60)) {
        colorXII = intensidadColor3;
      }
      if ((this.regionXII >= 80) && (this.regionXII < 80)) {
        colorXII = intensidadColor4;
      }
      if ((this.regionXII >= 100) && (this.regionXII < 100)) {
        colorXII = intensidadColor5;
      }
      if ((this.regionXII >= 120) && (this.regionXII < 120)) {
        colorXII = intensidadColor6;
      }
      if ((this.regionXII >= 140) && (this.regionXII < 140)) {
        colorXII = intensidadColor7;
      }
      if ((this.regionXII >= 160) && (this.regionXII < 160)) {
        colorXII = intensidadColor8;
      }
      if (this.regionXII >= 160) {
        colorXII = intensidadColor9;
      }

      //Metropolitana
      if ((this.regionMet >= 1) && (this.regionMet < 20)) {
        colorMet = intensidadColor;
      }
      if ((this.regionMet >= 20) && (this.regionMet < 40)) {
        colorMet = intensidadColor2;
      }
      if ((this.regionMet >= 40) && (this.regionMet < 60)) {
        colorMet = intensidadColor3;
      }
      if ((this.regionMet >= 60) && (this.regionMet < 80)) {
        colorMet = intensidadColor4;
      }
      if ((this.regionMet >= 80) && (this.regionMet < 100)) {
        colorMet = intensidadColor5;
      }
      if ((this.regionMet >= 100) && (this.regionMet < 120)) {
        colorMet = intensidadColor6;
      }
      if ((this.regionMet >= 120) && (this.regionMet < 140)) {
        colorMet = intensidadColor7;
      }
      if ((this.regionMet >= 140) && (this.regionMet < 160)) {
        colorMet = intensidadColor8;
      }
      if (this.regionMet >= 160) {
        colorMet = intensidadColor9;
      }

      //Region XIV
      if ((this.regionXIV >= 1) && (this.regionXIV < 20)) {
        colorXIV = intensidadColor;
      }
      if ((this.regionXIV >= 20) && (this.regionXIV < 40)) {
        colorXIV = intensidadColor2;
      }
      if ((this.regionXIV >= 60) && (this.regionXIV < 60)) {
        colorXIV = intensidadColor3;
      }
      if ((this.regionXIV >= 80) && (this.regionXIV < 80)) {
        colorXIV = intensidadColor4;
      }
      if ((this.regionXIV >= 100) && (this.regionXIV < 100)) {
        colorXIV = intensidadColor5;
      }
      if ((this.regionXIV >= 120) && (this.regionXIV < 120)) {
        colorXIV = intensidadColor6;
      }
      if ((this.regionXIV >= 140) && (this.regionXIV < 140)) {
        colorXIV = intensidadColor7;
      }
      if ((this.regionXIV >= 160) && (this.regionXIV < 160)) {
        colorXIV = intensidadColor8;
      }
      if (this.regionXIV >= 160) {
        colorXIV = intensidadColor9;
      }
      //Region XV
      if ((this.regionXV >= 1) && (this.regionXV < 20)) {
        colorXV = intensidadColor;
      }
      if ((this.regionXV >= 20) && (this.regionXV < 40)) {
        colorXV = intensidadColor2;
      }
      if ((this.regionXV >= 60) && (this.regionXV < 60)) {
        colorXV = intensidadColor3;
      }
      if ((this.regionXV >= 80) && (this.regionXV < 80)) {
        colorXV = intensidadColor4;
      }
      if ((this.regionXV >= 100) && (this.regionXV < 100)) {
        colorXV = intensidadColor5;
      }
      if ((this.regionXV >= 120) && (this.regionXV < 120)) {
        colorXV = intensidadColor6;
      }
      if ((this.regionXV >= 140) && (this.regionXV < 140)) {
        colorXV = intensidadColor7;
      }
      if ((this.regionXV >= 160) && (this.regionXV < 160)) {
        colorXV = intensidadColor8;
      }
      if (this.regionXV >= 160) {
        colorXV = intensidadColor9;
      }

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
        staticState: true,
        onClick: function (e) {
          //   $('#tituloModalTempHistoricaSensor').text(e.key);
          //   $('#modal-graficotemperaturahistorica').modal('show');
        },
        showToolTip: true,
        toolTipClose: ["area-mouseout"],
        areas: [
          {
            key: "Arica y Parinacota",
            toolTip: "Arica y Parinacota",
            fillColor: colorXV
          },
          {
            key: "Tarapacá",
            toolTip: "Tarapacá",
            fillColor: colorI
          },
          {
            key: "Antofagasta",
            toolTip: "Antofagasta",
            fillColor: colorII
          },
          {
            key: "Atacama",
            toolTip: "Atacama",
            fillColor: colorIII
          },
          {
            key: "Coquimbo",
            toolTip: 'Coquimbo',
            fillColor: colorIV
          },
          {
            key: "Valparaíso",
            toolTip: "Valparaíso",
            fillColor: colorV
          },
          {
            key: "Metropolitana de Santiago",
            toolTip: "Metropolitana de Santiago",
            fillColor: colorMet
          },
          {
            key: "Libertador General Bernardo O'Higgins",
            toolTip: "Libertador General Bernardo O'Higgins",
            fillColor: colorVI
          },
          {
            key: "Maule",
            toolTip: "Maule",
            fillColor: colorVII
          },
          {
            key: "Bío Bío",
            toolTip: "Bío Bío",
            fillColor: colorVIII
          },
          {
            key: "La Araucanía",
            toolTip: "La Araucanía",
            fillColor: colorIX
          },
          {
            key: "Los Ríos",
            toolTip: "Los Ríos",
            fillColor: colorXIV
          },
          {
            key: "Los Lagos",
            toolTip: "Los Lagos",
            fillColor: colorX
          },
          {
            key: "Aysén del General Carlos Ibañes del Campo",
            toolTip: "Aysén del General Carlos Ibañes del Campo",
            fillColor: colorXI
          },
          {
            key: "Magallanes y Antártica Chilena",
            toolTip: "Magallanes y Antártica Chilena",
            fillColor: colorXII
          },
        ]
      }
      );
    }
  },
  watch: {
    selected: function (newVal) {
      let url = 'http://165.227.12.119:9091/Geostatistics/genre/' + newVal;
      this.generoSelected = newVal;
      this.bandas = [];
      let cont = 0;
      this.regionI = 0;
      this.regionII = 0;
      this.regionIII = 0;
      this.regionIV = 0;
      this.regionV = 0;
      this.regionVI = 0;
      this.regionVII = 0;
      this.regionVIII = 0;
      this.regionIX = 0;
      this.regionX = 0;
      this.regionXI = 0;
      this.regionXII = 0;
      this.regionXIV = 0;
      this.regionXV = 0;
      this.regionMet = 0;
      let that = this;

      axios.get(url)
        .then(response => {
          this.geostatistics = response.data;
          this.geostatistics.forEach(function (aux) {
            if (aux.region == "XV") {
              that.regionXV++;
            }
            if (aux.region == "I") {
              that.regionI++;
            }
            if (aux.region == "II") {
              that.regionII++;
            }
            if (aux.region == "III") {
              that.regionIII++;
            }
            if (aux.region == "IV") {
              that.regionIV++;
            }
            if (aux.region == "V") {
              that.regionV++;
            }
            if (aux.region == "VI") {
              that.regionVI++;
            }
            if (aux.region == "VII") {
              that.regionVII++;
            }
            if (aux.region == "VIII") {
              that.regionVIII++;
            }
            if (aux.region == "IX") {
              that.regionIX++;
            }
            if (aux.region == "X") {
              that.regionX++;
            }
            if (aux.region == "XI") {
              that.regionXI++;
            }
            if (aux.region == "XII") {
              that.regionXII++;
            }
            if (aux.region == "XIV") {
              that.regionXIV++;
            }
            if (aux.region == "Metropolitana") {
              that.regionMet++;
            }
          });
          this.selectedBool = true;
          this.geostatistics.forEach(function (aux) {
            if ((that.bandas.indexOf(aux.name) == -1)&&(cont<=3)) {
              that.bandas.push(aux.name);
              cont++;
            }
          });
          that.crearMapa();
        });
    }
  },
  created() {
    let url = 'http://165.227.12.119:9091/genres'
    let urlGeo = 'http://165.227.12.119:9091/Geostatistics';
    axios.get(urlGeo)
      .then(response => {
        let data = response.data;
        this.info2 = "Cantidad de tweets totales analizados: " + data.length;
      });
    axios.get(url)
      .then(response => {
        this.generos = response.data;
        this.loaded = true;
        this.info1 = "Cantidad de generos analizados: " + this.generos.length;
        this.crearMapa();
      });
  },
  mounted: function () {
    this.crearMapa();

  }
} 