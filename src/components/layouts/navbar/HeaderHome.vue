<template>
  <div class="header-home">
    <h3>BUILDTAP</h3>
    <div class="navbar-header">
      <HeaderMenuNavbar buttonTitle="Solution" />
      <HeaderMenuNavbar buttonTitle="Service" />
      <HeaderMenuNavbar buttonTitle="Resources" />
      <HeaderMenuNavbar buttonTitle="About Us" />
      <HeaderMenuNavbar buttonTitle="Support" />
    </div>
    <div class="button-login">
      <ButtonLogin buttonLogin="Log in" />
      <ButtonLogin style="background-color: #ffff; border: solid 1px" buttonLogin="Sign up" />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderMenuNavbar from '@/components/layouts/navbar/MainNavBar.vue';
import ButtonLogin from './ButtonLogin.vue';

export default {
  name: 'HeaderHome',
  components: {
    HeaderMenuNavbar,
    ButtonLogin,
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
