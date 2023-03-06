<template>
    <div class="block-solution"
    @mouseenter="hoverOn()"
    @mouseleave="hoverOut()"
    >
      <build-tap-icon-3 :hoverIc="color"/>
      <div class="box-text">
      <text-solution :hoverFx="isHovering"
      class="text-block"
      SolutionView="Camera AI"
      SolutionView1="Hệ thống giám sát có AI hỗ trợ"
      />
      </div>
      <build-tap-logo-blur :hoverBlur="colorLogoBlur" class="logo-blur"/>
    </div>
</template>

<script>
import BuildTapIcon3 from  "@/components/MyArchive/myicons/BuildTapIcon3.vue";
import BuildTapLogoBlur from "@/components/MyArchive/myicons/BuildTapLogoBlur.vue";
import TextSolution from './TextSolution.vue';


export default {
  components: {
    
    BuildTapLogoBlur,
    BuildTapIcon3,
    TextSolution,

  },
  data() {
    return {  
      isHovering: false,
      color: '#4193F0',
      colorLogoBlur :'#006FED'
    };
  },
  methods: {
    hoverOn() {
      this.color = 'white'
      this.isHovering = true
      this.colorLogoBlur = '#ffffff'
    },
    hoverOut() {
      this.color = '#4193F0'
      this.isHovering = false
      this.colorLogoBlur = '#006FED'
    }
  }
};
</script>

<style scoped>
.block-solution {
  width: 300px;
  height: 230px;
  position: relative;
  box-shadow: 5px 5px 5px 5px rgb(221, 220, 220);
  border-radius: 10px;
  padding: 20px 20px;
}
.block-solution:hover {
  background-color: #006FED;
}
.box-text {
 position:absolute;
 bottom: 0;
}
.logo-blur {
position: absolute;
right: 0;
bottom: 0;
opacity: 0.1;
} 
</style>