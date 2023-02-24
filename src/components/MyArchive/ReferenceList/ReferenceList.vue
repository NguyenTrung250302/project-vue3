<template>
    <div>
        <div>
        <list-element-view  v-bind:ListElementView="ListElementView1" style="display:block; margin: 10px 30px"/>
        <list-element-view v-bind:ListElementView="ListElementView2" style="display:block; margin: 10px 30px"/>
        <list-element-view v-bind:ListElementView="ListElementView3" style="display:block; margin: 10px 30px"/>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import ListElementView from './ListElementView.vue';
export default {
  components: {
    ListElementView,
 },
  data() {
    return {
        ListElementView1: [
            {id: "Facilities Management"},
            {id: "Computer Vision AI "},
            {id: "Design Automation"},
            {id: "Viewer"},
            {id: "Addins Platform"},
            {id: "Online meeting"},
            {id: "Camera AI"},
        ],
        ListElementView2: [
            {id: "System Intergration"},
            {id: "BIM Services"},
            {id: "3D scan services"},
            {id: "Outsources"},
        ],
        ListElementView3: [
            {id: "Tech blog"},
            {id: "Success stories"},
            {id: "Events"},
            {id: "BIM"},
            {id: "Digital twin"}
        ]
    }
  }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-around;
    width: auto;
    height: 500px;
    background-color: aquamarine;
}
</style>