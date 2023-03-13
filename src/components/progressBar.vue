<template>
  <div class="ProgressBar">
    <div class="HolderOfCirle" v-for="index in NumberOfQuestions" :key="index" :style="{ width: NumberOfQuestions + '%' }">
        <div :class="{Circle:(index > PassedQuestions)?true:false}">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['NumberOfQuestions','PassedQuestions'],
}
</script>

<style lang="scss">
    @use '@/assets/scss/inc/_progressBar.scss';
</style>