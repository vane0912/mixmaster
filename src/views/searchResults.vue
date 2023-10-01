<template>
    <div class="w-full min-h-full bg-search-result bg-center bg-cover flex flex-col items-center">
            <div class="flex flex-col md:flex-row items-center w-3/4 mt-10">
                <input ref="searchValue" type="text" placeholder="Ron, Margarita, Whiskey..." class="h-1/4 bg-stronger-green text-backgrounds-salmon mb-3 p-3 font-extralight rounded-sm sm:h-1/6 md:mb-0 w-full">
                <FindDrinkButton @go-to="apitest" buttontxt="Lets go!"></FindDrinkButton>
            </div>
            <div class="flex justify-evenly py-6 mt-[5%] items-center w-3/4 flex-col sm:mt-0">
                <div v-for="num in fakearray" class="w-full bg-week-green p-5 flex flex-row items-center my-[1%] justify-between">
                    <div>
                        <h2 class="text-whitebg text-2xl">{{num.name.charAt(0).toUpperCase() + num.name.slice(1)}}</h2>
                        <p class="text-whitebg font-extralight text-base">See full recepie</p>
                    </div>
                    <button @click="this.$router.push(`/${num.name}`)" class="bg-orange-400 w-14 flex-shrink-0 h-10 flex items-center justify-center rounded-lg text-backgrounds-salmon">
                        <img class="w-6 h-4 "  src="../assets/images/icons/icons8-arrow-24.png">
                    </button>
                </div>
            </div>
    </div>
</template>
<script>
    import FindDrinkButton from '@/components/buttons.vue'
    export default{
        components: {FindDrinkButton},
        data(){
            return {
                fakearray: []
            }
        },
        async beforeMount(){
            const url = 'https://api.api-ninjas.com/v1/cocktail?name=' + this.$route.params.id;
            const test = {
                method: 'GET',
                headers: { 'X-Api-Key': 'jHF7iE63klR+OwPQXcyMtA==oOqKnbRmwdRO3owA'},
                contentType: 'application/json'
            }
            try{
                const api = await fetch(url, test);
                const apijson = await api.json();
                this.fakearray = apijson;
            } catch {
                console.log('error')
            }
        }
    }
</script>