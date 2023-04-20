<template>
  <div class="container-profile">
    <navigation-header-profile />
    <edit-avatar />
    <footer-view />
  </div>
</template>

<script>
import NavigationHeaderProfile from '@/BuildTapComponents/PageProfile/NavigationHeaderProfile.vue';
import EditAvatar from '@/BuildTapComponents/PageProfile/EditAvatar.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
  components: {
    NavigationHeaderProfile,
    EditAvatar,
    FooterView

  },
};
</script>