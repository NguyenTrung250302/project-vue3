<template>
  <div class="element-feedback">
    <personal-feedback
      userFeedback="Sean Farmer"
      jobTitle="Job title"
      loremFeedback="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam."
    />
  </div>
</template>

<script>
import PersonalFeedback from "@/BuildTapComponents/BuildTapAboutUs/PersonalFeedback.vue";
export default {
  components: { PersonalFeedback },
};
</script>

<style scoped>
.element-feedback {
  margin: 40px 15px 50px 15px;
}
</style>
