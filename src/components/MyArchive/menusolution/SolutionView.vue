<template>
  <div>
    <p class="text1">{{ SolutionView }}</p>
    <p class="text2">{{ SolutionView1 }}</p>
    <build-tap-logo-blur />
  </div>
</template>

<script>
import BuildTapLogoBlur from '../myicons/BuildTapLogoBlur.vue';
export default {
name: "solution-view",
components: {
  BuildTapLogoBlur
},
props: ['SolutionView','SolutionView1']
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