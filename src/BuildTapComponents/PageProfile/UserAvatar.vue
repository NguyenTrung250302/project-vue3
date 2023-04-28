<template>
  <div class="avatar-header">
    <img :src="avatarUrl" alt="avatar">
  </div>
</template>

<script>
export default {
 data() {
  return {
    avatarUrl: null,
  }
 },
 created() {
  // 
  const storedAvatarUrl = localStorage.getItem("avatarUrl");
  if(storedAvatarUrl) {
    this.avatarUrl = storedAvatarUrl;
  }
  else {
    this.avatarUrl = this.defaultAvatar;
  }
 }
};
</script>

<style scoped>
.avatar-header {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
}
</style>

