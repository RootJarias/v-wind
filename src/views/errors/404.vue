<template>
  <section class="container bg-white py-[40px]">
    <div class="mt-[100px] container text-center">
      <div class="bg-404 h-[400px]">
        <h1 class="text-center text-[80px]">404</h1>
      </div>
      <div class="mt-[-50px]">
        <h3 class="text-[80px]">Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <router-link
          class="btn bg-primary-500 text-white border-0 mt-5"
          :to="{ name: 'BaseRoute::home' }"
        >
          Go to Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-404 {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  background-position: center;
}
</style>
