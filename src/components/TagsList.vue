<template>
  <div class="tags-list">
    <h3>Tags</h3>
    <ul>
      
       <li v-for="category in uniqueCategories" :key="category" @click="handleTagClick(category)">
        {{ category }}
      </li>
  
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    uniqueCategories() {
      return this.$store.getters.uniqueCategories
    },
  },
  methods: {
    handleTagClick(category) {
      this.$emit('tag-clicked', category)
      console.log("clicado"+category)
    }
  }
}
</script>


<style scoped>
.tags-list {
  
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  cursor: pointer; 
}

h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}
</style>
