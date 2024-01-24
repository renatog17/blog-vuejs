<template>
  <div class="post-list">
    <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from './Post.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Post
  },
  props: {
    selectedTag: String
  },
  computed: {
    
     ...mapGetters(['posts']),

    filteredPosts() {
      console.log(this.posts)
      if (!this.selectedTag) {
        return this.posts
      } else {
        return this.posts.filter(post => post.categorias.includes(this.selectedTag))
      }
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
}
</style>