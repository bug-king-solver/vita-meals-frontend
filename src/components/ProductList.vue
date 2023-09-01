<template>
    <div id="product_list">
        <div class="m-3 grid place-items-center">
            <ProductSearch @handle-search="handleSubmit" />
        </div>
        
        <div class="flex flex-wrap justify-center mt-3">
        </div>
    </div>
    
</template>

<script setup lang="ts">
const handleSubmit = () => {
    
}
</script>