<template>
  <div class="edit-avatar">
    <form @submit.prevent="submitForm">
      <input type="file" ref="fileInput" @change="onFileChange" />
      <button type="submit">Upload</button>
    </form>
    <img :src="imageURL"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      imageURL: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);
    },
    submitForm() {
      const formData = new FormData();
      formData.append("avatar", this.selectedFile);
      const accessToken = localStorage.getItem('accessToken');
      axios
        .post("https://dev-crawler-api.trainery.live//assets", formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>  
.edit-avatar {
  display:  flex;
  justify-content: center;
}
</style>