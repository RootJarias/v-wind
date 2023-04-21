<template>
  <div class="_card">
    <h3>This is option 3</h3>
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
  @apply relative z-0 block w-full bg-slate-100 rounded-md p-6 m-2 overflow-hidden border border-slate-200 cursor-pointer ease-in-out duration-200 select-none;
}

._card:hover {
  @apply z-[500] bg-slate-200 drop-shadow-lg border border-primary-500;
  box-shadow: 0px 0px 100vh 100vh rgba(0, 0, 0, 0.5);
}

._card:active {
  @apply scale-95;
}

._card ._arrow {
  @apply absolute top-0 right-0 z-20 flex items-center justify-center h-[32px] w-[32px] p-5 bg-primary-500 overflow-hidden rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-[32px] ease-in-out duration-700;
}

._card ._arrow ._icon {
  @apply mt-[-4px] mr-[-4px] text-white;
}
</style>
