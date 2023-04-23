<template>
  <header>
    <CMP_Navbar_Basic />
  </header>
  <main :class="['pt-16']">
    <CMP_Drawer />

    <div class="flex">
      <CMP_Sidemenu_Basic :class="['md:hidden']" />

      <div :class="['ml-[18em] w-full p-10', 'md:ml-0 md:p-5 sm:p-3']">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
// Import Components
import CMP_Navbar_Basic from "@/components/feature/Navbar/Basic.vue";
import CMP_Sidemenu_Basic from "@/components/feature/Sidemenu/Basic.vue";
import CMP_Drawer from "@/components/feature/Drawer/Basic.vue";
</script>
