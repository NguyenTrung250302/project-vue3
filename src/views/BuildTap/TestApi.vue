<template>
  <div class="test">
    <button @click="getUserData">click</button>
    <p> name: {{ showName }}</p>
    <p>{{name}}</p>
    --------------------------------------------------
    <div class="card">
        <button @click="getUserData">show more</button>
        <h1>Information :</h1>
        <p>email: {{ showEmail }} </p>
        <p>address: {{ showAddress }}</p>
        <p>company: {{ showCompany }} </p>
        <p></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data() {
    return{
        showName: '',
        showEmail: '',
        showAddress: '',
        showCompany: '',
    }
},
methods: {
    // call api
    getUserData: async function() {
       const response = await axios.get('https://jsonplaceholder.typicode.com/users')
       console.log(response.data[0].name);
       this.showName = response.data[0].name;
        this.showEmail = response.data[0].email;
        this.showAddress = response.data[0].address;
        this.showCompany = response.data[0].company;
}   
}
}
</script>

<style>
.test {
    width: 100%;
    height: 500px;
    background-color: aquamarine;
}
.card {
    width: 300px;
    height: 300px;
    border: solid 1px #333333;
}
</style>