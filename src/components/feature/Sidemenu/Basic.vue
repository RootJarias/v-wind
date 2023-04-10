<template>
  <nav class="fixed z-10 h-screen bg-gray-200 drop-shadow-md w-[18em]">
    <section
      class="relative h-[20em] w-full overflow-hidden ease-in-out duration-[5000ms] animated"
      :class="waveSky.color"
    >
      <div
        class="absolute top-[100px] left-1/2 w-full text-center translate-x-[-50%] translate-y-[-50%]"
      >
        <h3 class="text-2xl font-bold text-white">
          {{ waveSky.dayTimeText }}
        </h3>
      </div>
      <div class="block">
        <div class="_wave"></div>
        <div class="_wave"></div>
        <div class="_wave"></div>
        <div class="_wave"></div>
      </div>
    </section>
    <hr class="bg-gray-700" />
    <ul class="p-4">
      <li>
        <a href="#">
          <font-awesome-icon class="mr-2" :icon="['fas', 'plus']" />
          <span>Components</span>
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon class="mr-2" :icon="['fas', 'plus']" />
          <span>Layouts</span>
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon class="mr-2" :icon="['fas', 'plus']" />
          <span>Utilities</span>
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon class="mr-2" :icon="['fas', 'plus']" />
          <span>Tools</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// Base Imports
import { ref, onMounted } from 'vue';

// Set Datas
const waveSky = ref({
  dayTimeText: null,
  colorClass: '_waveSky--morning',
});

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

// Initialize Functions
onMounted(() => {
  setWaveSky();
});
</script>

<style scoped>
._waveSky--morning {
  background: linear-gradient(180deg, #392033, #392033, #07b6d5, #07b6d5);
  background-size: 800% 800%;
  -webkit-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -o-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  animation: waveSky--animate 5s ease 0s 1 normal forwards;
}

._waveSky--afternoon {
  background: linear-gradient(180deg, #07b6d5, #07b6d5, #f8aa27, #f8aa27);
  background-size: 800% 800%;
  -webkit-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -o-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  animation: waveSky--animate 5s ease 0s 1 normal forwards;
}

._waveSky--evening {
  background: linear-gradient(180deg, #f8aa27, #f8aa27, #392033, #392033);
  background-size: 800% 800%;
  -webkit-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -moz-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  -o-animation: waveSky--animate 5s ease 0s 1 normal forwards;
  animation: waveSky--animate 5s ease 0s 1 normal forwards;
}

@-webkit-keyframes waveSky--animate {
  0% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@-moz-keyframes waveSky--animate {
  0% {
    background-position: 51% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@-o-keyframes waveSky--animate {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

@keyframes waveSky--animate {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}

._wave {
  @apply absolute bottom-0 left-0 h-[100px] w-full;
  background: url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png');
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
</style>
