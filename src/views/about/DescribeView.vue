<!--mô tả tinh nang-->
<template>
  <div class="describe">
    <p>{{ describe }}</p>
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
}
</style>