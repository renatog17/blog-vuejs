<template>
  <div class="post-details" v-if="post">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ post.body }}</p>
    <div class="image-container">
      <img class="post-image" :src="post.imgSrc" alt="Post Image">
    </div>
    <router-link to="/" class="back-to-home">Voltar ao Início</router-link>
  </div>
  <div v-else>
    <p class="not-found-message">Post não encontrado.</p>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      const postId = parseInt(this.$route.params.postId)
      return this.$store.getters.postById(postId)
    }
  },
}
</script>

<style scoped>

.post-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.post-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.post-body {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

.image-container {
  text-align: center;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
}

.back-to-home {
  display: block;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  color: #007bff; 
  cursor: pointer;
}

.back-to-home:hover {
  text-decoration: underline;
}
</style>
