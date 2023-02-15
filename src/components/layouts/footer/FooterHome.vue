<template>
  <div class="footer-home">
    <div class="column-footer">
      <div class="footer-content">
        <main-nav-bar buttonTitle="Solution" />
        <footer-text footertext="Facilities Management" />
        <footer-text footertext="Computer Vision AI " />
        <footer-text footertext="Design Automation" />
        <footer-text footertext="Viewer" />
        <footer-text footertext="Addins Platform" />
        <footer-text footertext="Online meeting" />
        <footer-text footertext="Camera AI" />
      </div>
      <div class="footer-content">
        <main-nav-bar buttonTitle="Services" />
        <footer-text footertext="System Intergration" />
        <footer-text footertext="BIM Services" />
        <footer-text footertext="3D scan services" />
        <footer-text footertext="Outsources" />
      </div>
      <div class="footer-content">
        <main-nav-bar buttonTitle="Resources" />
        <footer-text footertext="Tech blog" />
        <footer-text footertext="Success stories" />
        <footer-text footertext="Events" />
        <footer-text footertext="BIM" />
        <footer-text footertext="Digital twin" />
      </div>
    </div>

    <div class="title-footer">
      <h1>BUILDTAP</h1>
      <button-account />
    </div>
  </div>

  <div class="footer-final">
    <div class="footer-final-text">
      <main-nav-bar buttonTitle="Contact us" style="margin-bottom: -15px" />
      <footer-text
        footertext="Copyright© 2022 MaintainX. All rights reserved"
        style="max-width: 400px" />
    </div>
    <div class="footer-icons">
      <font-awesome-icon class="icons" icon="fa-brands fa-facebook" />
      <font-awesome-icon class="icons" icon="fa-brands fa-twitter" />
      <font-awesome-icon class="icons" icon="fa-brands fa-instagram" />
      <font-awesome-icon class="icons" icon="fa-brands fa-linkedin" />
      <font-awesome-icon class="icons" icon="fa-brands fa-youtube" />
    </div>
  </div>
</template>

<script>
import ButtonAccount from '../button/ButtonAccount.vue';
import MainNavBar from '../navbar/MainNavBar.vue';
import FooterText from './FooterText.vue';

export default {
  name: 'FooterHome',
  components: {
    MainNavBar,
    FooterText,
    ButtonAccount,
  },
};
</script>

<style>
.footer-home {
  margin-top: 600px;
  max-width: auto;
  height: 500px;
  display: flex;
}
.footer-content {
  margin: 25px 10px;
  text-align: justify;
}
.column-footer {
  display: flex;
  margin-left: 110px;
}
.title-footer {
  /* margin: 10px 0 0 110px; */
  font-size: 20px;
}
.footer-final {
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #3333;
  max-width: 1100px;
  margin-left: 110px;
}
.footer-final-text {
  text-align: justify;
  margin: 10px 0 0 0;
}
.footer-icons {
  margin-top: 80px;
}
.icons {
  margin: 0 15px;
  font-size: 20px;
  cursor: pointer;
}
</style>
