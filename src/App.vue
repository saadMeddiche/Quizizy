<template>
  <navbar/>
  <router-view/>
</template>

<script>
import navbar from './components/navbar.vue'
export default{

  components:{
    navbar
  }
}
</script>

<style lang="scss">

@use "@/assets/scss/main.scss";

*{
  font-family:cursive;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}

</style>
