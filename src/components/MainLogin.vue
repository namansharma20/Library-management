<template>
    <LoginView v-if="login" @register="login = false" />
    <SignUp v-else @login="login = true" />
</template>

<script>
import LoginView from './LoginView.vue'
import SignUp from './SignUp.vue'
export default {
    name: 'MainLogin',
    data() {
        return {
            login: true,
        }
    },
    components: {
        LoginView,

        SignUp
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        let admin = localStorage.getItem('admin-info')
        if (user) {
            this.$router.push({ name: 'UserHome' })
        }
        else if(admin){
            this.$router.push({ name: 'AdminHome' })
        }
    },
}
</script>

<style scoped></style>