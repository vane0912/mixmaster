<template>
    <div v-if="ifMenuOpen" class="bg-stronger-green/50 h-screen w-screen fixed"></div>
    <nav>
        <div class="w-full justify-between py-4 px-10 bg-stronger-green my-3 flex items-center lg:justify-evenly lg:p-4">
          <router-link to="/" class="text-whitebg font-semibold text-2xl z-10" ><img class="w-11" src="../assets/images/logosm.png" alt="mixmaste logo"></router-link>
          <div @click="openMobileMenu()" class="lg:hidden cursor-pointer z-10">
            <img src="../assets/images/mobile-images/hamburguer.png">
          </div>
          <div ref="showMenuMobile" :class="['w-3/5','absolute','bg-stronger-green','top-24','right-0','z-10','items-center','justify-evenly','flex-col','lg:flex-row','lg:contents',{'flex': ifMenuOpen, 'hidden': !ifMenuOpen}]">
            <p class="my-7 lg:m-0"><router-link to="Non-alcoholic" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base">Non alcoholic</router-link></p>
            <p class="my-7 lg:m-0"><router-link to="Alcoholic" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base">Alcoholic</router-link></p>
            <p class="my-7 lg:m-0"><router-link to="find-Drink" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base">Search Drink</router-link></p>
            <p class="my-7 lg:m-0"><router-link to="Drink-Generator" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base">Drink Generator</router-link></p>
          </div>
        </div>
    </nav>
</template>
<script>
  export default{
    data(){
      return{
        ifMenuOpen: false
      }
    },
    watch:{
      '$route'(){
        this.ifMenuOpen = false;
        document.body.classList.remove("fixed")
      }
    },
    methods:{
      openMobileMenu(){
        this.ifMenuOpen = false
        document.body.classList.remove("fixed")
        if (this.$refs.showMenuMobile.classList.contains("hidden")){ 
          this.ifMenuOpen = true
          document.body.classList.add("fixed")
        }
      }
    }
  }
</script>