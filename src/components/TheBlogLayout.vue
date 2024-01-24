<template>

  <div class="blog-layout">
    <div class="sidebar-left">
      <Menu />
    </div>

    <div class="main-content">
      <PostList :selectedTag="selectedTag" />
    </div>

    <div class="sidebar-right">
      <TagsList @tag-clicked="handleTagClick" />
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import PostList from './PostList.vue'
import TagsList from './TagsList.vue'

export default {
  components: {
    Menu,
    PostList,
    TagsList,
  },
  data() {
    return {
      selectedTag: null
    }
  },
  methods: {
    handleTagClick(tag) {
      this.selectedTag = tag
    }
  }
}



</script>

<style scoped>


.blog-layout {
  display: grid;
}
.sidebar-left, .main-content, .sidebar-right {
  flex: 1;
  margin: 0 100px;
  
}
.sidebar-left, .sidebar-right {
  position: fixed;
  height: 100vh;
  padding: 20px;
}

.sidebar-left {
  left: 0;
  border-right: 1px solid #f0f0f0;
}

.sidebar-right {
  right: 0;
  border-left: 1px solid #f0f0f0;
}
</style>
