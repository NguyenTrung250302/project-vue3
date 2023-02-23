<template>
  <div>
    <p class="text1">{{ SolutionView.text1 }}</p>
    <p class="text2">{{ SolutionView.text2 }}</p>
  </div>
</template>

<script>
export default {
name: "solution-view",
props: {
    SolutionView: {
        type: Object,
    }
}
}
</script>

<style>
.text1 {
width: auto;
height: 29px;
font-weight: 800;
font-size: 22.7143px;
line-height: 29px;
color: #121212;
}
.text2 {
width: 241px;
height: 36px;
font-weight: 400;
font-size: 11.3571px;
line-height: 18px;
color: #6B6B6B;
}
</style>