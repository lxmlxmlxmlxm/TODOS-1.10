<template>
  <div id="app">
		<Com @listfc="fc"  ></Com> 
			<router-view/>  
			 <div  v-if="list.length"  id="nav">
							<a></a>
		  <router-link  :to="{name:'all'}">all</router-link> |
		  <router-link to="/Active">完成</router-link> |
			<router-link to="/Completed">未完成</router-link>
			<Foot :list="list"   :selectAllTodos="selectAllTodos"  ></Foot> 
		</div>
  </div>
</template>

 <script>
import Com from './components/Com.vue'
import Foot from './components/Foot.vue'
export default {
	components: {
			Com,Foot
		},
			methods:{
			  fc(todo) {
					console.log("发射数据："+todo.id);
					this.$store.commit('addTodo', todo);
				},
				   selectAllTodos(check){
				    this.$store.commit('selectAllTodos',check)
				  },
				},
		   computed:{
		  list (){
		    return this.$store.state.todos
		  }
		}
		
	}
	
</script> 
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
