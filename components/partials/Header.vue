<template>
    <header class="z-50 fixed top-0 left-0 w-full h-32 transition-all duration-300 ease-in-out" :class="{'opaque':isOpaque}">
        <div class="h-full  w-full max-w-[90rem] mx-auto flex " >
            <div class="z-40 w-full flex justify-between py-4 px-8 md:justify-start md:gap-x-16">
                <img class="h-full w-[96.5px]"  src="/images/logos/logo-black.svg" alt="" srcset="">
                <button  @click="showMenu = !showMenu" class="h-fit md:hidden">
                    <svg width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 2.5H40.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
                        <path d="M2.5 14.5H40.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
                        <path d="M2.5 26.5H40.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
                    </svg>
                </button>

                <!-- md screen menu -->
                <nav class="hidden md:flex gap-x-8 h-fit">
                    <router-link to="/patronat"  class="text-xl">Patronal</router-link>
                    <router-link to="/equip" class="text-xl">Equip</router-link>
                    <router-link to="/balanc" class="text-xl">Balanç econòmic</router-link>
                    <router-link to="/impact" class="text-xl">Impacte social</router-link>
                </nav>
            </div>
            <!-- small screen menu -->
            <div class="md:hidden fixed top-0 z-50 bg-[#80676B] h-screen w-full flex flex-col transition-all duration-500 ease-in-out overflow-y-auto"
                :class="{'-translate-y-full':!showMenu}">
                <div class="z-40 flex justify-between py-4 px-8 w-full">
                    <img src="/images/logos/logo-white.svg" alt="" srcset="">
                    <button class="h-fit md:hidden" @click="showMenu = !showMenu">
                        <svg width="43" height="33" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L29.8701 29.8701" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <path d="M3 30L29.8701 3.12994" stroke="white" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <div class="md:hidden h-fit flex flex-col gap-y-8 text-white justify-center items-center px-4 grow">
                    <router-link @click="showMenu = !showMenu" to="/" class="text-[2rem]">Inici</router-link>
                    <router-link @click="showMenu = !showMenu" to="/patronat" class="text-[2rem]">patronat</router-link>
                    <router-link @click="showMenu = !showMenu" to="/equip" class="text-[2rem]">Equip</router-link>
                    <router-link @click="showMenu = !showMenu" to="/balanc" class="text-[2rem]">Balanç econòmic</router-link>
                    <router-link @click="showMenu = !showMenu" to="/impact" class="text-[2rem]">Impacte social</router-link>
                </div>
            </div>

            
            
        </div>
    </header>
</template>

<script setup> 

const showMenu = ref(false)
const isOpaque = ref(false)
function changeHeaderLook() {
    if(window.scrollY > 128){
        isOpaque.value = true
    }else{
        isOpaque.value = false
    }
}
onMounted(() => {
    window.addEventListener('scroll', changeHeaderLook)
})
onUnmounted(()=>{
    window.removeEventListener('scroll', changeHeaderLook)
})
</script>

<style scoped>
    .opaque {
        background: white;
        box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
        height: 5.75rem;
    }
</style>

