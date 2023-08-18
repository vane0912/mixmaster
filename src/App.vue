<template>
    <nav class="w-full flex justify-evenly p-4 bg-stronger-green my-3 items-center">
      <router-link to="/" class="text-whitebg font-semibold text-2xl"><img class="w-11" src="./assets/images/logosm.png" alt="mixmaste logo"></router-link>
      <router-link to="Non-alcoholic" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base"><p>Non-alcoholic</p></router-link>
      <router-link to="Alcoholic" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base"><p>Alcoholic</p></router-link>
      <router-link to="MostPopular" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base"><p>Most popular</p></router-link>
      <router-link to="Drink-Generator" class="text-whitebg font-semibold hover:border-b-2 hover:border-orange-600 text-base"><p>Drink Generator</p></router-link>
    </nav>
    <router-view/>
    <footer class="flex w-full p-20 justify-center items-center">
      <div>
        <img class="w-3/4" src="./assets/images/logolg.png" alt="mixmaste logo">
      </div>
      <div class="flex justify-evenly w-3/5 items-center h-full">
        <div class="flex flex-col items-center h-full justify-evenly">
          <router-link to="Drink-Generator" class="text-whitebg font-light text-xl"><p>Drink Generator</p></router-link>
          <router-link to="/" class="text-whitebg font-light text-xl"><p>All recepies</p></router-link>
          <router-link to="Alcoholic" class="text-whitebg font-light text-xl"><p>Alcoholic</p></router-link>
        </div>
        <div class="flex flex-col items-center h-full justify-evenly">
          <router-link to="Non-alcoholic" class="text-whitebg font-light text-xl"><p>Non-alcoholic</p></router-link>
          <router-link to="MostPopular" class="text-whitebg font-light text-xl"><p>Most popular</p></router-link>
        </div>
      </div>
    </footer>
</template>

