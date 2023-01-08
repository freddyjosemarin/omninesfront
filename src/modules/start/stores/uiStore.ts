import { defineStore } from 'pinia';
import { Dark, LocalStorage } from 'quasar'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isMenuOpen: false,
    isDarkMode: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
      LocalStorage.set('isDarkMode', this.isDarkMode);
      Dark.set(this.isDarkMode);
    },

    checkDarkMode() {
      this.isDarkMode = LocalStorage.getItem('isDarkMode') || false;
      Dark.set(this.isDarkMode);
    }

  },
});
