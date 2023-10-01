<template>
    <button @keyup.enter="" @click="$emit('go-to')" class="bg-orange-400 w-32 h-10 rounded-lg text-backgrounds-salmon md:w-40">{{ buttontxt }}</button>
</template>
<script>
    export default{
        props: ['buttontxt']
    }
</script>