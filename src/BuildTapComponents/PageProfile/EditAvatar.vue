<template>
  <div class="edit-avatar">
    <!-- show avatar -->
    <div class="avatar-wrapper">
      <img :src="imageUrl" :key="imageUrl" />
    </div>
    <!-- handle -->
    <form @submit.prevent="submitForm" class="handle">
      <input type="file" ref="fileInput" hidden @change="handleFileChange" />
      <button type="button" @click="showFileInput">Choose file</button>
      <button type="submit">Update profile</button>
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
      phoneNumber: "",
      displayName: "",
      fullName: "",
    };
  },
  // refresh token
  mounted() {
    // 
  },
  //
  methods: {
    handleFileChange(event) {
      // Nhận tệp hình ảnh đã chọn
      this.selectedFile = event.target.files[0];

      // Tạo một URL tạm thời để hiển thị hình ảnh đã chọn
      this.imageUrl = URL.createObjectURL(this.selectedFile);
    },
    async submitForm() {
      // Tạo một đối tượng FormData để giữ tệp hình ảnh đã chọn
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      // accessToken login
      const token = JSON.parse(localStorage.getItem("TokenLogin"));
      console.log("Token đã lưu trữ:", token);
      try {
        // Gửi yêu cầu POST tới API tải lên hình ảnh
        const response = await axios.post(
          "https://dev-crawler-api.trainery.live//assets",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("data returned after posting:", response.data);

        // Đặt avatarUrl thành URL của hình ảnh đã tải lên
        const avatarUrl = response.data.url;

        // Gửi yêu cầu PUT để cập nhật thông tin hồ sơ của người dùng
        const updateResponse = await axios.put(
          "https://dev-crawler-api.trainery.live//master-caoanh/users",
          {
            phoneNumber: this.phoneNumber,
            avatarUrl: avatarUrl,
            displayName: this.displayName,
            fullName: this.fullName,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("data after executing put:", updateResponse.data);
        this.imageUrl = avatarUrl;
        alert("update successfully");

        // Đặt lại giá trị biểu mẫu
        this.selectedFile = null;
        this.imageUrl = avatarUrl;
        this.phoneNumber = "";
        this.displayName = "";
        this.fullName = "";
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
.edit-avatar {
  height: 500px;
  width: 100%;
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
  width: 150px;
  border: solid 1px;
  border-radius: 5px;
  margin: 5px 10px;
   transition: background-color 0.5s ease;
}
button:hover {
  color: #fff;
  background-color: #333;
  box-shadow: 1px 1px 2px 2px #333;
}
.handle {
  display: flex;
  justify-content: center;
}
</style>
