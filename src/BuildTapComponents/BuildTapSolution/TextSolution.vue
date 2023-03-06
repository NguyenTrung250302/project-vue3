<template>
  <div class="block" >
    <p :class="{ hover: hoverFx }" class="text1">{{ SolutionView }}</p>
    <p :class="{ hover: hoverFx }" class="text2">{{ SolutionView1 }}</p>
  </div>
  {{log(hoverFx)}}
</template>

<script>
export default {
name: "text-solution",
components: {
},
data() {
  return {
  }
},
props:{
  SolutionView: String,
  SolutionView1: String,
  hoverFx: Boolean,
},
 methods:{
  log(hoverFx){
      console.log('aaaa', hoverFx)
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
.hover {
  color: #FFFFFF;
}
</style>