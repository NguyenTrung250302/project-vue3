<template>
  <div class="main-contact">
    <contact-info />
    <button-contact-info />
  </div>
</template>

<script>
import ContactInfo from "@/components/MyArchive/ContactInfomation/ContactInfo.vue";
import ButtonContactInfo from "@/components/MyArchive/ContactInfomation/ButtonContactInfo.vue";

export default {
  components: {
    ContactInfo,
    ButtonContactInfo,
  },
};
</script>

<style scoped>
.main-contact {
  width: auto;
  height: 440px;
  background-image: url("@/assets/background-big.png");
  background-size: cover;
  padding: 85px 160px;
  display: flex;
  justify-content: space-between;
}

</style>