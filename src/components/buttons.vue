<template>
    <button @click="$emit('go-to')" class="bg-orange-400 w-36 h-11 flex-shrink-0 rounded-lg text-backgrounds-salmon">{{ buttontxt }}</button>
</template>
<script>
    export default{
        props: ['buttontxt']
    }
</script>