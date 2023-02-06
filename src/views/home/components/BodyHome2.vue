<!-- eslint-disable max-len -->
<template>
  <div class="body2">
    <OtherNavBar otherNavbar="HomePage" />
    <font-awesome-icon icon="fa-solid fa-chevron-right" />
    <OtherNavBar  otherNavbar="HomePage" />
    <font-awesome-icon icon="fa-solid fa-chevron-right" />
    <OtherNavBar class="text-black" otherNavbar="Solution" />
  </div>
  <h2>Solution - Giải Pháp</h2>
  <font-awesome-icon icon="fa-solid fa-minus" />
  <p class="text-motto">
  Phần mềm chỉ là khởi đầu cho một giải pháp. Sự khác biệt tại OneCAD chính
  là cách chúng tôi cùng quý khách hàng tìm kiếm cách thức ứng dụng công nghệ
   vào quy trình làm việc một cách hiệu quả nhất.
  </p>
</template>

<script>
import OtherNavBar from '@/components/layouts/navbar/OtherNavBar.vue';

export default {
  name: 'BodyHome2',
  components: {
    OtherNavBar,
  },
};
</script>

<style>
.body2 {
    display: flex;
    margin-left: 55px;
    color: #bebcbc;
}
.text-black {
    color: black;
}
.text-motto{
  font-size: 13px;
  max-width: 435px;
  margin: 0 auto;
  text-align: center;
}
</style>