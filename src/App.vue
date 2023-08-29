<template>
    <navbar></navbar>
    <router-view/>
    <footervue></footervue>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footervue from './components/footer.vue';
    export default{
    components: { navbar, footervue}
}
</script>
