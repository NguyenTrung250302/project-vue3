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
      <ButtonLogin class="header-login" buttonLogin="Log in"/>
      <ButtonLogin class="header-sign-up" buttonLogin="Sign up"/>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderMenuNavbar from './layouts/HeaderMenuNavbar.vue';
import ButtonLogin from './layouts/ButtonLogin.vue';

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
  width: 120px;
  display: flex;
  justify-content: space-around;
}
</style>