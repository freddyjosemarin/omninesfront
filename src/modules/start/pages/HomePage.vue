<template>
<q-page padding>
  <span >{{ title }}</span>
</q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('Home');
</script>
