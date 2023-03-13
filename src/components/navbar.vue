<template>

  <div class="nav">

    <div class="logo">
      <p>QuiZiZy</p>
    </div>

    <input type="checkbox" class="menu-btn" id="menu-btn" hidden>
    <label for="menu-btn">
        <iconify-icon icon="ic:round-menu" class="menu-icon" style="color: #5b1647;" width="60" height="60"></iconify-icon>
    </label>

    <div class="links">
      <li v-for="Link in Links" :key="Link" class="Link" :class="{active:Link.isActive}">
        <a>{{ Link.name }}</a>
      </li>
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
  
</style>