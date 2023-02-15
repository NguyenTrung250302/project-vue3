<template>
  <div class="body3">
    <div class="row">
      <div class="boards boards-row1">
        <font-awesome-icon icon="fa-solid fa-list-check" class="icons-body3" />
        <field-view titleField="Facility Management" />
        <describe-view
          class="blur-1"
          describe="Lĩnh vực quản lý - bảo trì - vận hành tài sản" />
      </div>
      <div class="boards">
        <font-awesome-icon icon="fa-solid fa-eye" class="icons-body3" />
        <field-view titleField="Viewer" />
        <describe-view
          describe="Cho phép xem một bản vẽ 3D, 2D bất kì bằng
        trình duyệt online và share trong 7 ngày" />
      </div>
      <div class="boards">
        <font-awesome-icon
          icon="fa-solid fa-file-circle-plus"
          class="icons-body3" />
        <field-view titleField="Docs" />
        <describe-view describe="Hệ thống Data Management" />
      </div>
    </div>

    <div class="row">
      <div class="boards">
        <font-awesome-icon icon="fa-solid fa-brain" class="icons-body3" />
        <field-view titleField="Camera AI" />
        <describe-view describe="Hệ thống giám sát có AI hỗ trợ" />
      </div>
      <div class="boards">
        <font-awesome-icon icon="fa-solid fa-hammer" class="icons-body3" />
        <field-view titleField="Design Automation" />
        <describe-view describe="Hệ thống thiết kế tự động" />
      </div>
      <div class="boards">
        <font-awesome-icon icon="fa-solid fa-globe" class="icons-body3" />
        <field-view titleField="Online Meeting" />
        <describe-view describe="Hệ thống họp online" />
      </div>
    </div>
    <div class="boards boards-final">
      <font-awesome-icon icon="fa-solid fa-code" class="icons-body3" />
      <field-view titleField="Addin" />
      <describe-view
        describe="Cầu nối giúp các lập trình viên chuyển addin
      của họ đang chạy local thành chạy cloud" />
    </div>
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
  margin-bottom: 100px;
  max-width: auto;
  max-height: auto;
  background-color: #fff;
}
.boards {
  width: 290px;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgb(231, 225, 216);
  /* flex-direction: column; */
  /* justify-content: space-between; */
  text-align: justify;
}
.row {
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  max-width: 1200px;
}
.boards-row1 {
  background-color: #006fed;
  color: #fdfdfd;
}
.blur-1 {
  color: #fff;
}
.boards-final {
  margin-left: 120px;
  margin-top: 40px;
}
.icons-body3 {
  margin: 20px 0 120px 20px;
  font-size: 40px;
}
</style>
