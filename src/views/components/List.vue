<template>
  <section>List</section>
  {{ route.options }}
</template>

<script setup>
// Base Imports
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Set Datas
const route = useRoute();
const routeChildCount = ref(0);

// Set Functions
</script>
