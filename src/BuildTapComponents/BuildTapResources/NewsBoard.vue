<template>
  <div class="box-item">
    <div class="image-item"></div>
    <h1 class="section-name">{{ sectionName }}</h1>
    <p class="item-description">{{ itemDescription }}</p>
    <div class="more">
      <p class="text-more-info">Xem thêm</p>
      <svg
      class="icon"
        width="7"
        height="14"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.19993 5.99999C6.19993 6.46665 6.01993 6.93332 5.66659 7.28665L1.31993 11.6333C1.12659 11.8267 0.806595 11.8267 0.613262 11.6333C0.419928 11.44 0.419928 11.12 0.613262 10.9267L4.95993 6.57999C5.27993 6.25999 5.27993 5.73999 4.95993 5.41999L0.613261 1.07332C0.419928 0.879989 0.419928 0.559987 0.613261 0.366654C0.806595 0.173321 1.12659 0.173321 1.31993 0.366654L5.66659 4.71332C6.01993 5.06665 6.19993 5.53332 6.19993 5.99999Z"
          fill="#006FED"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    sectionName : String,
    itemDescription : String,
  },
};
</script>

<style scoped>
.box-item {
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #f5f1f1;
  width: 320px;
  height: 365px;
  padding: 12px;
}
.image-item {
    background-image: url('@/assets/photo1.png');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    width: 292px;
    height: 220px;
}
.section-name {
  width: auto;
  height: auto;
  font-weight: 700;
  line-height: 29px;
  color: #121212;
  font-size: 22.7143px;
  margin: 10px 0;
}
.item-description {
  width: 241px;
  height: 37px;
  font-weight: 400;
  font-size: 11.3571px;
  line-height: 18px;
  color: #6b6b6b;
  margin: 10px 0;
}
.more {
  display: flex;
  margin: 10px 0;
}
.text-more-info {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #006fed;
}
.icon {
    margin: 2px 0 0 10px;
}
.text-more-info:hover {
  cursor: pointer;
}
</style>