<template>
    <navbar></navbar>
    <div class="container">
        <div class="mt-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Navbar from './components/Navbar.vue'

    export default {
        components: {
            'navbar': Navbar
        },
        
    }
</script>