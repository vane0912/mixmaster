<template>
    <header class="w-full flex flex-col items-center">
        <div class="max-w-6xl mx-10">
            <div class="relative flex justify-center">
            <img class="w-full h-full" src="../assets/images/bgHp1.png">
            <div class="w-full h-full bg-week-green/50 absolute bottom-0 rounded-sm p-8 flex items-center justify-evenly flex-col">
                <div class="w-1/2 h-1/2 flex flex-col items-center justify-evenly">
                    <h1 class="text-backgrounds-salmon text-5xl leading-[3rem] font-bold text-center">Savor the Flavors: Find Irresistible Drink Recipes!</h1>
                    <Buttons @go-to="$router.push('/find-Drink')" buttontxt="Lets go!"></Buttons>
                </div>
            </div> 
            </div>
            <div class="flex bg-stronger-green justify-center">
                <img class="w-3/6 flex-shrink max-h-[350px]" src="../assets/images/sideimgMain.png">
                <div class="flex flex-col justify-center w-3/6 bg-backgrounds-salmon items-center p-[5%] flex-shrink">
                    <h1 class="text-4xl font-bold text-graytxt my-3 text-center">Drink Generator</h1>
                    <p class="text-center leading-8 text-graytxt font-extralight mb-3">Unleash mixology magic with MixMaster, the Drink Generator that creates unique and delicious drinks with a click.</p>
                    <Buttons @go-to="$router.push('/Drink-Generator')" buttontxt="Get Started!"></Buttons>
                </div>
            </div>
        </div>
    </header>
    <main class="w-full m-auto flex flex-col justify-center items-center">
        <div class="w-full bg-week-green flex flex-col items-center py-14 px-[15%]">
            <h1 class="text-backgrounds-salmon text-center text-5xl font-bold m-10">Global Favorites: Uncovering the Most Popular Drinks!</h1>
            <p class="text-backgrounds-salmon text-center text-2xl font-extralight mb-10">Discover the essence of global flavor with our collection of the most popular drinks. From timeless classics to contemporary favorites, explore a world of taste that transcends borders and cultures.</p>
            <Buttons @go-to="$router.push('/MostPopular')" buttontxt="Get Started!"></Buttons>
        </div>
        <div class="bg-whitebg w-full flex flex-col items-center pt-[2%] px-[20%]">
            <h1 class="text-graytxt text-5xl text-center m-10">Sips: Alcoholic & Non-Alcoholic Delights</h1>
            <p class="text-graytxt font-extralight text-2xl text-center">Explore a dual journey of libations with our diverse selection of alcoholic and non-alcoholic drinks. From spirited cocktails to refreshing alternatives, savor the best of both worlds.</p>
            <div class="flex w-1/2 justify-between my-10">
                <Buttons class="m-1.5" @go-to="$router.push('/Alcoholic')" buttontxt="Alcoholic"></Buttons>
                <Buttons class="m-1.5" @go-to="$router.push('/Non-alcoholic')" buttontxt="Non-Alcoholic"></Buttons>
            </div>
            <img src="../assets/images/alcoholornot.png">
        </div>
    </main>

</template>
<script>
import Buttons from '@/components/buttons.vue';
    export default{
    components: { Buttons }
}
</script>