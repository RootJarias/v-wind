<template>
  <nav class="fixed z-30 h-screen bg-gray-200 drop-shadow-md w-[18em]">
    <section
      class="relative h-[20em] w-full overflow-hidden ease-in-out duration-[5000ms]"
      :class="waveSky.color"
    >
      <div
        class="absolute top-[100px] left-1/2 w-auto text-center translate-x-[-50%] translate-y-[-50%]"
      >
        <h3 class="_typewriter">{{ waveSky.dayTimeText }}</h3>
      </div>
      <div class="block">
        <div class="_wave"></div>
        <div class="_wave"></div>
        <div class="_wave"></div>
        <div class="_wave"></div>
      </div>
    </section>
    <ul
      class="flex flex-col space-y-2 h-[calc(100%-24em)] overflow-auto py-5 ease-in-out duration-300 border-l-8 hover:border-l-primary-600"
      :class="{
        'border-l-primary-600':
          route.name === 'BaseRoute::components' ||
          route.name === 'BaseRoute::layouts' ||
          route.name === 'BaseRoute::utilities' ||
          route.name === 'BaseRoute::tools',
      }"
    >
      <li>
        <router-link
          class="_sidemenu-item"
          :class="{
            _active: route.name === 'BaseRoute::components',
          }"
          :to="{ name: 'BaseRoute::components' }"
          @click="hideDrawer"
        >
          <font-awesome-icon class="mr-3" :icon="['fas', 'plus']" />
          <span>Components</span>
        </router-link>
      </li>
      <li>
        <router-link
          class="_sidemenu-item"
          :class="{
            _active: route.name === 'BaseRoute::layouts',
          }"
          :to="{ name: 'BaseRoute::layouts' }"
          @click="hideDrawer"
        >
          <font-awesome-icon class="mr-3" :icon="['fas', 'plus']" />
          <span>Layouts</span>
        </router-link>
      </li>
      <li>
        <router-link
          class="_sidemenu-item"
          :class="{
            _active: route.name === 'BaseRoute::utilities',
          }"
          :to="{ name: 'BaseRoute::utilities' }"
          @click="hideDrawer"
        >
          <font-awesome-icon class="mr-3" :icon="['fas', 'plus']" />
          <span>Utilities</span>
        </router-link>
      </li>
      <li>
        <router-link
          class="_sidemenu-item"
          :class="{
            _active: route.name === 'BaseRoute::tools',
          }"
          :to="{ name: 'BaseRoute::tools' }"
          @click="hideDrawer"
        >
          <font-awesome-icon class="mr-3" :icon="['fas', 'plus']" />
          <span>Tools</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// Base Imports
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Import Stores
import { useDrawerStore } from '@/stores/module/components/drawer';

// Set Datas
const route = useRoute();
const waveSky = ref({
  dayTimeText: null,
  colorClass: '_waveSky--morning',
});
const drawerStore = useDrawerStore();

// Set Functions
const setWaveSky = () => {
  let today = new Date();
  let currentHour = today.getHours();

  if (currentHour < 12) {
    setWaveSkyColor('morning');
  } else if (currentHour < 18) {
    setWaveSkyColor('afternoon');
  } else {
    setWaveSkyColor('evening');
  }
};

const setWaveSkyColor = (dayTime) => {
  switch (dayTime) {
    case 'morning':
      waveSky.value.dayTimeText = 'Good Morning!';
      waveSky.value.color = '_waveSky--morning';
      break;

    case 'afternoon':
      waveSky.value.dayTimeText = 'Good Afternoon!';
      waveSky.value.color = '_waveSky--afternoon';
      break;

    case 'evening':
      waveSky.value.dayTimeText = 'Good Evening!';
      waveSky.value.color = '_waveSky--evening';
      break;

    default:
      waveSky.value.dayTimeText = 'Good Morning!';
      waveSky.value.color = '_waveSky--morning';
      break;
  }
};

const hideDrawer = () => {
  setTimeout(() => {
    drawerStore.showDrawer(false);
  }, 300);
};

// Initialize Functions
onMounted(() => {
  setWaveSky();
});
</script>

<style scoped>
._waveSky--morning {
  background: linear-gradient(180deg, #392033, #392033, #07b6d5, #07b6d5);
  background-size: 800% 800%;
  -webkit-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -o-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  animation: waveSky-gradient 5s ease 0s 1 normal forwards;
}

._waveSky--afternoon {
  background: linear-gradient(180deg, #07b6d5, #07b6d5, #f8aa27, #f8aa27);
  background-size: 800% 800%;
  -webkit-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -o-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  animation: waveSky-gradient 5s ease 0s 1 normal forwards;
}

._waveSky--evening {
  background: linear-gradient(180deg, #f8aa27, #f8aa27, #392033, #392033);
  background-size: 800% 800%;
  -webkit-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  -o-animation: waveSky-gradient 5s ease 0s 1 normal forwards;
  animation: waveSky-gradient 5s ease 0s 1 normal forwards;
}

@-webkit-keyframes waveSky-gradient {
  0% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@-moz-keyframes waveSky-gradient {
  0% {
    background-position: 51% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@-o-keyframes waveSky-gradient {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@keyframes waveSky-gradient {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}
._wave {
  @apply absolute bottom-0 left-0 h-[100px] w-full;
  background: url('@/assets/images/wave.png');
  background-size: 1000px 100px;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(96%)
    contrast(88%);
}

._wave:nth-child(1) {
  @apply z-40 opacity-100 bottom-0;
  animation: wave-forward 6s linear infinite;
  animation-delay: 0s;
}

._wave:nth-child(2) {
  @apply z-30 opacity-50 bottom-[10px];
  animation: wave-backward 10s linear infinite;
  animation-delay: -5s;
}

._wave:nth-child(3) {
  @apply z-20 opacity-20 bottom-[15px];
  animation: wave-forward 5s linear infinite;
  animation-delay: -2s;
}

._wave:nth-child(4) {
  @apply z-10 opacity-70 bottom-[20px];
  animation: wave-backward 8s linear infinite;
  animation-delay: -5s;
}

@keyframes wave-forward {
  0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: 1000px;
  }
}

@keyframes wave-backward {
  0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: -1000px;
  }
}

._typewriter {
  @apply m-auto text-2xl font-semibold text-white overflow-hidden border-r-2 border-r-white whitespace-nowrap tracking-[.15em];
  animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: #fff;
  }
}

._sidemenu-item {
  @apply block w-[calc(100%-30px)] px-5 py-3 rounded-tr-[20px] rounded-br-[20px] text-gray-700 font-semibold uppercase ease-in-out duration-100 hover:bg-primary-600 hover:text-white hover:drop-shadow-lg active:scale-100;
}

._sidemenu-item._active {
  @apply bg-primary-600 text-white drop-shadow-lg scale-105 active:scale-100;
}
</style>
