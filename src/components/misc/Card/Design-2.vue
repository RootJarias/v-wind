<template>
  <div class="_card">
    <div>
      <svg
        class="mb-5"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g
            id="Artboard-Copy-19"
            transform="translate(-874.000000, -1729.000000)"
            stroke-width="1.5"
          >
            <g id="Group-22" transform="translate(0.000000, 1672.000000)">
              <g id="Group-46" transform="translate(688.000000, 33.000000)">
                <g id="Group-42" transform="translate(166.000000, 0.000000)">
                  <g id="Group-25" transform="translate(21.000000, 25.000000)">
                    <g id="Group-9" transform="translate(0.000000, 17.666667)">
                      <path
                        d="M14,8.33306667 L14,12.3330667"
                        id="Stroke-3"
                        stroke="#CD3D73"
                      ></path>
                      <polyline
                        id="Stroke-1"
                        stroke="#666666"
                        points="18 4.33306667 18 12.3330667 10 12.3330667"
                      ></polyline>
                      <polyline
                        id="Stroke-5"
                        stroke="#666666"
                        points="10 5.1332 10 12.3332 2 12.3332 2 6.3332"
                      ></polyline>
                      <polygon
                        id="Stroke-7"
                        stroke="#666666"
                        points="9 6.33306667 14 0.333066667 5 0.333066667 0 6.33306667"
                      ></polygon>
                    </g>
                    <path
                      d="M20,23.9997333 L14,17.9997333"
                      id="Stroke-10"
                      stroke="#666666"
                    ></path>
                    <g
                      id="Group-15"
                      transform="translate(5.666667, 0.000000)"
                      stroke="#666666"
                    >
                      <polygon
                        id="Stroke-11"
                        points="9.28906667 7.99973333 16.3330667 -0.000266666667 7.33306667 -0.000266666667 0.289066667 7.99973333"
                      ></polygon>
                      <path
                        d="M24.3333333,7.99973333 L16.3333333,-0.000266666667"
                        id="Stroke-13"
                      ></path>
                    </g>
                    <path
                      d="M16,6.8148 L16,14.0001333"
                      id="Stroke-16"
                      stroke="#666666"
                    ></path>
                    <polyline
                      id="Stroke-17"
                      stroke="#666666"
                      points="28 5.99973333 28 23.9997333 24 23.9997333"
                    ></polyline>
                    <path
                      d="M8,13.9997333 L8,7.99973333"
                      id="Stroke-19"
                      stroke="#666666"
                    ></path>
                    <path
                      d="M20,8.99973333 L20,9.99973333"
                      id="Stroke-20"
                      stroke="#CD3D73"
                    ></path>
                    <path
                      d="M24,8.99973333 L24,9.99973333"
                      id="Stroke-21"
                      stroke="#CD3D73"
                    ></path>
                    <path
                      d="M20,13.9997333 L20,14.9997333"
                      id="Stroke-22"
                      stroke="#CD3D73"
                    ></path>
                    <path
                      d="M24,13.9997333 L24,14.9997333"
                      id="Stroke-23"
                      stroke="#CD3D73"
                    ></path>
                    <path
                      d="M24,18.9997333 L24,19.9997333"
                      id="Stroke-24"
                      stroke="#CD3D73"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h3>This is option 4</h3>
      <p>
        Card description with lots of great facts and interesting details. Card
        description with lots of great facts and interesting details. Card
        description with lots of great facts and interesting details.
      </p>
    </div>
    <div class="_arrow">
      <font-awesome-icon class="_icon" :icon="['fas', 'arrow-right-long']" />
    </div>
  </div>
</template>

<script setup>
// Set Props
const props = defineProps({
  title: String,
  pathName: String,
});
</script>

<style scoped>
._card {
  @apply relative flex justify-between w-full bg-slate-100 rounded-md p-6 m-2 overflow-hidden border border-slate-200 cursor-pointer ease-in-out duration-200 select-none;
}

._card:hover {
  @apply bg-slate-200 drop-shadow-lg border border-[#dc2a74];
}

._card:active {
  @apply scale-95;
}

._card ._arrow {
  @apply absolute top-0 right-[-100vw] h-full pt-3 pl-4 pr-8 bg-primary-500 skew-x-[18deg] ease-in-out duration-300;
  background-image: linear-gradient(-45deg, #8f479a 1%, #dc2a74 100%);
}

._card:hover ._arrow {
  @apply right-[-35px];
}

._card ._arrow ._icon {
  @apply text-white skew-x-[-18deg];
}
</style>
