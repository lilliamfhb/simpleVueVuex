<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <HeaderComp />
  <HomeComp />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComp from './components/Header.vue'
import HomeComp from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComp,
    HomeComp,
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

  .c-header {
    background: yellowgreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
  }

  .c-home {
    background: salmon;
    padding: 50px;
  }

  .c-var {
    font-size: 25px;
    margin-bottom: 50px;
  }

  .c-button {
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
  }
</style>
