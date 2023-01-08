import { defineStore } from 'pinia';
import { EssentialLinkProps } from '../interfaces/menuItems';

interface MenuItemsState {
  menuItems: EssentialLinkProps[];
}

export const useMenuItems = defineStore('menu-items', {
  state: (): MenuItemsState => ({
    menuItems: [
      {
        title: 'Managements',
      },
      {
        title: 'Cargar Cotización',
        caption: 'Cargar cotización de un proveedor',
        icon: 'real_estate_agent',
        link: '/',
      },
      // {
      //   title: 'Github',
      //   caption: 'github.com/quasarframework',
      //   icon: 'code',
      //   link: 'https://github.com/quasarframework',
      // },
    ],
  }),
  actions: {
    setMenuItems(menuItems: EssentialLinkProps[]) {
      this.menuItems = menuItems;
    },
  },
});
