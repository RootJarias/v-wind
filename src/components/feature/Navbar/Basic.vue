<template>
  <nav class="fixed z-20 h-16 bg-white drop-shadow-md px-16 py-2 w-full">
    <div class="container h-full flex justify-between">
      <router-link class="link" :to="{ name: 'BaseRoute::home' }">
        <div class="flex">
          <img
            class="h-[35px] align-middle"
            src="@/assets/images/logo/v-wind.png"
            alt="v-wind.png"
          />
          <span class="text-2xl font-bold ml-2">V-Wind</span>
        </div>
      </router-link>
      <ul class="flex space-x-4">
        <li class="my-auto">
          <a class="link" href="#">Home</a>
        </li>
        <li class="my-auto">
          <a class="link" href="#">Updates</a>
        </li>
        <li class="my-auto">
          <a class="link" href="#">About Us</a>
        </li>
        <li class="my-auto">
          <a
            class="link"
            href="https://github.com/RootJarias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ICO_Github size="25px" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// Import Icons
import { ICO_Github } from '../../../assets/images/icons/custom/index.js';
</script>
