<template>
  <header>
    <CMP_Navbar_Basic />
  </header>
  <main class="py-16">
    <!-- <CMP_Sidemenu_Basic /> -->
    <router-view />
  </main>
</template>

<script setup>
// Import Components
import CMP_Navbar_Basic from '../feature/Navbar/Basic.vue';
// import CMP_Sidemenu_Basic from '../feature/Sidemenu/Basic.vue';
</script>
