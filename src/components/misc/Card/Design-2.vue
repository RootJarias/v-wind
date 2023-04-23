<template>
  <div
    :class="[
      'group relative m-2 flex w-full cursor-pointer select-none justify-between overflow-hidden rounded-md border border-slate-200 bg-slate-100 p-6 duration-200 ease-in-out',
      'hover:border hover:border-[#dc2a74] hover:bg-slate-200 hover:drop-shadow-lg',
      'active:scale-95',
    ]"
  >
    <div>
      <font-awesome-icon
        :class="['mb-5 h-[32px] w-[32px]']"
        :icon="['fas', 'user']"
      />
      <h3>This is option 4</h3>
      <p>
        Card description with lots of great facts and interesting details. Card
        description with lots of great facts and interesting details. Card
        description with lots of great facts and interesting details.
      </p>
    </div>
    <div
      :class="[
        'from-1% absolute right-[-100vw] top-0 h-full skew-x-[18deg] bg-primary-500 bg-gradient-to-r from-[#8f479a] via-100% to-[#dc2a74] pl-4 pr-8 pt-3 duration-300 ease-in-out',
        'group-hover:right-[-35px]',
      ]"
    >
      <font-awesome-icon
        :class="['skew-x-[-18deg] text-white']"
        :icon="['fas', 'arrow-right-long']"
      />
    </div>
  </div>
</template>