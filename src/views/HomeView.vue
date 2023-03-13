<template>
  <div class="home">
    <router-link :to="{name : 'InformationView'}">Start</router-link> 
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss">

  @use "@/assets/scss/views/_home.scss";

</style>