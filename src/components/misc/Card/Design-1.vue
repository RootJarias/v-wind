<template>
  <div
    :class="[
      'group relative z-0 m-2 block w-full cursor-pointer select-none overflow-hidden rounded-md border border-slate-200 bg-slate-100 p-6 duration-200 ease-in-out',
      'hover:border hover:border-primary-500 hover:bg-slate-200 hover:text-white hover:drop-shadow-lg',
      'active:scale-95',
    ]"
  >
    <div
      :class="[
        'absolute right-0 top-0 z-[-1] h-[32px] w-[32px] rounded-bl-[32px] rounded-br-none rounded-tl-none rounded-tr-none bg-primary-500 duration-300 ease-in-out',
        'group-hover:h-full group-hover:w-full group-hover:rounded-none',
      ]"
    ></div>
    <h3>Card Title</h3>
    <p>
      Card description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details.
    </p>
    <div
      :class="[
        'absolute right-0 top-0 z-20 flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-bl-[32px] rounded-br-none rounded-tl-none rounded-tr-none bg-primary-500 p-5 duration-700 ease-in-out',
        'group-hover:bg-primary-400',
      ]"
    >
      <font-awesome-icon
        :class="['mr-[-4px] mt-[-4px] text-white']"
        :icon="['fas', 'arrow-right-long']"
      />
    </div>
  </div>
</template>
