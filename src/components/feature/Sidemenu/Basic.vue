<template>
  <nav :class="['fixed z-30 h-screen w-[18em] bg-gray-200 drop-shadow-md']">
    <section
      :class="[
        'relative h-[20em] w-full overflow-hidden duration-[5000ms] ease-in-out',
        waveSky.color,
      ]"
    >
      <div
        :class="[
          'absolute left-1/2 top-[100px] w-auto translate-x-[-50%] translate-y-[-50%] text-center',
        ]"
      >
        <h3 :class="['_typewriter']">{{ waveSky.dayTimeText }}</h3>
      </div>
      <div :class="['block']">
        <div :class="['_wave']"></div>
        <div :class="['_wave']"></div>
        <div :class="['_wave']"></div>
        <div :class="['_wave']"></div>
      </div>
    </section>
    <ul
      :class="[
        'flex h-[calc(100%-24em)] flex-col space-y-2 overflow-auto border-l-8 py-5 duration-300 ease-in-out hover:border-l-primary-500',
        {
          'border-l-primary-500':
            route.name === 'BaseRoute::components' ||
            route.name === 'BaseRoute::layouts' ||
            route.name === 'BaseRoute::utilities' ||
            route.name === 'BaseRoute::tools',
        },
      ]"
    >
      <li>
        <router-link
          :class="[
            '_sidemenu-item',
            {
              _active: route.name === 'BaseRoute::components',
            },
          ]"
          :to="{ name: 'BaseRoute::components' }"
          @click="hideDrawer"
        >
          <font-awesome-icon :class="['mr-3']" :icon="['fas', 'plus']" />
          <span>Components</span>
        </router-link>
      </li>
      <li>
        <router-link
          :class="[
            '_sidemenu-item',
            {
              _active: route.name === 'BaseRoute::layouts',
            },
          ]"
          :to="{ name: 'BaseRoute::layouts' }"
          @click="hideDrawer"
        >
          <font-awesome-icon :class="['mr-3']" :icon="['fas', 'plus']" />
          <span>Layouts</span>
        </router-link>
      </li>
      <li>
        <router-link
          :class="[
            '_sidemenu-item',
            {
              _active: route.name === 'BaseRoute::utilities',
            },
          ]"
          :to="{ name: 'BaseRoute::utilities' }"
          @click="hideDrawer"
        >
          <font-awesome-icon :class="['mr-3']" :icon="['fas', 'plus']" />
          <span>Utilities</span>
        </router-link>
      </li>
      <li>
        <router-link
          :class="[
            '_sidemenu-item',
            {
              _active: route.name === 'BaseRoute::tools',
            },
          ]"
          :to="{ name: 'BaseRoute::tools' }"
          @click="hideDrawer"
        >
          <font-awesome-icon :class="['mr-3']" :icon="['fas', 'plus']" />
          <span>Tools</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// Base Imports
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// Import Stores
import { useDrawerStore } from "@/stores/module/components/drawer";

// Set Datas
const route = useRoute();
const waveSky = ref({
  dayTimeText: null,
  colorClass: "_waveSky--morning",
});
const drawerStore = useDrawerStore();

// Set Functions
const setWaveSky = () => {
  let today = new Date();
  let currentHour = today.getHours();

  if (currentHour < 12) {
    setWaveSkyColor("morning");
  } else if (currentHour < 18) {
    setWaveSkyColor("afternoon");
  } else {
    setWaveSkyColor("evening");
  }
};

const setWaveSkyColor = (dayTime) => {
  switch (dayTime) {
    case "morning":
      waveSky.value.dayTimeText = "Good Morning!";
      waveSky.value.color = "_waveSky--morning";
      break;

    case "afternoon":
      waveSky.value.dayTimeText = "Good Afternoon!";
      waveSky.value.color = "_waveSky--afternoon";
      break;

    case "evening":
      waveSky.value.dayTimeText = "Good Evening!";
      waveSky.value.color = "_waveSky--evening";
      break;

    default:
      waveSky.value.dayTimeText = "Good Morning!";
      waveSky.value.color = "_waveSky--morning";
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
  background: url("@/assets/images/wave.png");
  background-size: 1000px 100px;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(96%)
    contrast(88%);
}

._wave:nth-child(1) {
  @apply bottom-0 z-40 opacity-100;
  animation: wave-forward 6s linear infinite;
  animation-delay: 0s;
}

._wave:nth-child(2) {
  @apply bottom-[10px] z-30 opacity-50;
  animation: wave-backward 10s linear infinite;
  animation-delay: -5s;
}

._wave:nth-child(3) {
  @apply bottom-[15px] z-20 opacity-20;
  animation: wave-forward 5s linear infinite;
  animation-delay: -2s;
}

._wave:nth-child(4) {
  @apply bottom-[20px] z-10 opacity-70;
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
  @apply m-auto overflow-hidden whitespace-nowrap border-r-2 border-r-white text-2xl font-semibold tracking-[.15em] text-white;
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
  @apply block w-[calc(100%-30px)] rounded-br-[20px] rounded-tr-[20px] px-5 py-3 font-semibold uppercase text-gray-700 duration-100 ease-in-out hover:bg-primary-500 hover:text-white hover:drop-shadow-lg active:scale-100;
}

._sidemenu-item._active {
  @apply scale-105 bg-primary-500 text-white drop-shadow-lg active:scale-100;
}
</style>
