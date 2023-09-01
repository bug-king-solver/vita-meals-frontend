<template>
    <div id="product_list">
        <div class="m-3 grid place-items-center">
            <ProductSearchBox @handle-search="handleSubmit" />
        </div>
        
        <div class="flex flex-wrap justify-center mt-3">
        </div>
    </div>
    
</template>

<script setup lang="ts">
import ProductSearchBox from './ProductSearchBox.vue';
const handleSubmit = () => {

}
</script>