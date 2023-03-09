<template>
  <div class="card-frame">
    <card-item-1 />
    <card-item-2 />
    <card-item-3 />
    <card-item-4 />
  </div>
</template>

<script>
import CardItem1 from "@/BuildTapComponents/BuildTapSystem/CardItem1.vue";
import CardItem2 from "@/BuildTapComponents/BuildTapSystem/CardItem2.vue";
import CardItem3 from "@/BuildTapComponents/BuildTapSystem/CardItem3.vue";
import CardItem4 from "@/BuildTapComponents/BuildTapSystem/CardItem4.vue";
export default {
components: {
CardItem1,
CardItem2,
CardItem3,
CardItem4
}
}
</script>

<style scoped>
.card-frame {
    width: 1350px;
    height: 900px;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Chia thành 2 cột bằng nhau */
    grid-template-rows: repeat(2, 1fr); /* Chia thành 2 hàng bằng nhau */
}
</style>