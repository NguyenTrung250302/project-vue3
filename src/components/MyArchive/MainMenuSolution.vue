<template>
  <div class="main-menu-solution">
    <div class="block-solution">
      <build-tap-icon class="icon"/>
      <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution1"/>
    </div>
    <!--  -->
    <div>
      <!-- <contact-info /> -->
    </div>
  </div>
</template>

<script>
// import ContactInfo from "@/components/MyArchive/ContactInfo.vue";
import ListMenuSolution from './menusolution/ListMenuSolution.vue';
import BuildTapIcon from '@/components/MyArchive/myicons/BuildTapIcon.vue';

export default {
  components: {
    // ContactInfo,
    ListMenuSolution,
    BuildTapIcon,

  },

  data() {
    return {
      ListMenuSolution1: [
        {text1: 'Facility Management', text2: 'Lĩnh vực quản lý - bảo trì - vận hành tài sản'},
      ]
    }
  }
};
</script>

<style scoped>
.main-menu-solution {
  width: 1360px;
  height: 600px;
  background-color: antiquewhite;
}
.block-solution {
  width: 300px;
  height: 230px;
  border-radius: 11.36px;
  border: solid 1px slategray;
  padding: 20px 20px ;
}
.icon {
  padding-bottom: 80px;
}
</style>