<template>
  <div class="main-menu-solution">
    <!-- row1 -->
    <div class="row">
      <div class="block-solution">
        <build-tap-icon />
        <solution-view
          class="text-item"
          SolutionView="Facility Management"
          SolutionView1="Lĩnh vực quản lý - bảo trì - vận hành tài sản"
        />
      </div>
      <div class="block-solution">
        <build-tap-icon-1 />
        <solution-view
          class="text-item"
          SolutionView="Viewer"
          SolutionView1="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
        trình duyệt online và share trong 7 ngày"
        />
      </div>
      <div class="block-solution">
        <build-tap-icon-2 />
        <solution-view
          class="text-item"
          SolutionView="Facility Management"
          SolutionView1="Lĩnh vực quản lý - bảo trì - vận hành tài sản"
        />
      </div>
    </div>
    <!-- row2 -->
    <div class="row">
      <div class="block-solution">
        <build-tap-icon-3 />
        <solution-view
          class="text-item"
          SolutionView="Camera AI"
          SolutionView1="Hệ thống giám sát có AI hỗ trợ"
        />
      </div>
      <div class="block-solution">
        <build-tap-icon-4 />
        <solution-view
          class="text-item"
          SolutionView="Design Automation"
          SolutionView1="Hệ thống thiết kế tự động"
        />
      </div>
      <div class="block-solution">
        <build-tap-icon-5 />
        <solution-view
          class="text-item"
          SolutionView="Online Meeting"
          SolutionView1="Hệ thống họp online"
        />
      </div>
    </div>
    <!-- row3 -->
    <div class="row">
      <div class="block-solution">
        <build-tap-icon-6 />
        <solution-view
          class="text-item"
          SolutionView="Addin"
          SolutionView1="Cầu nối giúp các lập trình viên chuyển addin
của họ đang chạy local thành chạy cloud"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuildTapIcon from "../myicons/BuildTapIcon.vue";
import BuildTapIcon1 from "../myicons/BuildTapIcon1.vue";
import BuildTapIcon2 from "../myicons/BuildTapIcon2.vue";
import BuildTapIcon3 from "../myicons/BuildTapIcon3.vue";
import BuildTapIcon4 from "../myicons/BuildTapIcon4.vue";
import BuildTapIcon5 from "../myicons/BuildTapIcon5.vue";
import BuildTapIcon6 from "../myicons/BuildTapIcon6.vue";
import SolutionView from "./SolutionView.vue";

export default {
  components: {
    SolutionView,
    BuildTapIcon,
    BuildTapIcon1,
    BuildTapIcon2,
    BuildTapIcon3,
    BuildTapIcon4,
    BuildTapIcon5,
    BuildTapIcon6,
  },
};
</script>

<style scoped>
.main-menu-solution {
  margin-top: 40px;
  width: 1336px;
  /* height: 900px; */
}
.block-solution {
  width: 300px;
  height: 230px;
  border-radius: 11.36px;
  border: none;
  box-shadow: 5px 5px 5px 5px rgb(253, 246, 246);
  padding: 20px 20px;
}
.block-solution:hover {
  background-color: rgba(0, 111, 237, 1);
  cursor: pointer;
}
.text-item {
  margin-top: 65px;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 30px 160px;
}
</style>