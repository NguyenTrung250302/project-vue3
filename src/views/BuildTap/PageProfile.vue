<template>
  <div class="container-profile">
    <nav-bar-header-avatar :avatarPath="avatarPath"/>
    <edit-avatar @avatar-updated="avatarUpdated"/>
    <footer-view />
  </div>
</template>

<script>
import NavBarHeaderAvatar from '@/BuildTapComponents/PageProfile/NavBarHeaderAvatar.vue';
import EditAvatar from '@/BuildTapComponents/PageProfile/EditAvatar.vue';
import FooterView from '@/components/MyArchive/FooterView.vue';
export default {
  components: {
    NavBarHeaderAvatar,
    EditAvatar,
    FooterView
  },
  data() {
    return {
      avatarPath:  localStorage.getItem("avatarPath") ?? ""
    }
  },
  methods: {
    avatarUpdated(avatarPath) {
      this.avatarPath = avatarPath
    }
  }
};
</script>
