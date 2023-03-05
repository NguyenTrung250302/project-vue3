<template>
    <div class="block-solution"
    @mouseenter="hoverOn()"
    @mouseleave="hoverOut()"
    >
      <build-tap-icon-6 :hoverIc="color"/>
      <div class="box-text">
      <solution-view :hoverFx="isHovering"
      class="text-block"
      SolutionView="Addin"
      SolutionView1="Cầu nối giúp các lập trình viên chuyển addin
      của họ đang chạy local thành chạy cloud"
      />
      </div>
      <build-tap-logo-blur :hoverBlur="colorLogoBlur" class="logo-blur"/>
    </div>
</template>

<script>
import BuildTapIcon6 from '../myicons/BuildTapIcon6.vue';
import BuildTapLogoBlur from '../myicons/BuildTapLogoBlur.vue';
import SolutionView from './SolutionView.vue';


export default {
  components: {
    SolutionView,
    BuildTapLogoBlur,
    BuildTapIcon6,

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