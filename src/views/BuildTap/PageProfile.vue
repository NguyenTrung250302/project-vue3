<template>
  <div class="container-profile">
    <navigation-header-profile />
    <edit-avatar />
  </div>
</template>

<script>
import NavigationHeaderProfile from '@/BuildTapComponents/PageProfile/NavigationHeaderProfile.vue';
import EditAvatar from '@/BuildTapComponents/PageProfile/EditAvatar.vue';

export default {
  components: {
    NavigationHeaderProfile,
    EditAvatar

  },
};
</script>