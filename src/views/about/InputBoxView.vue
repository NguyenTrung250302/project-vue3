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
  width: 450px;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #FFFFFF80;
  font-size: 16px;
  resize: none;
  text-align: justify;
  color: #ffff;
  margin: 20px 0 20px 0;
}
</style>
