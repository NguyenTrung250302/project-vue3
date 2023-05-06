<template>
  <div class="container-profile">
    <nav-bar-header-avatar :avatarUrl="avatarUrl"/>
    <edit-avatar @avatarUpdated="avatarUpdated"/>
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
      avatarUrl:  localStorage.getItem("avatarUrl") ?? ""
    }
  },
  methods: {
    avatarUpdated(avatarUrl) {
      this.avatarUrl = avatarUrl
    }
  }
};
</script>
