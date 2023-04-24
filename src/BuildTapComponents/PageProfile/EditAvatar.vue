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
      dataToken: null,
      phoneNumber: "",
      displayName: "",
      fullName: "",
    };
  },
  created() {
    // data Token login info
    this.dataToken = JSON.parse(localStorage.getItem("LoginInfo"));
    console.log("authentication token:", this.dataToken);
  },
  methods: {
    // xu ly su kien
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

      try {
        // Gửi yêu cầu POST tới API tải lên hình ảnh
        const response = await axios.post(
          "https://dev-crawler-api.trainery.live//assets",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
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
              Authorization: `Bearer ${this.dataToken.accessToken}`,
            },
          }
        );
        console.log("data after executing put:", updateResponse.data);
        // Thay đổi giá trị biến imageUrl thành URL của ảnh đã cập nhật
        this.imageUrl = avatarUrl;
        alert("update successfully");

        // Đặt lại giá trị biểu mẫu
        this.selectedFile = null;
        this.imageUrl = null;
        this.phoneNumber = "";
        this.displayName = "";
        this.fullName = "";
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          // Refresh token và cập nhật lại giá trị token vào localStorage
          const refreshResponse = await axios.post(
            "https://dev-crawler-api.trainery.live//master-caoanh/auth/refresh-token",
            {},
            {
              headers: { "refresh-token": this.dataToken.refreshToken },
            }
          );
          console.log("new token refresh:", refreshResponse.data.data);

          // Lưu trữ mã thông báo mới và cập nhật vào localStorage
          const newAccessToken = refreshResponse.data.data.accessToken;
          const newRefreshToken = refreshResponse.data.data.refreshToken;
          const newLoginInfo = JSON.stringify({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
          localStorage.setItem("LoginInfo", newLoginInfo);

          // Cập nhật giá trị token cũ với thông tin mã thông báo mới
          this.dataToken.accessToken = newAccessToken;
          this.dataToken.refreshToken = newRefreshToken;
        }
      }
    },
    //
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
