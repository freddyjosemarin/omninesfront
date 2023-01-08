import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/uiStore';

const useUi = () => {
  const store = useUiStore();
  const { isMenuOpen, isDarkMode } = storeToRefs(store);

  return {
    isMenuOpen,
    isDarkMode,
    toggleMenu: store.toggleMenu,
    toggleDark: store.toggleDark,
    checkDarkMode: store.checkDarkMode,
  };
};

export default useUi;
