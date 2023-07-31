<template>
    <header class="z-50 fixed top-0 left-0 w-full h-32 transition-all duration-300 ease-in-out " 
            :class="{'opaque':isOpaque , 'text-black':blackMode, 'text-white':!blackMode}">
        <div class="h-full  w-full max-w-[90rem] mx-auto flex " >
            <div class="z-40 w-full flex justify-between py-4 px-8 md:justify-start md:gap-x-16">
                <!-- black logo -->
                <router-link v-if="blackMode||isOpaque" to="/"  class="h-full" aria-label="Inici">
                    <img class="h-full w-[96.5px]"  src="/images/logos/logo-black.svg" alt="" srcset="">
                </router-link>
                <!-- black white -->
                <router-link v-else to="/"  class="h-full" aria-label="Inici">
                    <img class="h-full w-[96.5px]"  src="/images/logos/logo-white.svg" alt="" srcset="">
                </router-link>
                <!-- menu button -->
                <button name="menu1"  @click="showMenu = !showMenu" class="h-fit md:hidden">
                    <svg width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 2.5H40.5" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
                        <path d="M2.5 14.5H40.5" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
                        <path d="M2.5 26.5H40.5" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
                    </svg>
                </button>

                <!-- md screen menu -->
                <nav class="hidden md:flex gap-x-8 h-fit">
                    <router-link to="/patronat"  class="text-xl" aria-label="Patronal"> Patronal</router-link>
                    <router-link to="/equip" class="text-xl" aria-label="Equip">Equip</router-link>
                    <router-link to="/balanc" class="text-xl" aria-label="Balanç">Balanç econòmic</router-link>
                    <router-link to="/impact" class="text-xl" aria-label="Impacte">Impacte social</router-link>
                </nav>
            </div>
            <!-- small screen menu -->
            <div class="md:hidden overflow-hidden absolute top-0 z-50 bg-[#80676B] h-screen w-full flex flex-col transition-all duration-500 ease-in-out overflow-y-auto"
                :class="{'-translate-y-full':!showMenu}">
                <div class="z-40 flex justify-between py-4 px-8 w-full">
                    <router-link  @click="showMenu = !showMenu" to="/"  class="h-full" aria-label="svglogo">
                        <img src="/images/logos/logo-white.svg" alt="" srcset="">
                    </router-link>
                    <button name="menu2" class="h-fit md:hidden" @click="showMenu = !showMenu">
                        <svg width="43" height="33" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L29.8701 29.8701" stroke="white" stroke-width="5" stroke-linecap="round"/>
                            <path d="M3 30L29.8701 3.12994" stroke="white" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <!-- small screen menu links-->
                <div  class="menu-links md:hidden h-[calc(100vh-8rem)] overflow-hidden flex justify-center items-center     text-white font-super-rotesk-comp font-bold">
                    <div class="w-full h-fit max-h-full flex flex-col items-center space-y-8 px-4 pb-8 overflow-y-auto">
                        <router-link @click="showMenu = !showMenu" to="/" class="text-[2rem] block" aria-label="Inici">Inici</router-link>
                        <router-link @click="showMenu = !showMenu" to="/patronat" class="text-[2rem] block" aria-label="patronat">Patronat</router-link>
                        <router-link @click="showMenu = !showMenu" to="/equip" class="text-[2rem] block" aria-label="Equip">Equip</router-link>
                        <router-link @click="showMenu = !showMenu" to="/balanc" class="text-[2rem] block" aria-label="Balanç econòmic">Balanç econòmic</router-link>
                        <div v-collapsable class="collapsable flex flex-col gap-y-8">
                            <div class="flex justify-center items-center">
                                <router-link @click="showMenu = !showMenu" to="/impact" class="text-[2rem]" aria-label="Impacte social">Impacte social</router-link>
                                <button name="menu" class="collapse-btn w-8 h-full pl-2  ">
                                    <svg class="w-full h-full collapse-btn-chevron" width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6182 1.01838L12.4584 9.84424L1.29865 1.01838" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="collapsable-content font-super-grotesk-ot font-normal flex flex-col items-center gap-y-6 text-lg ">
                                <router-link @click="showMenu = !showMenu" to="/ocupacio-inclusiva" aria-label="Ocupació social">Ocupació inclusiva</router-link>
                                <router-link @click="showMenu = !showMenu" to="/envelliment-digne" aria-label="Envelliment social">Envelliment digne</router-link>
                                <router-link @click="showMenu = !showMenu" to="/vocacio" aria-label="Vocacions social">Vocacions i talent</router-link>
                                <router-link @click="showMenu = !showMenu" to="/territori" aria-label="Sostenibilitat social">Sostenibilitat i natura</router-link>
                                <router-link @click="showMenu = !showMenu" to="/alimentacio" aria-label="Alimentació social">Alimentació per a la salut</router-link>
                            </div>

                        </div>

                    </div>
                    
                    
                </div>
            </div>

            
            
        </div>
    </header>
</template>

<script setup> 

const showMenu = ref(false)
const isOpaque = ref(false)
const route = useRoute()
function changeHeaderLook() {
    if(window.scrollY > 128){
        isOpaque.value = true
    }else{
        isOpaque.value = false
    }
}
const blackMode = computed(()=>route.path === '/')
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
        color: black;
    }
    
</style>

