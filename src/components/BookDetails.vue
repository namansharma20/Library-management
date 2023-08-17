<template>
    <div class="container">
    <h1>Book Details</h1>
    <button class="btn btn-primary " @click="edit = !edit">Edit</button>
    <button class="btn btn-primary mx-3" @click="unissue()">Unissue</button>
    <!-- <button class="btn btn-primary "><RouterLink :to="{name:'AdminHome'}">Home</RouterLink></button> -->
    
    <br><br><br>
    <div class="container" v-if="edit === true">
        <form>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="name" class="col-form-label">Name</label>
                </div>
                <div class="col">
                    <input :required="true" type="text" id="name" class="form-control"  v-model="book.name"/>
                </div>
            </div>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="desc" class="col-form-label">Description:</label>
                </div>
                <div class="col">
                    <textarea :required="true" type="text" id="desc" class="form-control" v-model="book.desc" />
                </div>
            </div>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="name" class="col-form-label">Issue To</label>
                </div>
                <div class="col">
                    <input :required="true" type="text" id="name" class="form-control"  v-model="book.issueto"/>
                </div>
            </div>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="name" class="col-form-label">Contact</label>
                </div>
                <div class="col">
                    <input :required="true" type="text" id="name" class="form-control"  v-model="book.contact"/>
                </div>
            </div>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="name" class="col-form-label">Issue Date</label>
                </div>
                <div class="col">
                    <input :required="true" type="text" id="name" class="form-control"  v-model="book.issuedate"/>
                </div>
            </div>
            <div class="row g-3 align-items-center mb-3">
                <div class="col-auto">
                    <label for="name" class="col-form-label">Submit Date</label>
                </div>
                <div class="col">
                    <input :required="true" type="text" id="name" class="form-control"  v-model="book.submitdate"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="editbook">Submit</button>
            <button type="submit" class="btn btn-secondary mx-2" @click="edit=false" >Cancel</button>

        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BookDetails',
    data() {
        return {
            book: {},
            edit: true
        };
    },
    mounted() {
        axios.get("http://localhost:3000/books?id=" + this.$route.params.bookid).then((result) => {
            this.book = result.data[0];
            // console.log("book", this.book);
        });
        // console.log(this.$route.params.bookid);
    },
    methods: {
        unissue() {
            let updated = {
                name: this.book.name,
                desc: this.book.desc,
                img: this.book.img,
                issueto: '',
                contact: '',
                issuedate: '',
                submitdate: '',
                instock: true
            };
            // console.log("updated",updated)
            // console.log("book",JSON.stringify(this.book[0].name))
            console.log("http://localhost:3000/books/" + this.$route.params.bookid);
            axios.put("http://localhost:3000/books/" + this.$route.params.bookid, updated).then((result) => {
                console.log(result);
            });
        },
        editbook(){
            this.book.instock=false;
            axios.put("http://localhost:3000/books/" + this.$route.params.bookid, this.book).then((result) => {
                console.log(result);
            });
            console.log("book", this.book);
        }
    },
    // components: { FormInput }
}
</script>

<style>

</style>