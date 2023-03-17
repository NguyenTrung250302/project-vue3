<template>
  <div class="brand-introduction">
    <h1>Nhà cung cấp phần mềm Autodesk hàng đầu Việt Nam</h1>
    <ul class="line-1">
      Với sứ mệnh cung cấp các giải pháp toàn diện ứng dụng phần mềm Autodesk
      nhằm tối ưu hóa quy trình công việc, OneCAD Vietnam lấy kỹ thuật và dịch
      vụ là giá trị cốt lõi, sự thành công và tín nhiệm của khách hàng là tiền
      đề của sự phát triển bền vững. Đội ngũ chuyên gia Kỹ thuật với trình độ
      chuyên môn cao, nhiệt huyết và đầy kinh nghiệm, được chứng nhận năng lực
      từ Autodesk, chúng tôi luôn nghiên cứu và cập nhật công nghệ mới nhằm mang
      đến cho khách hàng dịch vụ tốt nhất, sự hợp tác lâu dài và vững mạnh.
    </ul>
    <ul class="line-2">
      OneCAD Vietnam là đối tác chiến lược duy nhất của Autodesk tại Việt Nam
      chỉ tập trung cung cấp các sản phẩm các dịch vụ đào tạo và tư vấn giải
      pháp chuyên nghiệp của Autodesk.
    </ul>
    <ul class="line-3">
      Những lợi ích OneCAD Vietnam mang lại cho khách hàng:
      <li class="line-top">
        Chi phí triển khai bản quyền phần mềm Autodesk tốt nhất thị trường
      </li>
      <li>Sự hài lòng tối đa trong quá trình tư vấn và hỗ trợ</li>
      <li>Hỗ trợ kỹ thuật chuyên nghiệp và chuyên sâu</li>
      <li>
        Hỗ trợ chi phí cho các kế hoạch đào tạo nâng cao và dịch vụ giải pháp
        dành cho khách hàng đã triển khai phần mềm Autodesk với OneCAD.
      </li>
      <div class="background"></div>
      <list-element-about-tap />
    </ul>
  </div>
</template>

<script>
import ListElementAboutTap from './ListElementAboutTap.vue';
export default {
  components: { ListElementAboutTap },

};
</script>

<style scoped>
.brand-introduction {
  padding: 0 11.7%;
}
h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-top: 70px;
  color: #121212;
}
ul {
  list-style-type: disc;
  margin: 20px 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #121212;
}
li {
  margin: 10px 25px;
}
.line-top {
  margin-top: 25px;
}
.background {
    height: 540px;
    width: auto;
    background-image: url('@/assets/photo3.png');
    background-size: cover;
}
</style>