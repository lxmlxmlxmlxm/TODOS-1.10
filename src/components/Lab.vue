<template>
	<div class="lab">
	 <a-checkbox v-model="list.che" class='com-xz' v-show="this.defaultShow || (this.whichShow?list.che:!list.che)" >
	<label class="content_main" @dblclick="toEdit('show')"  v-if="visible" >
          {{list.newTodo}}
        </label>
        <a-input  
        v-model="list.newTodo" 
        style="width:400px"  @blur="toEdit('hide')"  v-else>
        </a-input>
	<a href @click.prevent='deleteMe' class='com-delete'>删除</a>
	</a-checkbox>
</div>
 
</template>
	
<script>
	export default {
  props: {
		   list:[],
		  whichShow: Boolean,
		defaultShow: Boolean  
	},
  data() {
  	return {
  		checked: [],
		visible:true
  	}
  },
  methods: {
    toEdit(value) {
                this.visible = !(value === 'show') 
    		    },
	deleteMe(){
				this.$emit('de',this.list.id);
	   }
  },
	

}
</script>

<style>
</style>
