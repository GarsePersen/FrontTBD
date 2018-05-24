import BarGraph from '../graficoBarra/barGraph.vue'
export default{
    data(){
      return{
        title:'Graph'
      }
    },
    components: {
      BarGraph
    },
    mounted:function(){
      console.log('graph.vue')
    }
  }