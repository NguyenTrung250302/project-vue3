<template>
  <div class="edit-avatar">
    <!-- handle -->
    <form @submit.prevent="submitForm">
      <div class="upload-info">
        <!-- upload file avatar -->
        <input type="file" ref="fileInput" hidden @change="handleFileChange" />
        <button type="button" @click="showFileInput">Choose avatar</button>
        <!-- info user -->
        <div class="info-user">
          <h1>CHANGE YOUR INFO ?</h1>
          <div class="info">
            <input
              type="tel"
              id="phone-number-input"
              v-model="phoneNumber"
              placeholder="phone number"
            />
            <p>{{ phoneNumber }}</p>
          </div>
          <div class="info">
            <input
              type="text"
              id="full-name-input"
              v-model="fullName"
              placeholder="full name"
            />
            <p>{{ fullName }}</p>
          </div>
          <div class="info">
            <input
              type="text"
              id="display-name-input"
              v-model="displayName"
              placeholder="display name"
            />
            <p>{{ displayName }}</p>
          </div>
        </div>
        <!-- update -->
        <button type="submit">Update</button>
      </div>
    </form>
    <!-- show avatar -->
    <div class="avatar-wrapper">
      <img :src="imageUrl" :key="imageUrl" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      dataToken: null,
      phoneNumber: "",
      displayName: "",
      fullName: "",
      imageUrl: null,
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
        // Gửi yêu cầu POST tới API/assets tải lên hình ảnh
        const upLoadResponse = await axios.post(
          "https://dev-crawler-api.trainery.live//assets",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.dataToken.accessToken}`,
            },
          }
        );
        console.log(
          "data returned after uploaded:",
          upLoadResponse.data.data.path
        );

        // Đặt avatarUrl thành URL của hình ảnh đã tải lên
        const avatarUrl = upLoadResponse.data.data.path;
        // save the selector image
        localStorage.setItem("avatarUrl", avatarUrl);
        this.$emit('avatarUpdated', avatarUrl);

        // Gửi yêu cầu PUT toi API/users để cập nhật thông tin hồ sơ của người dùng
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
        console.log("data after updated:", updateResponse.data);

        // Thay đổi giá trị biến imageUrl thành URL của ảnh đã cập nhật
        this.imageUrl = avatarUrl;

        // Đặt lại giá trị biểu mẫu
        this.selectedFile = null;
        this.imageUrl = avatarUrl;
        this.phoneNumber = updateResponse.data.data.phoneNumber;
        this.displayName = updateResponse.data.data.displayName;
        this.fullName = updateResponse.data.data.fullName;
      } catch (error) {
        console.error(error.response);
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
          let newAccessToken = refreshResponse.data.data.accessToken;
          let newRefreshToken = refreshResponse.data.data.refreshToken;
          let newTokenInfo = JSON.stringify({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
          localStorage.setItem("LoginInfo", newTokenInfo);

          // Cập nhật giá trị token cũ với thông tin mã thông báo mới
          this.dataToken.accessToken = newAccessToken;
          this.dataToken.refreshToken = newRefreshToken;
          //
          this.submitForm();
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url("@/assets/background-droplets.png");
  background-position: center left 24%;
}
.avatar-wrapper {
  width: 350px;
  height: 350px;
  border: solid 2px #333;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
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
  background-color: #fff;
  transition: background-color 0.5s ease;
  margin: 30px 200px;
  font-size: 20px;
}
button:hover {
  color: #fff;
  background-color: rgb(104, 181, 184);
  box-shadow: 1px 1px 2px 2px #333;
}
.info {
  display: flex;
  justify-content: center;
}
input {
  border: 1px solid;
  background-color: #fff;
  margin: 5px 5px;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}
input:hover {
  color: #ffffff;
  background-color: rgb(91, 169, 172);
  box-shadow: 1px 1px 2px 2px #333;
}
h1 {
  margin: 10px 15px;
  color: #fff;
  background-color: rgb(104, 181, 184);
  height: 25px;
  width: 250px;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
}
p {
  width: 250px;
  height: 35px;
  background-color: rgb(104, 181, 184);
  box-shadow: 1px 1px 1px 1px silver;
  margin: 6px 10px;
  text-align: center;
  border-radius: 5px;
}
</style>
