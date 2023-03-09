<template>
  <div class="home">
    <h1>This is the Home page</h1>
    <router-link :to="{name : 'InformationView'}">Start</router-link> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
