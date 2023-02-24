<template>
  <div class="list-element">
    <element-view 
    v-for="ElementView in ListElementView"
    v-bind:key="ElementView"
    v-bind:ElementView="ElementView"
    />
  </div>
</template>

<script>
import ElementView from './ElementView.vue';
export default {
  components: { ElementView },
  props: {
    ListElementView: {
        type: Array,
    }
  }
}
</script>

<style>

</style>