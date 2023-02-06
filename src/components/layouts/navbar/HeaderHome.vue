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
    <div class="button-login">
      <ButtonLogin buttonLogin="Log in" />
      <ButtonLogin style="background-color: #ffff; border: solid 1px" buttonLogin="Sign up" />
    </div>
  </div>
</template>

<script lang="ts">
import MainNavBar from '@/components/layouts/navbar/MainNavBar.vue';
import ButtonLogin from '@/components/layouts/navbar/ButtonLogin.vue';
import OtherNavBar from '@/components/layouts/navbar/OtherNavBar.vue';

export default {
  name: 'HeaderHome',
  components: {
    ButtonLogin,
    MainNavBar,
    OtherNavBar,
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

.button-login {
  display: flex;
  justify-content: space-around;
}
</style>
