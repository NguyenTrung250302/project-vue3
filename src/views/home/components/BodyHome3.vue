<template>
  <div class="body3">
    <div class="row">
      <div class="boards boards-row1">
        <div>
          <field-view  titleField="Facility Management"/>
          <describe-view describe="Lĩnh vực quản lý - bảo trì - vận hành tài sản"/>
        </div>
      </div>
      <div class="boards">
        <field-view  titleField="Viewer"/>
        <describe-view describe=
        "Cho phép xem một bản vẽ 3D, 2D bất kì bằng
        trình duyệt online và share trong 7 ngày"/>
      </div>
      <div class="boards">
        <field-view  titleField="Docs"/>
        <describe-view describe="Hệ thống Data Management"/>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import FieldView from '@/views/about/FieldView.vue';
import DescribeView from '@/views/about/DescribeView.vue';

export default {
  name: 'HomeBody3',
  components: {
    FieldView,
    DescribeView,
  },
};
</script>

<style>
.body3 {
  margin-top: 40px;
  max-width: auto;
  max-height: auto;
  background-color: #fff;
}
.boards {
  width: 280px;
  height: 230px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgb(235, 228, 217);
  flex-direction: column;
  justify-content: space-around;
}
.row {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
}
.boards-row1 {
  background-color: #006FED;
  color: #fff;
}
</style>

<!-- HTML !-->
<button class="button-21" role="button">Button 21</button>