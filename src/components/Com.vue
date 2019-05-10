<template>
	<div class="com">
		<div class="components-input-demo-size">
			<a-input  placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo"  />
		</div>
	</div>	
</template>

<script>
	
	export default {
			data() {
				return{ 
					 newTodo:'',
				}
		},
		methods:{
			addTodo(){
				if(this.newTodo!=''){
				 this.$emit('listfc', {
					 id: +new Date(),
					 che:false,
				     newTodo:this.newTodo,
				   });
				  
				}
				this.newTodo="";
			},
	
		}	
		}
</script>

<style>
	.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
