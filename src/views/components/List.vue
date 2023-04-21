<template>
  <section>
    <div class="flex justify-start">
      <CMP_Card_Dimmer
        class="m-2"
        :title="item.path"
        :path-name="item.name"
        v-for="(item, index) in componentModules"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup>
// Base Imports
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Import Components
import CMP_Card_Dimmer from '@/components/misc/Card/Design-2.vue';

// Set Datas
const route = useRoute();
const componentModules = route.matched
  .find((o) => o.path === '/components')
  .children.filter((o) => o.name !== 'BaseRoute::components');
</script>
