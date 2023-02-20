<template>
    <div>
        <button>Your Name*</button>
        <button>Your Email*</button>
        <button class="button-message">Message...</button>
      <button-submit />
    </div>
</template>

<script>
import ButtonSubmit from '@/components/MyArchive/contactinfo/ButtonSubmit.vue';

export default {
  components: { ButtonSubmit },

}
</script>

<style scoped>
button {
margin-bottom: 12px;
color: #FFFFFF;
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
}
.button-message {
height: 130px;
display: flex;
flex-direction: row;
align-items: flex-start;
}
</style>