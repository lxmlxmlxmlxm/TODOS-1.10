<template>
	<div class="blab">
		<Lab v-for='c, index in list'
               :list='c'
			   @de='del'
			   :whichShow="whichShow"
			    :defaultShow="defaultShow">
	    </Lab>
	 <a-button  v-if="list.length"  @click.prevent='deleteAll'>勾选删除</a-button>	
	</div>
</template>

<script>
     import Lab from './Lab.vue'
	 export default {
	 	 components: {
	 		Lab
	    	},
			data() {
				return {
					check: true,
					visible:true
				}
			},
		 props: {
			 'list':[],
			  whichShow: Boolean,
			 defaultShow: Boolean  
			 
		 },
		 methods: {
		 	del(id) {
		 		this.$emit('del',id);
		 	},
			deleteAll(){
				console.log(this.list);
				this.$emit('delAll',this.list);
			}
		 },
		 
	 	}
	 	
</script>

<style>
	
</style>
