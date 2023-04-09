<template>
  <nav class="fixed z-10 h-screen bg-gray-200 drop-shadow-md w-[18em]">
    <section
      class="relative h-[20em] w-full overflow-hidden"
      :style="{ background: waveSkyColor }"
    >
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </section>
  </nav>
</template>

<script setup>
// Base Imports
import { ref, onMounted } from 'vue';
import colors from '../../../../tailwind-colors';

// Set Datas
const waveSkyColor = ref(colors.primary[500]);

// Set Functions
const setWaveSky = () => {
  let today = new Date();
  let currentHour = today.getHours();

  if (currentHour < 12) {
    console.log('good morning');
  } else if (curHr < 18) {
    console.log('good afternoon');
  } else {
    console.log('good evening');
  }
};

// Initialize Functions
onMounted(() => {
  setWaveSky();
});
</script>

<style scoped>
.wave {
  @apply absolute bottom-0 left-0 h-[100px] w-full;
  background: url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png');
  background-size: 1000px 100px;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(96%)
    contrast(88%);
}

.wave:nth-child(1) {
  @apply z-40 opacity-100 bottom-0;
  animation: wave 20s linear infinite;
  animation-delay: 0s;
}

.wave:nth-child(2) {
  @apply z-30 opacity-50 bottom-[10px];
  animation: wave2 10s linear infinite;
  animation-delay: -5s;
}

.wave:nth-child(3) {
  @apply z-20 opacity-20 bottom-[15px];
  animation: wave 15s linear infinite;
  animation-delay: -2s;
}

.wave:nth-child(4) {
  @apply z-10 opacity-70 bottom-[20px];
  animation: wave2 5s linear infinite;
  animation-delay: -5s;
}

@keyframes wave {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}

@keyframes wave2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
}
</style>
