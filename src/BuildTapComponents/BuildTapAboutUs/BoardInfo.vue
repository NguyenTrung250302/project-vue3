<template>
  <div class="board-info">
    <div class="border"></div>
    <div class="description-line">
      <h1>The numbers speak for themselves</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliquat enim ad minim.
      </p>
    </div>
    <!-- list board -->
  <list-board />
  </div>
</template>

<script>
import ListBoard from "@/BuildTapComponents/BuildTapAboutUs/ListBoard.vue";
export default {
  components: {
    ListBoard
  }
};
</script>

<style scoped>
.board-info {
  width: auto;
  height: 350px;
  background-color: rgba(0, 60, 128, 1);
}
.description-line {
  text-align: center;
  margin: 55px 0;
}
.border {
  height: 1px;
  width: 1px;
}
h1 {
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
}
p {
  font-weight: 400;
  font-size: 14px;
  padding: 0 30%;
  color: #ffffff;
  margin: 15px 0;
}
</style>