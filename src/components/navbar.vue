<template>

  <div class="nav">

    <div class="logo">
      <p>QuiZiZy</p>
    </div>

    <div class="links">
      <a v-for="Link in Links" :key="Link" :class="{active:Link.isActive}">
        {{ Link.name }}
      </a>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      Links:{
      'HomeView' : {name:'Home', isActive:false},
      'InformationView':{name:'Help', isActive:false},
      'QuestionsView':{name:'Test', isActive:false},
      'ResultsView':{name:'Results', isActive:false}
      }
    }
  }
  ,
  methods:{
    stepper(Id){
      Object.values(this.Links).forEach(this.Desactivate);
      this.Links[Id].isActive = true
    }
    ,
    Desactivate(obj){
      obj.isActive = false
    }
  }
  ,
  watch:{
    $route(){
      this.stepper(this.$route.name)
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  background: #ffc400;
  padding: 10px;

  height: fit-content;
}

.logo{
  font-size: 30px;
  color:#5b1647;

  display: flex;
  align-items: center;
}

.logo p{
  margin: 0;
  font-weight: bold;
}

.links{
  display: flex;
  align-items: center;

  gap: 40px;

  font-size: 30px;
  font-weight: bold;

  height: fit-content;

  
}

.nav a{
text-decoration: none;
color:#5b1647;
}

.nav a.active {
  color: #ffc400;
  background-color:#5b1647 ;
  padding: 4px;
  border-radius:5px ;
}
</style>