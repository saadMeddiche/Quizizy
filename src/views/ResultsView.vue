<template>

  <div class="Results">
    <div class="Info">

      <div class="Score">
        <p>You have {{ Parts.length - FalseAnswers.length }}/{{ Parts.length }} Correct Answers</p>
      </div>

      <div class="BodyOfDescription">
        <p>👇 👇 This is the correction of the false answers👇 👇 </p>
      </div>

    </div>

    <div class="Result" v-for="Part in filteredParts" :key="Part">
      <div class="question">
          <h3>{{ Part.question }}</h3>
      </div>
      <div class="answer">
          <p v-html="Part.answers.comment"></p>
      </div>
    </div>

    <router-link class="Restart_Button" :to="{name : 'HomeView'}">Restart</router-link> 

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
      console.log(this.FalseAnswers)
      return this.Parts.filter((Part) => this.FalseAnswers.includes(Part.id))
    }
  }
 
  
}
</script>

<style lang="scss">
  @use "@/assets/scss/views/_results.scss";
</style>