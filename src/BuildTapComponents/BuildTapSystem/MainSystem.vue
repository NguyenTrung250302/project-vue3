<template>
  <div class="main-system">
    <nav-item-header
    headLine1="Homepage"
    headLine2="Service"
    headLine3="System Intergration"
    />
    <!--  -->
    <div class="system-description">
    <h1>System</h1>
    <h1>Intergration</h1>
    <svg style="margin: 10px 0"
     width="50" height="5" viewBox="0 0 50 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="5" rx="2.5" fill="#006FED"/>
    </svg>
    <p class="paragraph">
      Create, assign, and monitor Work Orders for yourself or your team quickly and easily with our user-friendly software. Clearly explain what needs to be done with comments on Work Orders and via real-time chat.
    </p>
    </div> 
    <!--  -->
  </div>
</template>

<script>
import NavItemHeader from "@/components/MyArchive/headerSolution/NavItemHeader.vue";
export default {
components: {
  NavItemHeader,
}
}
</script>

<style scoped>
.main-system {
    height: 575px;
    width: 1350px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(90deg, #FFFFFF 41.56%, rgba(255, 255, 255, 0) 69.91%), url('@/assets/photo5.png');
    background-size: 100% 100%;
}
.system-description {
  padding-left: 160px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.paragraph {
  padding-right: 70%;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #121212;
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
}
h1 {
font-weight: 800;
font-size: 48px;
line-height: 52px;
letter-spacing: -0.02em;

color: #000000;
flex: none;
order: 0;
flex-grow: 0;
}
</style>