<template>
  <div class="input">{{ inbutbox }}</div>
</template>

<script>
export default {
  props: ['inbutbox'],
};
</script>

<style>
.input {
  width: 420px;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 7px;
  background-color: #ffffff80;
  font-size: 16px;
  resize: none;
  text-align: justify;
  color: #ffff;
  margin: 20px 0 20px 0;
}
</style>
