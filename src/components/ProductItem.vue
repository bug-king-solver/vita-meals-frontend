<template>
    <div
      class="product-card m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <RouterLink :to="{ name: 'product_details', params: { id: props.product.id } }">
        <img class="p-2 rounded-t-lg w-[300px]" :src="props.product.image_url" alt="product image" />
      </RouterLink>  
      
      <div class="px-5 pb-5">
        <div class="flex justify-between my-2">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {{ props.product.title }}
          </h5>
          <div class="flex">
            <div @click.prevent="decrementCount" class="flex items-center px-2 cursor-pointer hover:bg-purple-400">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <input class="mx-2 border rounded-md text-center w-10" v-model="count" type="number">
            <div @click.prevent="incrementCount" class="flex items-center px-2 cursor-pointer hover:bg-purple-400">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >${{ props.product.price }}</span
          >
          <a
            @click.prevent="handAddToCart"
            class="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 cursor-pointer"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Product } from '../types';
import { ref } from 'vue';

const props = defineProps<{
  product: Product;
}>();

const count = ref(1)

const decrementCount = () => {
  count.value --;
  if (count.value < 1) {
    count.value = 1;
  }
}

const incrementCount = () => {
  count.value ++;
  
}

const handAddToCart = () => {}
</script>