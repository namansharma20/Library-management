<template>
    <div class="container label">
        <h1 class="text-center">Login</h1><br><br>
        <form>
            <div class="mb-3">
                <p class="form-text color-red" v-if="auth === 'passincorrect' || auth === 'nouser'">Invalid Username or Password!</p>
                <label for="exampleusername" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleusername" v-model="user.username">
                <!-- <p class="form-text color-red" v-if="auth === 'nouser'">No user found</p> -->
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
                <!-- <p class="form-text color-red" v-if="auth === 'passincorrect' || auth === 'nouser'">Password Incorrect</p> -->
            </div>

            <button @click.prevent="login" class="btn btn-primary">Submit</button>
        </form><br>
        <div class="container text-center">
            <p class="form-text">Do not have an account?</p>
            <button class="btn btn-outline-info"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                @click="$emit('register')">Register</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginView',
    data() {
        return {
            user: {
                email: '',
                password: '',
                username: '',
                name: ''
            },
            result: {},
            auth: ''
        }
    },
    emits: ['register'],
    methods: {
        login() {

            axios.get(`http://localhost:3000/users?username=${this.user.username}`).then((result) => {
                // console.log(result)
                if (result.data[0] && result.data[0].password === this.user.password) {
                    // console.log('login approved')
                    this.user = result.data[0]
                    if (this.user.admin) {
                        this.$router.push({ path: '/admin/' + this.user.username })
                    }
                    else {
                        this.$router.push({ path: '/user/' + this.user.username })
                    }
                }
                else if (result.data[0]) {
                    console.log("password did not match")
                    this.auth = 'passincorrect'
                }
                else {
                    console.log("No user found")
                    this.auth = 'nouser'
                }

            })
        }
    }
}
</script>

<style scoped>
.label {
    width: 400px;

    border: 3px solid #000000;
    padding: 40px;
    border-radius: 40px;
    margin-top: 20px;
}

.color-red {
    color: red;
}
</style>