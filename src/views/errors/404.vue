<template>
  <section :class="['container bg-white py-[40px]']">
    <div :class="['container mt-[100px] text-center']">
      <h2 :class="['-mb-4 text-center text-[80px]']">404</h2>
      <div
        :class="[
          'h-[400px] bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center',
        ]"
      ></div>
      <div :class="['mt-[-50px]']">
        <h1 :class="['text-[60px]']">Look like you're lost</h1>
        <h3>The page you are looking for not avaible!</h3>
        <router-link
          :class="[
            'm-auto mt-5 block w-fit rounded-full border-0 bg-primary-500 px-6 py-2 text-white',
          ]"
          :to="{ name: 'BaseRoute::home' }"
        >
          Go to Home
        </router-link>
      </div>
    </div>
  </section>
</template>
