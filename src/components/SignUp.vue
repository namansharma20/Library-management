<template>
    <div class="container label">
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

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br>
        <div class="container text-center">
            <p class="form-text">New User?</p>
            <button class="btn btn-outline-info" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" @click="$emit('login')">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                name: '',
                username: '',
                email: '',
                password: '',
            }
        }
    },
    emits: ['login']
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