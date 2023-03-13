<template>
  <div class="HolderOfHelp">
    
    <div class="informations">

      <div class="Description">
        <h2>This instruction will give you a hint how the test goes</h2>
      </div>

      <div class="instruction">
        <p><b>[</b> If You didn't answer the question in 30s , it will consider as a fault answer <b>]</b></p>
        <br>
        <p><b>[</b> You Can't skip the question , until you choose one or the time end.<b>]</b></p>
        <br>
        <p><b>[</b> You will see your results only if you finished all the questions.<b>]</b></p>
        <br>
        <p><b>[</b> You will notice some circles in the top when you are passing the test. <br>Those Circles indicate how much question left.<b>]</b></p>
        <br>
        <p><b>[ Hint :</b>The Restart Button will delete your results . <br> If you want to keep it ! Then send it to your email<b>]</b></p>
        <br>
        <p><b>[ Warning :</b>Please do not open inspect or go to another page while passing the test. <br> It Will consider as cheating<b>]</b></p>
      </div>

      <router-link :to="{name : 'QuestionsView'}">Go</router-link> 

    </div>
  </div>
 
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @use "@/assets/scss/views/_help.scss";

</style>