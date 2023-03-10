<template>
  <h1>This is the Results page</h1>
    <router-link :to="{name : 'HomeView'}">Restart</router-link> 
  <div class="results" v-for="Part in filteredParts" :key="Part">
    <div class="question">
        <h3>{{ Part.question }}</h3>
    </div>
    <div class="answer">
        <p>{{ Part.answers.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      FalseAnswers:[],
      Parts:[]
    }
  },
  mounted(){
    this.FalseAnswers = this.$store.state.Results.slice();
    this.Fetchparts();
  },
  methods:{
    Fetchparts(){
      fetch('http://localhost:3000/Parts')
        .then(res => res.json())
        .then(data => this.Parts = data);
    }
  },
  computed:{
    filteredParts(){
      return this.Parts.filter((Part) => !this.FalseAnswers.includes(Part.answers.correct))
    }
  }
 
  
}
</script>

<style>

</style>