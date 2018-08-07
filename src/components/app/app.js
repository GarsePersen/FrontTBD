import Navbar from '../navbar/navbar.vue'
import Sidebar from '../sidebar/sidebar.vue'

export default {
  data(){
    return{
    }
  },
  title:'iniciador',
  components: {
        Navbar,
        Sidebar
  },
  watch: {
    $route: function() {
      console.log(this.$route)
    }
  }
}
