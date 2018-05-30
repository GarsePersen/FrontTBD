import Sidebar from '../sidebar/sidebar.vue'
import BarGraph from '../graficoBarra/BarGraph.vue'

export default{
    data(){
      return{
        title:'Graph'
      }
    },
    components: {
      BarGraph,
      Sidebar
   
    },
    mounted:function(){
      console.log('graph.vue')
    }
  }