import { defineStore, acceptHMRUpdate } from 'pinia';

export const useDrawerStore = defineStore('CMP-Drawer', {
  state: () => ({
    show: false,
  }),

  getters: {},

  actions: {
    showDrawer(showState) {
      this.$patch({
        show: showState,
      });
    },
  },
});

// HMR (Hot Module Replacement) :: Make sure to pass the right store definition.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDrawerStore, import.meta.hot));
}
