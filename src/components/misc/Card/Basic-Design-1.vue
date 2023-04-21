<template>
  <div class="_card">
    <h3>Card Title</h3>
    <p class="_text-ellipsis-2">
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
  @apply relative z-0 block w-full bg-slate-100 rounded-md p-6 m-2 overflow-hidden border border-slate-200 cursor-pointer ease-in-out duration-200 select-none;
}
._card:hover {
  @apply bg-slate-200 drop-shadow-lg border border-primary-500;
}
._card:before {
  @apply absolute z-[-1] top-[-16px] right-[-16px] h-[32px] w-[32px] bg-primary-500 rounded-full scale-100 ease-in-out duration-500;
  content: '';
}
._card:hover:before {
  @apply scale-[4] bg-primary-300;
}

._card:active {
  @apply scale-95;
}
._card ._arrow {
  @apply absolute top-0 right-0 flex items-center justify-center h-[32px] w-[32px] p-5 bg-primary-500 overflow-hidden rounded-tl-[0] rounded-tr-[4px] rounded-br-[0] rounded-bl-[32px];
}

._card ._arrow ._icon {
  @apply mt-[-4px] mr-[-4px] text-white;
}
</style>
