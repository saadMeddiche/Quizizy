<template>
  <div class="questions">
    <router-link v-if="SeeResults" :to="{name : 'ResultsView'}">See Results</router-link> 
    <div v-if="!SeeResults" class="Next_Button">
      <button @click="NextPart">Next</button>
    </div>
    <div v-if="Parts && Part">

      <div class="Part">
        <div class="Question">
          <h3>{{Part.question}}</h3>
        </div>
        <div class="Options">
          <p v-for="option in Part.options" :key="option">
            {{ option.content }}
          </p>
        </div>
      </div>

    </div>

    <div v-else>
      <h2>Loading Questions...</h2>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      Parts:[],
      Part:[],
      currentIndex:0,
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

        var x = Math.floor(Math.random() * (i + 1))

        ;

        [Parts[i], Parts[x]] = [Parts[x], Parts[i]]

      }

    },
    NextPart(){
      this.currentIndex++
      this.SetPart()

      if(this.currentIndex == this.Parts.length - 1) this.SeeResults = true
    }
  }
}
</script>

<style>
  .questions a{
    text-decoration: none;
    appearance: auto;
    writing-mode: horizontal-tb !important;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
    border-radius: 2px;
    border: 1px solid grey;
  }
</style>