<template>
    <div class=" overflow-hidden">
        <Navigation />
        <Header />
        <slot />
        <Footer />
    </div>
</template>
<script setup>
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
import Navigation from '@/components/partials/Navigation.vue'
</script>