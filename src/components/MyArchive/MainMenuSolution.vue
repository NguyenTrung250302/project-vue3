<template>
  <div class="main-menu-solution">
    <!-- row1 -->
    <div class="block-menu">
      <div class="block-inform color">
        <build-tap-icon-2 style="background: wheat;"/>
        <div class="block">
          <build-tap-text buildtaptext="Facility Management" style="color: #fff;"/>
          <build-tap-text-1
          buildtaptext1="Lĩnh vực quản lý - bảo trì - vận hành tài sản" style="color: #fff;"/>
            <build-tap-logo-blur />
        </div>
      </div>
            <div class="block-inform">
        <build-tap-icon-1 />
        <div class="block">
          <build-tap-text buildtaptext="Viewer"/>
          <build-tap-text-1 
          buildtaptext1="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
          trình duyệt online và share trong 7 ngày"/>
          <build-tap-logo-blur />
        </div>
      </div>
          <div class="block-inform">
        <build-tap-icon-2 />
        <div class="block">
          <build-tap-text buildtaptext="Docs"/>
          <build-tap-text-1 
          buildtaptext1="Hệ thống Data Management"/>
          <build-tap-logo-blur />
        </div>
      </div>
    </div>
       <!-- row2 -->
    <div class="block-menu">
      <div class="block-inform">
        <build-tap-icon-3 />
        <div class="block">
          <build-tap-text buildtaptext="Camera AI" />
          <build-tap-text-1
          buildtaptext1="Hệ thống giám sát có AI hỗ trợ"/>
        <build-tap-logo-blur />
        </div>
      </div>
            <div class="block-inform">
        <build-tap-icon-4 />
        <div class="block">
          <build-tap-text buildtaptext="Design Automation"/>
          <build-tap-text-1 
          buildtaptext1="Hệ thống thiết kế tự động"/>
          <build-tap-logo-blur />
        </div>
      </div>
          <div class="block-inform">
        <build-tap-icon-5 />
        <div class="block">
          <build-tap-text buildtaptext="Online Meeting"/>
          <build-tap-text-1 
          buildtaptext1="Hệ thống họp online"/>
          <build-tap-logo-blur />
        </div>
      </div>
    </div>
    <!-- row3 -->
        <div class="block-menu">
      <div class="block-inform">
        <build-tap-icon-6 />
        <div class="block">
          <build-tap-text buildtaptext="Addin" />
          <build-tap-text-1
          buildtaptext1="Cầu nối giúp các lập trình viên chuyển addin
          của họ đang chạy local thành chạy cloud"/>
        <build-tap-logo-blur />
        </div>
      </div>
    </div>
    <!--  -->
    <div>
      <contact-info />
    </div>
  </div>
</template>

<script>
import BuildTapText from '@/components/MyArchive/myinsert/BuildTapText.vue';
import BuildTapText1 from '@/components/MyArchive/myinsert/BuildTapText1.vue';
import BuildTapIcon1 from '@/components/MyArchive/myicons/BuildTapIcon1.vue';
import BuildTapLogoBlur from '@/components/MyArchive/myicons/BuildTapLogoBlur.vue';
import BuildTapIcon2 from './myicons/BuildTapIcon2.vue';
import BuildTapIcon3 from './myicons/BuildTapIcon3.vue';
import BuildTapIcon4 from './myicons/BuildTapIcon4.vue';
import BuildTapIcon5 from './myicons/BuildTapIcon5.vue';
import BuildTapIcon6 from './myicons/BuildTapIcon6.vue';
import ContactInfo from '@/components/MyArchive/ContactInfo.vue';

export default {
components: {
BuildTapText,
BuildTapText1,
BuildTapIcon1,
BuildTapLogoBlur,
BuildTapIcon2,
BuildTapIcon3,
BuildTapIcon4,
BuildTapIcon5,
BuildTapIcon6,
ContactInfo,

},
};
</script>

<style scoped>
.main-menu-solution {
  padding: 50px 0 0 0;
    width: auto;
    height: 1000px;
    /* background-color: #fff; */
}
.block-inform {
    width: 284px;
    height: 238px;
    padding: 20px 20px 20px 20px;
    border-radius: 12px;
    box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.05);
}
.block-menu {
  display: flex;
  justify-content: space-between;
  padding: 30px 170px;
}
.block {
  padding-top: 80px;
}
.color {
  background: linear-gradient(rgba(0, 111, 237, 1),rgb(37 99 235));
}
</style>