<template>
  <nav
    class="fixed z-20 h-16 bg-white drop-shadow-md px-16 py-2 w-full md:px-4"
  >
    <div class="container h-full flex justify-between">
      <router-link class="_link" :to="{ name: 'BaseRoute::home' }">
        <div class="flex">
          <img
            class="h-[35px] align-middle"
            src="@/assets/images/logo/v-wind.png"
            alt="v-wind.png"
          />
          <span class="text-2xl font-bold ml-2">V-Wind</span>
        </div>
      </router-link>
      <ul class="flex space-x-2 md:hidden">
        <li class="my-auto">
          <router-link
            class="_link"
            :class="{
              _active: route.name === 'BaseRoute::home',
            }"
            :to="{ name: 'BaseRoute::home' }"
          >
            Home
          </router-link>
        </li>
        <li class="my-auto">
          <router-link
            class="_link"
            :class="{
              _active: route.name === 'BaseRoute::updates',
            }"
            :to="{ name: 'BaseRoute::updates' }"
          >
            Updates
          </router-link>
        </li>
        <li class="my-auto">
          <router-link
            class="_link"
            :class="{
              _active: route.name === 'BaseRoute::aboutUs',
            }"
            :to="{ name: 'BaseRoute::aboutUs' }"
          >
            About Us
          </router-link>
        </li>
        <li class="my-auto">
          <a
            class="_link"
            href="https://github.com/RootJarias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ICO_Github size="25px" />
          </a>
        </li>
      </ul>
      <div class="hidden md:block">
        <button class="link text-xl">
          <font-awesome-icon :icon="['fas', 'fa-bars']" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Base Imports
import { useRoute } from 'vue-router';

// Import Icons
import { ICO_Github } from '@/assets/images/icons/custom/index.js';

// Set Datas
const route = useRoute();
</script>
