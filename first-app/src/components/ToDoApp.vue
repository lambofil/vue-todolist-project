<template>
    <div class="mainContainer">
        <div class="container">
            <h1 class="header">Vue To Do List</h1>
            <form class=add-task @submit.prevent="addToDo()">
                <input type="text" class="task-input" placeholder="Add New Task" v-model = "newTodo" >
                <button type="submit" class="submit-task">Add</button>
            </form>
            <div class="activities">
                <button type="button" class="all-done" v-on:click="allDone()">All Done</button>
                <button type="button" class="deleteAll" @click="deleteAll()">Delete All</button>
            </div>

            <ul>
                <li v-for = 't in todos' v-bind:key = 't' >
                <input type="checkbox" v-model = "t.done">
                <span>{{t.task}}</span>
                <span class="delete-btn" @click="removeToDo(t)">Trash</span>
                </li>
           
            </ul>

        </div>

    </div>
</template>

<script>
export default{
     name: 'ToDoApp',

    data(){
        return {
            newTodo: '',
            todos: []
        }        
    },

    methods:{
        addToDo(){
            this.todos.push({
                task:this.newTodo,
                done: false
            });
            this.newTodo = ''
        },

        removeToDo(t){
            const singleTodo = this.todos.indexOf(t)
            this.todos.splice(singleTodo, 1)
        },

        deleteAll(){
            const AllTodo = this.todos
            this.todos.splice(AllTodo)
        },

        allDone(){
            this.todos.forEach(t=>{
                t.done = !t.done
            })
        }
     }

}
   
</script>

<style scoped>
.mainContainer{
    width:100%;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background: linear-gradient(blue, red) ;
}

.container{
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 480px;
  /* max-height: 100%; */
  border-radius: 25px;
  padding: 25px;
  overflow: auto;
  color: #222
}

.header{
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 12px 0;
    color: #272727;

}

.add-task {
    height: 40px;
    font-size: 14px;
    display: flex;

}

.task-input{
    width: 100%;
    padding: 0 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #272727;
    background-color: transparent;
    margin-right: 15px;
    color: #272727;
    margin-bottom: 3%;
}

ul {
    list-style: none;
    padding: 0;

}

li {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    
}

input {
    outline:none;
    margin-bottom: 3%;
}



.submit-task{
    width: 60px;
    height: 32px;
    border: none;
    background: #fff;
    color: #272727;
    border-radius: 20%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(10, 0, 0, 0.719);
}

.activities{
    display: flex;
    height: 30px;
    justify-content: space-between;
}

.all-done{
    background-color: #000;
    color:#fff;
}

.deleteAll{
    background-color: #f00;
    color:#fff;
    border: none;
    
}

.delete-btn{
    margin-left: auto;
    margin-right: 5px;
    display:block;
    width: 16px;
    height: 16px;
    cursor:pointer;
    color:red;
}


</style>