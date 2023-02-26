<template>
  <div class="reference">
    <div class="list-colum">
      <div>
        <nav-bar-reference navbarReference="Solutions" class="nav"/>
        <list-element-view
          v-bind:ListElementView="ListElementView1"
          class="list-element"
        />
      </div>
      <div>
        <nav-bar-reference navbarReference="Services" class="nav"/>
        <list-element-view
          v-bind:ListElementView="ListElementView2"
          class="list-element"
        />
      </div>
      <div>
        <nav-bar-reference navbarReference="Resources" class="nav"/>
        <list-element-view
          v-bind:ListElementView="ListElementView3"
          class="list-element"
        />
      </div>
    </div>
    <div>
      <button-account />
    </div>
  </div>
</template>

<script>
import ButtonAccount from "./ButtonAccount.vue";
import ListElementView from "./ListElementView.vue";
import NavBarReference from "./NavBarReference.vue";
export default {
  components: {
    ListElementView,
    ButtonAccount,
    NavBarReference,
  },
  data() {
    return {
      ListElementView1: [
        { id: "Facilities Management" },
        { id: "Computer Vision AI " },
        { id: "Design Automation" },
        { id: "Viewer" },
        { id: "Addins Platform" },
        { id: "Online meeting" },
        { id: "Camera AI" },
      ],
      ListElementView2: [
        { id: "System Intergration" },
        { id: "BIM Services" },
        { id: "3D scan services" },
        { id: "Outsources" },
      ],
      ListElementView3: [
        { id: "Tech blog" },
        { id: "Success stories" },
        { id: "Events" },
        { id: "BIM" },
        { id: "Digital twin" },
      ],
    };
  },
};
</script>

<style scoped>
.reference {
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 430px;
  padding: 50px 160px;
}
.list-element {
  margin-right: 100px;
}
.list-colum {
  display: flex;
}
.nav {
    margin-bottom: 40px;
}
</style>