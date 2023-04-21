<template>
  <div class="_card">
    <div class="_overlay"></div>
    <h3>Card Title</h3>
    <p>
      Card description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details.
    </p>
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
  @apply relative z-0 m-2 block w-full cursor-pointer select-none overflow-hidden rounded-md border border-slate-200 bg-slate-100 p-6 duration-200 ease-in-out;
}

._card:hover {
  @apply border border-primary-500 bg-slate-200 text-white drop-shadow-lg;
}

._card:active {
  @apply scale-95;
}

._card ._overlay {
  @apply absolute right-0 top-0 z-[-1] h-[32px] w-[32px] rounded-bl-[32px] rounded-br-none rounded-tl-none rounded-tr-none bg-primary-500 duration-300 ease-in-out;
}

._card:hover ._overlay {
  @apply h-full w-full rounded-none;
}

._card ._arrow {
  @apply absolute right-0 top-0 z-20 flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-bl-[32px] rounded-br-none rounded-tl-none rounded-tr-none bg-primary-500 p-5 duration-700 ease-in-out;
}

._card:hover ._arrow {
  @apply bg-primary-400;
}

._card ._arrow ._icon {
  @apply mr-[-4px] mt-[-4px] text-white;
}
</style>
