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

.home{
  background-image: url(../assets/bg-home.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-color: red;

  height:100%;


  display: flex;
  justify-content: center;
  align-items: end;



  a{
    text-decoration: none;
    color: var(--Yellow);

    border:2px solid var(--Yellow);
    border-radius: 10px;

    margin-bottom: 5%;
    padding: 5px;

    width: 50%;
  }

}


</style>