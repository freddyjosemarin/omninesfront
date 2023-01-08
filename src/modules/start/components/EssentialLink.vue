<template>
  <q-item
    clickable
    tag="a"
    :active="isActive()"
    :active-class="
      isDarkMode
        ? 'bg-blue-light-dark text-primary-dark text-weight-bold'
        : 'bg-light-blue-1 text-primary text-weight-bold'
    "
    @click="navigateTo(link)"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useUi from '../composables/useUi';
const { isDarkMode } = useUi();

interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});

const router = useRouter();

const isActive = () => {
  return useRoute().path === props.link;
};

const navigateTo = (link: string) =>
  link.startsWith('http') ? window.open(link) : router.push(link);
</script>
