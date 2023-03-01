<template>
  <div>
    <button>Your Name*</button>
    <button>Your Email*</button>
    <button class="button-message">Message...</button>
    <button class="button-submit">Submit</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  margin-bottom: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px 12px 16px;
  gap: 10px;
  width: 402px;
  height: 42px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  cursor: default;
}
.button-message {
  height: 135px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: default;
}
.button-submit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  position: absolute;
  width: 150px;
  height: 34px;
  background: #006fed;
  border-radius: 50px;
  cursor: pointer;
}
</style>