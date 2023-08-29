<template>
    <footer class="flex flex-col w-full p-20 justify-center items-center md:flex-row">
        <div class="flex justify-center">
          <img class="w-3/4" src="../assets/images/logolg.png" alt="mixmaste logo">
        </div>
        <div class="flex justify-evenly w-3/5 items-center h-full flex-col md:flex-row">
          <div class="flex flex-col items-center h-full justify-evenly">
            <router-link to="Drink-Generator" class="text-whitebg font-light text-xl my-2 text-center"><p>Drink Generator</p></router-link>
            <router-link to="/" class="text-whitebg font-light text-xl my-2 text-center"><p>All recepies</p></router-link>
            <router-link to="Alcoholic" class="text-whitebg font-light text-xl my-2 text-center"><p>Alcoholic</p></router-link>
          </div>
          <div class="flex flex-col items-center h-full justify-evenly">
            <router-link to="Non-alcoholic" class="text-whitebg font-light text-xl my-2 text-center"><p>Non-alcoholic</p></router-link>
            <router-link to="find-Drink" class="text-whitebg font-light text-xl my-2 text-center"><p>Search Drink</p></router-link>
          </div>
        </div>
    </footer>
</template>