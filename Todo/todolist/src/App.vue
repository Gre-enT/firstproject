<template>

  <div id="app"> 

    <TodoHeader></TodoHeader>
    
    <TodoInput v-on:addTodo="addTodo"></TodoInput>

    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>

    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>

  </div>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',

  data() {
    return {
      todoItems: [

      ]
    }
  },

  methods: {
    addTodo: function(todoItem){
      localStorage.setItem("keyName", todoItem)
      this.todoItems.push(todoItem);
      console.log(this.todoItems);
    },
    removeTodo: function(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    clearAll: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },

  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>

  body {

    text-align: center;

    background-color: #F6F6F8;

  }

  input {

    border-style: groove;

    width: 200px;

  }

  button {

    border-style: groove;

  }

  .shadow {

    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)

  }

</style>