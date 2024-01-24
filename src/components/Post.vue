<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <router-link :to="{ name: 'PostDetails', params: { postId: post.id } }">
      <img :src="post.imgSrc" alt="Imagem do post">
    </router-link>
    <p>{{ post.body }}</p>
    <div class="tag-list">
      <span v-for="(categoria, index) in post.categorias" :key="index" class="tag">{{ categoria }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 400px; 
}

.post h2 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.post p {
  color: #555;
  line-height: 1.4;
}

.post img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}

.tag-list {
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background-color: #eee;
  color: #555;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 0.8em;
}
</style>
