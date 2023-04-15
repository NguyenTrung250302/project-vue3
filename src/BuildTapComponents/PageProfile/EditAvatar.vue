<template>
  <div class="edit-avatar-container">
    <h2>Edit Avatar</h2>
    <form @submit.prevent="submitForm">
      <input type="file" ref="fileInput" accept="image/*" @change="onFileSelected">
      <button type="submit" :disabled="!selectedFile">Save</button>
    </form>
    <div v-if="imageUrl">
      <h3>Preview</h3>
      <img :src="imageUrl" alt="Avatar Preview">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
      imageUrl: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.previewImage();
    },
    previewImage() {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = event => {
        this.imageUrl = event.target.result;
      };
    },
    submitForm() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      axios.post('https://dev-crawler-api.trainery.live/assets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Avatar uploaded successfully!');
        this.$emit('avatar-updated', response.data.url);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style>
.edit-avatar-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form {
  margin-bottom: 20px;
}

input[type="file"] {
  margin-right: 10px;
}

button[type="submit"] {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
}

button[type="submit"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

h2, h3 {
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>
