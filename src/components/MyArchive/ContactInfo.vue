<template>
  <div class="contact-info">
    <div class="contact">
        <h1>Liên hệ ngay hôm nay</h1>
        <p>Giải đáp vấn đề và đề xuất giải pháp tốt nhất dành cho bạn</p>
        <contact-type />
    </div>
    <!--  -->
    <div class="register">
      <button-contact />
    </div>
  </div>
</template>

<script>
import ButtonContact from './contactinfo/ButtonContact.vue';
import ContactType from './contactinfo/ContactType.vue';
export default {
  components: {
    ContactType,
    ButtonContact,
  },
}
</script>

<style scoped>
.contact-info {
    width: auto;
    height: 440px;
    margin-top: 60px;
    padding: 85px 170px;
    display: flex;
    justify-content: space-between;
    background-image: url(@/assets/331872598_752933712691324_5288812472693923275_n.png);
    background-size: cover;
}
h1 {
width: 371px;
height: 40px;
margin-bottom: 5px;
font-weight: 500;
font-size: 32px;
line-height: 40px;
color: #FFFFFF;
}
p {
  width: 488px;
height: 22px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #FFFFFF;
padding-bottom: 70px;
}
</style>