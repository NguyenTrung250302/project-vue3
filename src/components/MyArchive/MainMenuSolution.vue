<template>
  <div class="main-menu-solution">
    <!-- row1 -->
    <div class="row">
      <div class="block-solution">
        <build-tap-icon class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution1" />
      </div>
      <div class="block-solution">
        <build-tap-icon-1 class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution2" />
      </div>
      <div class="block-solution">
        <build-tap-icon-2 class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution3" />
      </div>
    </div>
    <!-- row2 -->
    <div class="row">
      <div class="block-solution">
        <build-tap-icon-3 class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution4" />
      </div>
      <div class="block-solution">
        <build-tap-icon-4 class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution5" />
      </div>
      <div class="block-solution">
        <build-tap-icon-5 class="icon" />
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution6" />
      </div>
    </div>
    <!-- row3 -->
    <div class="row row-end">
      <div class="block-solution">
        <build-tap-icon-6 class="icon"/>
        <list-menu-solution v-bind:ListMenuSolution="ListMenuSolution7" />
      </div>
    </div>
    <!--  -->
    <div>
      <!-- <contact-info /> -->
    </div>
  </div>
</template>

<script>
import ListMenuSolution from "./menusolution/ListMenuSolution.vue";
import BuildTapIcon from "@/components/MyArchive/myicons/BuildTapIcon.vue";
import BuildTapIcon1 from "./myicons/BuildTapIcon1.vue";
import BuildTapIcon2 from "./myicons/BuildTapIcon2.vue";
import BuildTapIcon3 from "./myicons/BuildTapIcon3.vue";
import BuildTapIcon4 from "./myicons/BuildTapIcon4.vue";
import BuildTapIcon5 from "./myicons/BuildTapIcon5.vue";
import BuildTapIcon6 from "@/components/MyArchive/myicons/BuildTapIcon6.vue";

export default {
  components: {
    ListMenuSolution,
    BuildTapIcon,
    BuildTapIcon1,
    BuildTapIcon2,
    BuildTapIcon3,
    BuildTapIcon4,
    BuildTapIcon5,
    BuildTapIcon6,
  },

  data() {
    return {
      ListMenuSolution1: [
        {
          text1: "Facility Management",
          text2: "Lĩnh vực quản lý - bảo trì - vận hành tài sản",
        },
      ],
      ListMenuSolution2: [
        {
          text1: "Viewer",
          text2:
            "Cho phép xem một bản vẽ 3D, 2D bất kì bằng trình duyệt online và share trong 7 ngày",
        },
      ],
      ListMenuSolution3: [{ text1: "Docs", text2: "Hệ thống Data Management" }],
      ListMenuSolution4: [
        { text1: "Camera AI", text2: "Hệ thống giám sát có AI hỗ trợ" },
      ],
      ListMenuSolution5: [
        { text1: "Design Automation", text2: "Hệ thống thiết kế tự động" },
      ],
      ListMenuSolution6: [
        { text1: "Online Meeting", text2: "Hệ thống họp online" },
      ],
      ListMenuSolution7: [
        {
          text1: "Addin",
          text2:
            "Cầu nối giúp các lập trình viên chuyển addincủa họ đang chạy local thành chạy cloud",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-menu-solution {
  margin-top: 60px;
  width: 1360px;
  height: 900px;
}
.block-solution {
  width: 300px;
  height: 230px;
  border-radius: 11.36px;
  border: none;
  box-shadow: 5px 5px 5px 5px rgb(247, 245, 245);
  padding: 20px 20px;
  flex-direction: column;
  justify-content: space-around;
}
.icon {
  margin-bottom: 70px;
}
.row {
  display: flex;
  padding: 30px 130px;
  justify-content: space-around;
}
.row-end {

}
</style>