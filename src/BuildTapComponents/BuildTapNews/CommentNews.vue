<template>
  <div class="comment-container">
    <h2 class="comment-heading">Bình luận</h2>
    <div class="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong class="comment-author">Name: {{ comment.author }}</strong>
        <p class="comment-content">Comment: {{ comment.content }}</p>
      </div>
    </div>
    <form class="comment-form" @submit.prevent="addComment">
      <input v-model="newComment.author" placeholder="Tên người dùng" required />
      <textarea v-model="newComment.content" placeholder="Nội dung bình luận" required></textarea>
      <button type="submit" class="comment-submit">Gửi</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        { id: 1, author: "những chú chim lạc lối", content: "hay" },
        { id: 2, author: "Hanna", content: "Ok" }
      ],
      newComment: { author: "", content: "" }
    };
  },
  methods: {
    addComment() {
      if (this.newComment.author && this.newComment.content) {
        const newId = this.comments.length + 1;
        const newComment = { id: newId, ...this.newComment };
        this.comments.push(newComment);
        this.newComment.author = "";
        this.newComment.content = "";
      }
    }
  }
};
</script>

<style scoped>
.comment-container {
  max-width: 600px;
  margin: 0 auto;
}

.comment-heading {
  text-align: center;
  color: #333;
}

.comment-list {
  margin-bottom: 20px;
}

.comment-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.comment-author {
  font-weight: bold;
  color: #555;
}

.comment-content {
  margin-top: 5px;
  color: #333;
}

.comment-form input,
.comment-form textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.comment-form textarea {
  resize: vertical;
}

.comment-submit {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
}

.comment-submit:hover {
  background-color: #0056b3;
}
h2 {
    font-weight: 700;
    font-size:  30px;
    color: aquamarine;
}
</style>
