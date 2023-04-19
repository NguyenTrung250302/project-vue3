<template>
  <div class="edit-avatar">
    <!-- show avatar -->
    <div class="avatar-wrapper">
      <img :src="imageUrl">
    </div>
    <!-- handle -->
    <form @submit.prevent="uploadImage" class="handle">
      <input
        type="file"
        ref="fileInput"
        hidden
        @change="handleFileChange"
      >
      <button type="button" @click="showFileInput">Choose file</button>
      <button type="submit">Upload image</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      imageUrl: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // Lấy file ảnh được chọn bởi người dùng
      this.selectedFile = event.target.files[0];

      // Tạo đường dẫn tạm thời đến file ảnh được chọn
      this.imageUrl = URL.createObjectURL(this.selectedFile);
    },
    async uploadImage() {
      // Tạo FormData object để chứa file ảnh được chọn
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      try {
        // Gửi request POST đến API upload ảnh
        const response = await axios.post(
          "https://dev-crawler-api.trainery.live//assets",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);

        // Reset giá trị của selectedFile và imageUrl
        this.selectedFile = null;
        this.imageUrl = null;
      } catch (error) {
        console.error(error);
      }
    },
    showFileInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style scoped>
.handle {
  display: flex;
  justify-content: center;
}
.avatar-wrapper {
  width: 200px;
  height: 200px;
  border: solid 2px #333;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px auto;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
button {
  border: solid 1px ;
  margin: 5px 10px;
}
</style>
