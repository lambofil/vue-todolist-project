<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{title}}</h1>
    <h3>You are welcome {{person}}</h3>
    <button @click="dosomething() ">Message Alert</button>
  <TestedComponent/>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestedComponent from './components/TestedComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestedComponent
  }, 

  data(){
    return{
      title: 'Hello vue ooo',
      person: 'Akintayo',
    }
  },

  methods: {
      dosomething(){
      alert("See something")
      console.log("something")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color:red;
}

</style>
