<template>
    <div class="container label">
        <h1 class="text-center">Register</h1><br><br>
        <form>
            <div class="mb-4">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName" v-model="user.name">
            </div>
            <div class="input-group flex-nowrap mb-4">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                    aria-describedby="addon-wrapping" v-model="user.username">
            </div>
            <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="user.email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-4">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
                <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                    special characters, or emoji.
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="user.admin">
                <label class="form-check-label" for="exampleCheck1">Check for admin</label>
            </div>
            <div class="mb-4" v-if="user.admin === true">
                <label for="exampleInputName" class="form-label">Answer the secret question!</label>
                <input type="text" class="form-control" id="exampleInputName" v-model="check">
                <p class="form-text color-red" v-if="check !== ans">Incorrect answer</p>
            </div>
            <button @click.prevent="signup" class="btn btn-primary">Submit</button>
        </form>
        <br>
        <div class="container text-center">
            <p class="form-text">Already have an account?</p>
            <button class="btn btn-outline-info"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                @click="$emit('login')">Login</button>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                password: '',
                admin: false
            },
            check: '',
            ans: 'admin'
        }
    },
    emits: ['login'],
    methods: {
        signup() {
            if (this.check === this.ans) {

                console.log(this.user)
                axios.post("http://localhost:3000/users", this.user).then((result) => {

                    console.log(result);
                    if (result.status === 201) {
                        this.$router.push({ path: '/admin/' + this.user.username })
                    }
                })
            }
            else if (this.user.admin === false) {
                console.log(this.user)
                axios.post("http://localhost:3000/users", this.user).then((result) => {

                    console.log(result);
                    if (result.status === 201) {
                        this.$router.push({ path: '/user/' + this.user.username })
                    }
                })
            }

        }
    }
}
</script>

<style scoped>
.label {
    width: 400px;
    border: 3px solid #000000;
    padding: 20px;
    border-radius: 40px;
    margin-top: 20px;

}
</style>