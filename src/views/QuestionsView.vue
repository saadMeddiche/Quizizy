<template>
  <div class="questions">
    
    <!-- Parts -->
    <div v-if="Parts && Part">

      <!-- Part -->
      <div class="Part">

        <!-- Question -->
        <div class="Question">
          <h3>{{Part.question}}</h3>
        </div>

        <!-- Options -->
        <div class="Options" id="options">
          <p v-for="option in Part.options" class="Option" :key="option" :id="option.id" @click="SelectedOption(option.id)">
            {{ option.content }}
          </p>
        </div>

      </div>

    </div>
    <!-- Wait For the Parts To Load -->
    <div v-else class="LoadingParts">
      <h2>Loading Questions...</h2>
    </div>

    

  </div>

  <!-- ===============Buttons=============== -->
  <div class="TestButtons">
    <!-- Result Button -->
    <router-link v-if="SeeResults && selectedOption" class="Result_Button" :to="{name : 'ResultsView'}" @click="Correction();passResults()">See Results</router-link> 
    <!-- Next Button -->
    <div v-if="!SeeResults && selectedOption" class="Next_Button">
      <button @click="NextPart">Next</button>
    </div>
  </div>
  <!-- ===============End Buttons=============== -->
</template>

<script>
export default {
  data(){
    return {
      Parts:[],
      Part:[],
      Results:[],
      currentIndex:0,
      selectedOption:null,
      SeeResults:false
    }
  }
  ,
  mounted(){
    this.Fetchparts()
  }
  ,
  methods:{
    Fetchparts(){
      fetch('http://localhost:3000/Parts')
        .then(res => res.json())
        .then(data => this.Parts = data)  
        .then(s => this.RandomizeParts())
        .then(e => this.SetPart())  
    },
    SetPart(){
      this.Part = this.Parts[this.currentIndex]
    },
    RandomizeParts(){
      var Parts = this.Parts

      for (var i = Parts.length - 1; i > 0; i--) {

        var x = Math.floor(Math.random() * (i + 1));
        [Parts[i], Parts[x]] = [Parts[x], Parts[i]];

      }

    },
    NextPart(){
      this.Correction()

      this.currentIndex++
      this.SetPart()
      if(this.currentIndex == this.Parts.length - 1) this.SeeResults = true

    },
    Correction(){
      
      if( this.Part.answers.correct != this.selectedOption){
        this.Results.push(this.Part.id)
      }

      this.selectedOption = null

    },
    SelectedOption(Id){
      //Change the style 
      for(var i = 0 ; i < this.Part.options.length; i++){
        document.getElementById(this.Part.options[i].id).style.color = 'white'
      }
      document.getElementById(Id).style.color='red'
      
      // =============================
      //The Last Select option
      this.selectedOption = Id
    },
    passResults(){
      this.$store.commit("PassResults", this.Results);
    }
  }
}
</script>

<style lang="scss">

  @use "@/assets/scss/views/_test.scss";

</style>