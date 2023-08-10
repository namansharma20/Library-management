<template>
    <div class="container label">
        <h1 class="text-center">Login</h1><br><br>
        <form>
            <div class="mb-3">
                <label for="exampleusername" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleusername" v-model="user.email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password">
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form><br>
        <div class="container text-center">
            <p class="form-text">Do not have an account?</p>
            <button class="btn btn-outline-info" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" @click="$emit('register')">Register</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    emits:['register'],
}
</script>

<style scoped>
.label {
    width: 400px;
    
    border: 3px solid #000000;
    padding: 40px;
    border-radius: 40px;
    margin-top: 20px;
}</style>