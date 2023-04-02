<template>
  <div class="test">
    <nav>test API</nav>
    --------------------------------------------------
    <div class="card">
        <button @click="getUserData">show here</button>
        <p>email: {{ showEmail }} </p>
        <p>address: {{ showAddress }}</p>
        <p>company: {{ showCompany }} </p>
        <p>phone number:{{showPhoneNumber}}</p>
        <p>website: {{showWebsite}}</p>
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
        showPhoneNumber: '',
        showWebsite: ''
    }
},
methods: {
    // call api


    getUserData: async function() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
       console.log(response.data[0].name);
       this.showName = response.data[0].name;
        this.showEmail = response.data[0].email;
        this.showAddress = response.data[0].address.city;
        this.showCompany = response.data[0].company.name;
        this.showPhoneNumber = response.data[0].phone;
        this.showWebsite = response.data[0].website;
}   
}
}
</script>

<style>
.test {
    width: 100%;
    height: auto;
    background-color: aquamarine;
}
.card {
    width: 300px;
    height: 300px;
    border: solid 1px #333333;
}
p {
    color: red;
}
</style>