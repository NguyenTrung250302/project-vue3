<template>
  <div class="header-home">
    <h3>BUILDTAP</h3>
    <div class="navbar-header">
      <MainNavBar buttonTitle="Solution" />
      <MainNavBar buttonTitle="Service" />
      <MainNavBar buttonTitle="Resources" />
      <OtherNavBar otherNavbar="About us" />
      <OtherNavBar otherNavbar="Support" />
    </div>
    <button-login />
    <button-sign-up />
  </div>
</template>

<script lang="ts">
import MainNavBar from '@/components/layouts/navbar/MainNavBar.vue';
import OtherNavBar from '@/components/layouts/navbar/OtherNavBar.vue';
import ButtonLogin from '@/components/layouts/button/ButtonLogin.vue';
import ButtonSignUp from '@/components/layouts/button/ButtonSignUp.vue';

export default {
  name: 'HeaderHome',
  components: {
    MainNavBar,
    OtherNavBar,
    ButtonLogin,
    ButtonSignUp,
  },
};
</script>

<style>
.header-home {
  height: 60px;
  max-width: auto;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  margin: 0 25px 0 25px;
}

.navbar-header {
  width: 600px;
  display: flex;
  justify-content: space-around;
}
.header-home {
  display: flex;
}
</style>
