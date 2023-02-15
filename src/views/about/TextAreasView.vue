<template>
  <div class="textarea">{{ textarea }}</div>
</template>

<script>
export default {
  props: ['textarea'],
};
</script>

<style>
.textarea {
  width: 420px;
  height: 140px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5x;
  background-color: #ffffff80;
  font-size: 16px;
  resize: none;
  color: #ffff;
  text-align: justify;
  margin: 0 0 20px 0;
}
</style>
