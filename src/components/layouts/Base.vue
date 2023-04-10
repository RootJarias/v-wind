<template>
  <header>
    <CMP_Navbar_Basic />
  </header>
  <main class="pt-16">
    <div class="flex">
      <CMP_Sidemenu_Basic class="md:hidden" />

      <div class="w-full ml-[18em] p-10 md:ml-0 md:p-5 sm:p-3">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
// Import Components
import CMP_Navbar_Basic from '@/components/feature/Navbar/Basic.vue';
import CMP_Sidemenu_Basic from '@/components/feature/Sidemenu/Basic.vue';
</script>
