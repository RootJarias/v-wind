<template>
  <div
    :class="[
      'relative z-0 m-2 block w-full cursor-pointer select-none overflow-hidden rounded-md border border-slate-200 bg-slate-100 p-6 duration-200 ease-in-out',
      'hover:z-[500] hover:border hover:border-primary-500 hover:bg-slate-200 hover:shadow-[0px_0px_100vh_100vh_rgba(0,0,0,0.5)] hover:drop-shadow-lg',
      'active:scale-95',
    ]"
  >
    <h3>This is option 3</h3>
    <p>
      Card description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details. Card
      description with lots of great facts and interesting details.
    </p>
    <div
      :class="[
        'absolute right-0 top-0 z-20 flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-bl-[32px] rounded-br-none rounded-tl-none rounded-tr-none bg-primary-500 p-5 duration-700 ease-in-out',
      ]"
    >
      <font-awesome-icon
        :class="['mr-[-4px] mt-[-4px] text-white']"
        :icon="['fas', 'arrow-right-long']"
      />
    </div>
  </div>
</template>
