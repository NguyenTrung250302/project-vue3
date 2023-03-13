<template>
  <div class="list-news-board">
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
    <news-board
      class="board"
      sectionName="Article 1"
      itemDescription="Cho phép xem một bản vẽ 3D, 2D bất kì bằng 
    trình duyệt online và share trong 7 ngày"
    />
  </div>
</template>

<script>
import NewsBoard from "@/BuildTapComponents/BuildTapResources/NewsBoard.vue";
export default {
  components: {
    NewsBoard,
  },
};
</script>

<style scoped>
.list-news-board {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  place-items: center;
  padding: 35px 145px;
}
</style>