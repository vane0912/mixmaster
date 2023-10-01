<template>
    <div class="min-h-screen bg-[url('../assets/images/Search-Results/background2.png')] bg-no-repeat bg-cover bg-center flex items-center flex-col">
        <div class="bg-stronger-green/90 py-5 w-11/12 flex justify-center mb-4">
            <h2 class="text-3xl text-whitebg font-light">{{ drinkName }}</h2>
        </div>
        <div class="bg-stronger-green/90 py-5 w-11/12 flex justify-center flex-col">
            <div class="flex justify-evenly w-full">
                <div class="mx-4 cursor-pointer">
                    <h2 ref="ingredients" @click="showIngredients" class="text-xl text-whitebg font-extralight">Ingredients</h2>
                </div>
                <div ref="instructions" @click="showInstructions" class="mx-4 cursor-pointer">
                    <h2 class="text-xl text-whitebg font-extralight">Instructions</h2>
                </div>
            </div>
            <div class="my-[10%] px-5">
                <div v-if="show">
                    <ul v-for="ingredient in instructionsarr">
                        <li v-for="childing in ingredient.ingredients"  class="text-whitebg my-4">
                            - {{ childing }}
                        </li>
                    </ul>
                </div>
                <div v-if="!show">
                    <h3></h3>
                    <p class="text-whitebg">{{ instructionsarr.map(v => v.instructions).toString()}}</p>
                </div>
            </div>
        </div>
    </div>
   
</template>
<script>
    export default{
        data(){
            return{
                drinkName: '',
                show: true,
                instructionsarr: []
            }
        },
        async beforeMount(){
            this.drinkName = this.$route.params.drinkName.charAt(0).toUpperCase() + this.$route.params.drinkName.slice(1)
            const url = 'https://api.api-ninjas.com/v1/cocktail?name=' + this.$route.params.drinkName;
            const test = {
                method: 'GET',
                headers: { 'X-Api-Key': 'jHF7iE63klR+OwPQXcyMtA==oOqKnbRmwdRO3owA'},
                contentType: 'application/json'
            }
            try{
                const api = await fetch(url, test);
                const apijson = await api.json();
                this.instructionsarr.push(apijson.find((value) => value.name = this.$route.params.drinkName));
                this.$refs.ingredients.classList.add('bottom-border'); 
            } catch {
                console.log('error');
            }
        },
        methods:{
            showIngredients(){
                this.show = true; 
                this.$refs.ingredients.classList.add('bottom-border');
                this.$refs.instructions.classList.remove('bottom-border');
            },
            showInstructions(){
                this.show = false; 
                this.$refs.instructions.classList.add('bottom-border');
                this.$refs.ingredients.classList.remove('bottom-border');
            }
        }
    }
</script>