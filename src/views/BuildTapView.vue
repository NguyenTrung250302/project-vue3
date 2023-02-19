<template>
    <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="BuildTap" />

    <NavBarSolution />
    <MainMenuSolution />
    </div>
</template>

<script lang="ts">
import NavBarSolution from '@/components/MyArchive/NavBarSolution.vue';
import MainMenuSolution from '@/components/MyArchive/MainMenuSolution.vue';
 "BuildTap"
export default {
    components: {
        NavBarSolution,
        MainMenuSolution,
    },
};
</script>

<script setup lang="ts">
import Breadcrumb from "../partials/Breadcrumb.vue";
</script>

