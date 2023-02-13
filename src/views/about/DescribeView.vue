<template>
  <div class="describe">
    <p>{{ describe }}</p>
    <!--mô tả tinh nang-->
  </div>
</template>

<script>
export default {
  props: ['describe'],
};
</script>

<style>
.describe {
  font-size: 12px;
  color: #858383;
  margin: 0 0 0 20px;
}
</style>