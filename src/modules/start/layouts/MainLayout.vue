<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleMenu" />

        <q-toolbar-title> Omni Integrador </q-toolbar-title>

        <q-space />

        <q-btn
          flat
          dense
          round
          :icon="isDarkMode ? 'o_light_mode' : 'o_dark_mode'"
          @click="toggleDark"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="isMenuOpen" show-if-above bordered :width="250">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <EssentialLink
            v-for="link in menuItems"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="images/fondo-login.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar color="white" size="56px" class="q-mb-sm">
            <img src="images/logo.svg" />
          </q-avatar>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink from '../components/EssentialLink.vue';
import useUi from '../composables/useUi';
import { useMenuItems } from '../stores/menuItemsStore';

const { menuItems } = useMenuItems();
const { isMenuOpen, toggleMenu, toggleDark, isDarkMode } = useUi();
</script>
