<template>
  <div class="footer-text">
    <p>{{ footertext }}</p>
    </div>
</template>

<script>
export default {
  props: ['footertext'],
};
</script>

<style>
.footer-text {
    font-size: 14px;
    color: #202020;
    margin: 30px 0 ;
    max-width: 170px;
}
</style>