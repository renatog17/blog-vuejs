<template>
  <div>
    <h2>Novo Post</h2>
    <form @submit.prevent="adicionarNovoPost">
      <label for="title">Título:</label>
      <input type="text" v-model="novoPost.title" required>

      <label for="body">Corpo:</label>
      <textarea v-model="novoPost.body" required></textarea>

      <label for="imgSrc">URL da Imagem:</label>
      <input type="text" v-model="novoPost.imgSrc" required>

    
      <input type="hidden" v-model="novoPost.categorias" value="musica">

      <button type="submit">Adicionar Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoPost: {
        title: '',
        body: '',
        imgSrc: '',
        categorias: ['musica'],
      },
    }
  },
  methods: {
    adicionarNovoPost() {
      
      this.$store.dispatch('adicionarNovoPost', this.novoPost)
      this.novoPost = {
        id:'5',
        title: '',
        body: '',
        imgSrc: '',
        categorias: ['musica'],
      }
    },
  },
}
</script>
