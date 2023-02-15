<template>
  <div class="body4">
    <div class="information">
      <div class="infor-a">
        <h1 style="margin: 70px 0 30px 0">Liên hệ ngay hôm nay</h1>
        <p style="margin-bottom: 40px">
          Giải đáp vấn đề và đề xuất giải pháp tốt nhất dành cho bạn
        </p>
        <div class="body4-row">
          <div class="body4-icons">
            <font-awesome-icon icon="fa-solid fa-phone" />
          </div>
          <div class="alignment">
            <describe-view describe="Tổng đài hỗ trợ" class="describe-body4" />
            <in-for-view Information="1-800-7181" />
          </div>
        </div>
        <div class="body4-row">
          <div class="body4-icons">
            <font-awesome-icon icon="fa-brands fa-telegram" />
          </div>
          <div class="alignment">
            <describe-view describe="Di động" class="describe-body4" />
            <in-for-view Information="1-800-7181" />
          </div>
        </div>
        <div class="body4-row">
          <div class="body4-icons">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </div>
          <div class="alignment">
            <describe-view
              describe="Email cho chung tôi "
              class="describe-body4" />
            <in-for-view Information="admin@buildtab.com" />
          </div>
        </div>
      </div>

      <div class="infor-b">
        <input-box-view inbutbox="Your Name*" style="margin-top: 70px" />
        <input-box-view inbutbox="Your Email*" />
        <text-areas-view textarea="Message..." />
        <button-sumbit />
      </div>
    </div>
  </div>
</template>

<script>
import DescribeView from '@/views/about/DescribeView.vue';
import InForView from '@/views/about/InForView.vue';
import InputBoxView from '@/views/about/InputBoxView.vue';
import TextAreasView from '@/views/about/TextAreasView.vue';
import ButtonSumbit from '@/components/layouts/button/ButtonSumbit.vue';

export default {
  name: 'HomeBody4',
  components: {
    DescribeView,
    InForView,
    InputBoxView,
    TextAreasView,
    ButtonSumbit,
  },
};
</script>

<style>
.body4 {
  width: auto;
  height: 460px;
  background-image: url(@/assets/background5.png);
  color: #fff;
  margin-bottom: 80px;
}
.information {
  display: flex;
  justify-content: space-around;
}
.body4-row {
  display: flex;
  margin-left: -10px;
  margin-bottom: 15px;
}
.body4-icons {
  margin: 30px 5px 0 10px;
}
.alignment {
  text-align: justify;
}
.describe-body4 {
  margin: 0 0 0 0;
}
.infor-a {
  margin-left: 20px;
  text-align: justify;
}
</style>
