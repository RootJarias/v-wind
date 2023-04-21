<template>
  <div
    :class="[
      'absolute z-20 overflow-hidden',
      {
        'h-screen w-full': drawerStore.$state.show === true,
      },
    ]"
  >
    <Transition name="_overlay">
      <div
        :class="'_black-gradient left-0 top-0 h-full w-[150vw] opacity-50'"
        v-show="drawerStore.$state.show"
        @click="drawerStore.showDrawer(false)"
      ></div>
    </Transition>
  </div>

  <Transition name="_submenu">
    <CMP_Sidemenu_Basic v-show="drawerStore.$state.show" />
  </Transition>
</template>

<script setup>
// Import Components
import CMP_Sidemenu_Basic from "@/components/feature/Sidemenu/Basic.vue";

// Import Stores
import { useDrawerStore } from "@/stores/module/components/drawer";

// Set Datas
const drawerStore = useDrawerStore();
</script>

<style scoped>
._black-gradient {
  background: linear-gradient(to right, black 80%, rgba(0, 0, 0, 0));
}
._overlay-enter-active {
  transition: all 0.4s ease-out;
}

._overlay-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

._submenu-enter-active {
  transition: all 0.2s ease-out;
}

._submenu-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

._overlay-enter-from,
._overlay-leave-to,
._submenu-enter-from,
._submenu-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
