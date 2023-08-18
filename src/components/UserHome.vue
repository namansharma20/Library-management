<template>
<div class="container">
    <h1>User Dashboard!</h1>
    <a href="" v-on:click="logout">Logout</a>
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>

                <th scope="col">Issue Date</th>
                <th scope="col">Submit Date</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="item in books" :key="item.id">
                <td>{{ item.id }}</td>
                <th scope="row">{{ item.name }}</th>

                <td>{{ item.issuedate }}</td>
                <td>{{ item.submitdate }}</td>

            </tr>
        </tbody>
    </table>
</div>
<div class="container">
    <h1>Available Books</h1>
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="item in available" :key="item.id">
                <td>{{ item.id }}</td>
                <th scope="row">{{ item.name }}</th>

            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserHome',
    data() {
        return {
            books: [],
            available: []
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');

        if (!user) {
            this.$router.push({
                name: 'Login'
            });
        }
        
        else{
        axios.get("http://localhost:3000/books?issueto=" + this.$route.params.username).then((result) => {

            this.books = result.data
            console.log(this.books)
        })
        axios.get("http://localhost:3000/books?issueto=").then((result) => {

            this.available = result.data
            console.log(this.available)
        })
        }
    },
    methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'})
            }
    }
}
</script>

<style scoped></style>
