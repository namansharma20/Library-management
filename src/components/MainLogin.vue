<template>
    <LoginView v-if="login" @register="login=false"/>
    <SignUp v-else @login="login=true"/>
</template>

<script>
import LoginView from './LoginView.vue'
import SignUp from './SignUp.vue'
    export default {
        name:'MainLogin',
        data(){
            return{
                login:true,
            }
        },
        components:{
            LoginView,
            
            SignUp
        }
    }
</script>

<style scoped>

</style>