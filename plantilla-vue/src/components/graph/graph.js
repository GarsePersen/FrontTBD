import BarGraph from '../graficoBarra/BarGraph.vue'
export default{
    data(){
      return{
        title:'Index'
      }
    },
    components: {
      BarGraph
    },
    mounted:function(){
      console.log('Index.vue')
    }
  }