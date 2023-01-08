<template>
  <router-view />
</template>

<script setup lang="ts">
import useUi from 'src/modules/start/composables/useUi';
useUi().checkDarkMode();
</script>
