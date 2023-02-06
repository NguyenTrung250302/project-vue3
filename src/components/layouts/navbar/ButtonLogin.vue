<template>
    <p class="btn-login">{{buttonLogin}}</p>
</template>

<script>
export default {
  props: ['buttonLogin'],
};
</script>

<style>
.btn-login {
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 35%;
  width: 80px;
  height: 22px;
  background-color: rgb(127, 129, 255);
}
</style>