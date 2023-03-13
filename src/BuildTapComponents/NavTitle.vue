<template>
  <div class="nav-items">
    <p class="head-line-blur">{{headLine1}}</p>
    <svg
      style="margin: 0 15px"
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.19993 6.00002C6.19993 6.46668 6.01993 6.93335 5.66659 7.28668L1.31993 11.6334C1.12659 11.8267 0.806595 11.8267 0.613262 11.6334C0.419928 11.44 0.419928 11.12 0.613262 10.9267L4.95993 6.58002C5.27993 6.26002 5.27993 5.74002 4.95993 5.42002L0.613261 1.07335C0.419928 0.880019 0.419928 0.560018 0.613261 0.366685C0.806595 0.173351 1.12659 0.173351 1.31993 0.366685L5.66659 4.71335C6.01993 5.06668 6.19993 5.53335 6.19993 6.00002Z"
        fill="#121212"
      />
    </svg>
    <p class="head-line2">{{headLine2}}</p>
  </div>
</template>

<script>

export default {
  components :{

  },
  props: [
  'headLine1',
  'headLine2'
  ],
};
</script>

<style scoped>
.nav-items {
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 160px;
}
.item-blur {
  opacity: 0.25;
  pointer-events: none;
}
.head-line2 {
  width: auto;
height: 20px;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #121212;
}
.head-line-blur {
  color: rgba(0, 0, 0, 0.25);
  font-weight: 700;
font-size: 15px;
line-height: 20px;
}
</style>