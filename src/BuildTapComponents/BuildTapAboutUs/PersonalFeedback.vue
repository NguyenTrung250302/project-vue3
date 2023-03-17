<template>
  <div class="personal-feedback">
    <div class="artus">
    <div class="show">
      <build-tap-icon-7 />
      <div class="info-user">
        <h1>{{ userFeedback }}</h1>
        <h2>{{ jobTitle }}</h2>
      </div>
    </div>
    <p>{{ loremFeedback }}</p>
    </div>
  </div>
</template>

<script>
import BuildTapIcon7 from "@/components/MyArchive/myicons/BuildTapIcon7.vue";
export default {
  components: {
    BuildTapIcon7,
  },
  props: ["userFeedback", "jobTitle", "loremFeedback"],
};
</script>

<style scoped>
.personal-feedback {
  width: 460px;
  height: 315px;
  border: 1px solid rgba(194, 209, 217, 1);
  position: relative;
  border-radius: 3px;
}
.artus {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.show {
  display: flex;
  margin-bottom: 25px;
}
.info-user {
    margin: 12px 25px;
}
h1 {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505d68;
}
h2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #a1aeb7;
}
p {
  width: 295px;
  height: 100px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a1aeb7;
}
</style>