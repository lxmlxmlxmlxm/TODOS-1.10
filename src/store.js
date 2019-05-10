import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        todos: []    
    },
    mutations:{
         //添加
      addTodo(state,list){
        state.todos.unshift(list)
      },
     //删除全部勾选
     deleteAll(state,list){
     	state.todos=list;
     	state.todos = state.todos.filter((c) => c.che == false);
     },
     //全选/全不选
     selectAllTodos(state,check){
       state.todos.forEach(todo => todo.che = check)
     },
       //删除
       deleteTodo(state,id){
				 state.todos = state.todos.filter((c) => c.id != id);
      }
    }
})
