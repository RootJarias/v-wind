<template>
  <div class="_card">
    <div class="_overlay"></div>
    <div class="_content">
      <h3>Card Title</h3>
      <p class="_text-ellipsis-2">
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
  @apply relative z-0 block w-full bg-slate-100 rounded-md p-6 m-2 overflow-hidden border border-slate-200 cursor-pointer ease-in-out duration-200 select-none;
}
._card:hover {
  @apply bg-slate-200 drop-shadow-lg border border-primary-500 text-white;
}
._card:active {
  @apply scale-95;
}

._card ._overlay {
  @apply absolute top-0 right-0 z-[-1] h-[32px] w-[32px] bg-primary-500 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-[32px] ease-in-out duration-300;
}

._card:hover ._overlay {
  @apply h-full w-full rounded-none;
}

._card ._arrow {
  @apply absolute top-0 right-0 z-20 flex items-center justify-center h-[32px] w-[32px] p-5 bg-primary-500 overflow-hidden rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-[32px] ease-in-out duration-700;
}

._card:hover ._arrow {
  @apply bg-primary-400;
}

._card ._arrow ._icon {
  @apply mt-[-4px] mr-[-4px] text-white;
}
</style>
