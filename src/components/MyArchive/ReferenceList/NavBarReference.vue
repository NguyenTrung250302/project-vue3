<template>
  <div>
    <p>{{ navbarReference }}</p>
    <svg class="icon"
     width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00001 11.2C7.53335 11.2 7.06668 11.0201 6.71335 10.6667L2.36668 6.32005C2.17335 6.12672 2.17335 5.80672 2.36668 5.61338C2.56001 5.42005 2.88001 5.42005 3.07335 5.61338L7.42001 9.96005C7.74001 10.28 8.26001 10.28 8.58001 9.96005L12.9267 5.61338C13.12 5.42005 13.44 5.42005 13.6333 5.61338C13.8267 5.80672 13.8267 6.12672 13.6333 6.32005L9.28668 10.6667C8.93335 11.0201 8.46668 11.2 8.00001 11.2Z" fill="#121212"/>
    </svg>
  </div>
</template>

<script>
export default {
props: ['navbarReference']
}
</script>

<style scoped>
p {
width: auto;
height: 20px;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #121212;
}
p:hover {
color: rgba(0, 111, 237, 1);
cursor: pointer;
}
div {
    display: flex;
}
.icon {
margin: 2px 0 0 3px;
}
.icon:hover {
  fill: rgba(0, 111, 237, 1);
}
</style>
