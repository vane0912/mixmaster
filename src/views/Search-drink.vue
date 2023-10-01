<template>
    <div class="w-full flex flex-col items-center">
        <header class="max-w-6xl sm:mx-10">
            <div class="relative">
                <img class="object-cover h-[40vh] sm:w-full sm:h-full" src="../assets/images/All-Drinks/header-all-drinks.png">
                <div class="h-full w-full bg-stronger-green/60 absolute bottom-0 p-8 flex items-center justify-evenly flex-col">
                    <div class="w-full h-1/2 flex flex-col items-center justify-evenly">
                        <div class="flex flex-col items-center justify-center m-5">
                            <h1 class="text-backgrounds-salmon text-xl font-bold text-center mb-2 md:text-5xl">Drink Explorer: Find Your Perfect Sip</h1>
                            <div class="h-1 bg-buttons-orange w-2/4"></div>
                        </div>
                        <p class="text-backgrounds-salmon text-xs font-extralight w-3/4 text-center md:text-2xl">Discover, Mix, Enjoy: Search by Drink, Alcohol Type, and More!</p>
                        <div class="flex flex-col md:flex-row items-center justify-evenly w-3/4">
                            <input ref="searchValue" type="text" placeholder="Ron, Margarita, Whiskey..." class="h-1/4 bg-stronger-green text-backgrounds-salmon p-5 my-4 font-extralight rounded-sm sm:h-1/6 sm:w-3/4">
                            <FindDrinkButton @go-to="apitest" buttontxt="Lets go!"></FindDrinkButton>
                        </div>
                    </div>
                </div> 
            </div>
        </header>
        <main class="m-auto max-w-6xl">
            <h1 class="text-backgrounds-salmon text-2xl font-bold text-center m-10 md:text-4xl">Most Popular</h1>
            <div class="w-full grid grid-cols-2 grid-rows-3 gap-3 px-[5%] sm:grid-cols-3 sm:grid-rows-2">
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6" src="../assets/images/All-Drinks/drink1.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6" src="../assets/images/All-Drinks/drink2.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6" src="../assets/images/All-Drinks/drink3.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6"  src="../assets/images/All-Drinks/drink4.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6" src="../assets/images/All-Drinks/drink5.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="hover:bg-week-green hover:drop-shadow-2xl cursor-pointer flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <img class="sm:w-5/6" src="../assets/images/All-Drinks/drink6.png" alt="">
                    </div>
                    <div class="w-5/6">
                        <h3 class="text-backgrounds-salmon font-bold text-lg my-[4%]">Lorem ipsum</h3>
                        <p class="text-backgrounds-salmon font-extralight my-[4%]">dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    import FindDrinkButton from '../components/buttons.vue'
    export default{
        components: {FindDrinkButton},
        methods:{
            apitest(){
                const name = this.$refs.searchValue.value;
                this.$router.push(`/searchResults/${name}`)
            }
        }
    }
</script>