<template>
    <div class="container">
        <h1>Admin Dashboard!</h1>
        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Issued to</th>
                    <th scope="col">Issue Date</th>
                    <th scope="col">Submit Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in books" :key="item.id"  >
                    <td><button @click="details(item.id)">{{ item.id }}</button></td>
                    <th scope="row">{{ item.name }}</th>
                    <td>{{ item.issueto }}</td>
                    <td>{{ item.issuedate }}</td>
                    <td>{{ item.submitdate }}</td>
                    <td><button :disabled="item.instock" class="btn btn-primary btn-sm" @click="unissue(item.id, item)">Unissue</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AdminView',
    data() {
        return {
            books:[],
            
            // {
            //     name: '',
            //     desc: '',
            //     img: '',
            //     issueto: '',
            //     contact: '',
            //     issuedate: '',
            //     submitdate: '',
            //     instock: false
            // }
        }
    },
    mounted(){
        axios.get("http://localhost:3000/books").then((result)=>{
            console.log(result.data)
            this.books=result.data
        })
    },
    methods:{
        details(id){
            // let book=this.books.filter((item)=>item.id===id)
            // console.log(book)
            this.$router.push({path:"/bookdetail/"+id})
        },
        unissue(id,item) {
            let updated = {
                name: item.name,
                desc: item.desc,
                img: item.img,
                issueto: '',
                contact: '',
                issuedate: '',
                submitdate: '',
                instock: true
            };
            // console.log("updated",updated)
            // console.log("book",JSON.stringify(this.book[0].name))
            // console.log("http://localhost:3000/books/" + id);
            axios.put("http://localhost:3000/books/" + id, updated).then((result) => {
                console.log(result);
            });
        },
       
    }
}
</script>

<style scoped>
.container table tbody{
    cursor: pointer;
}
</style>