<template>
  <div class="home">
  	<div id='root'>
    <Blab v-if="true" :list='todos' :stut='stut'  @del='dele' @delAll='deleteAll' :whichShow="whichShow" :defaultShow="defaultShow" ></Blab>
		</div>
	</div>
</template>

<script>
import Blab from '../components/Blab.vue'
export default {
	 components: {
	   Blab
   	  } ,
	  data() {
	  	return {
	    whichShow: true,
	    defaultShow: false
	  	}
	  },
		methods:{
				dele(id){
					 //删除
					this.$store.commit('deleteTodo',id)
				},
				deleteAll(list){
						this.$store.commit('deleteAll',list)
				},
			},
			   computed:{
			  todos (){
			    return this.$store.state.todos
			  }
			},
		 el: '#root'
		}
	
	
 </script>

