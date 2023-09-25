<template>
    <div class="w-full flex flex-col items-center">
        <header class="max-w-6xl sm:mx-10">
            <div class="relative">
                <img class="object-cover h-[40vh] sm:w-full sm:h-full" src="../assets/images/bgHp1.png">
                <div class="h-full bg-stronger-green/60 absolute bottom-0 p-8 flex items-center justify-evenly flex-col sm:w-full">
                    <div class="w-3/4 h-1/2 flex flex-col items-center justify-evenly">
                        <h1 class="text-backgrounds-salmon text-3xl font-bold text-center mb-5 lg:text-5xl lg:leading-[3.5rem]">Savor the Flavors: Find Irresistible Drink Recipes!</h1>
                        <Buttons @go-to="$router.push('/find-Drink')" buttontxt="Lets go!"></Buttons>
                    </div>
                </div> 
            </div>
            <div class="bg-stronger-green justify-center hidden md:flex">
                <img class="w-3/6 flex-shrink max-h-[350px]" src="../assets/images/sideimgMain.png">
                <div class="flex flex-col justify-center w-3/6 bg-backgrounds-salmon items-center p-[5%]">
                    <h1 class="text-4xl font-bold text-graytxt my-3 text-center">Drink Generator</h1>
                    <p class="text-center leading-8 text-graytxt font-extralight mb-3">Unleash mixology magic with MixMaster, the Drink Generator that creates unique and delicious drinks with a click.</p>
                    <Buttons @go-to="$router.push('/Drink-Generator')" buttontxt="Get Started!"></Buttons>
                </div>
            </div>
            <div class="md:hidden grid grid-cols-2 grid-rows-2 h-[65vh]">
                <div>
                    <img class="object-cover h-full w-full" src="../assets/images/mobile-images/celphone_1.png">
                </div>
                <div class="flex flex-col justify-center w-full bg-backgrounds-salmon items-center p-[5%]">
                    <h1 class="text-2xl font-bold text-graytxt my-3 text-center">Drink Generator</h1>
                    <p class="text-center text-graytxt font-extralight mb-3 text-xs ">Unleash mixology magic with MixMaster, the Drink Generator that creates unique and delicious drinks with a click.</p>
                    <Buttons class="" @go-to="$router.push('/Drink-Generator')" buttontxt="Get Started!"></Buttons>
                </div>
                <div>
                    <img class="object-cover h-full w-full" src="../assets/images/mobile-images/celphone_2.png">
                </div>
                <div>
                    <img class="object-cover h-full w-full" src="../assets/images/mobile-images/celphone_3.png">
                </div>
            </div>
    </header>
    <main class="w-full m-auto flex flex-col justify-center items-center">
        <div class="w-full bg-week-green flex flex-col items-center py-[5%] px-[15%]">
            <h1 class="text-backgrounds-salmon text-center text-4xl font-bold m-10 lg:text-5xl">Global Favorites: Uncovering the Most Popular Drinks!</h1>
            <p class="text-backgrounds-salmon text-center text-xl font-extralight mb-10 lg:text-2xl">Discover the essence of global flavor with our collection of the most popular drinks. From timeless classics to contemporary favorites, explore a world of taste that transcends borders and cultures.</p>
            <Buttons @go-to="$router.push('/MostPopular')" buttontxt="Get Started!"></Buttons>
        </div>
        <div class="bg-whitebg w-full flex flex-col items-center pt-[2%] px-[5%]">
            <h1 class="text-graytxt text-3xl text-center my-10 lg:text-5xl">Sips: Alcoholic & Non-Alcoholic Delights</h1>
            <p class="text-graytxt font-extralight text-base text-center lg:text-2xl">Explore a dual journey of libations with our diverse selection of alcoholic and non-alcoholic drinks. From spirited cocktails to refreshing alternatives, savor the best of both worlds.</p>
            <div class="flex flex-col w-1/2 justify-evenly my-3 items-center sm:flex-row sm:my-10">
                <Buttons class="m-1.5" @go-to="$router.push('/Alcoholic')" buttontxt="Alcoholic"></Buttons>
                <Buttons class="m-1.5" @go-to="$router.push('/Non-alcoholic')" buttontxt="Non-Alcoholic"></Buttons>
            </div>
            <img src="../assets/images/alcoholornot.png">
        </div>
    </main>
    </div>
    
</template>
<script>
import Buttons from '@/components/buttons.vue';
    export default{
    components: { Buttons }
}
</script>