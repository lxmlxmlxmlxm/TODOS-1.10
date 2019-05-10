<template>
  <div class="footer">
   
    <a-checkbox v-show='list.length' v-model="isAllCheck"> <span>勾选全部</span> 
          <span>———————已完成{{ comSize }}</span> 
    </a-checkbox>
    <a-button  v-show='comSize' type="primary"  @click="deleteAll">清除已完成任务</a-button>
  </div>
</template>

<script>
    export default {
       props:{
         list:Array,
         selectAllTodos: Function,
       },
      computed: {
        comSize() {
          return this.list.reduce((a, list) => a + (list.che ? 1 : 0), 0)
        },
        isAllCheck: {
          get(){
            return this.comSize === this.list.length && this.comSize>0
          },
          set(value){
            this.selectAllTodos(value)
          }
        }
      },
	  methods:{
		  deleteAll(){
		  	this.$store.commit('deleteAll',this.list)
		  },
	  }
    }
</script>

<style scoped>
  .todo-footer {
        width: 800px;
        /* height: 900px; */
        margin: 0 auto;
        text-align: center;
        background-color: rgb(245, 245, 245);
        padding: 24px 0;
  }
   
  .data_status a {
        display: inline-block;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 1px 4px;
        margin: 0 2px;
    }

  .data_status a:hover {
      border-color: #bbb;
  }

  .active {
    box-shadow: 0 0 1px black;
  }
</style>