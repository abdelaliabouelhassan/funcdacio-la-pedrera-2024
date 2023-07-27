<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>
<script setup>
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
</script>