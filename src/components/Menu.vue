<template>
  <div class="menu">
    <ul>
      <MenuItem class="link" to="/">Página Inicial</MenuItem>
      <MenuItem class="link" to="/about">Sobre</MenuItem>
      <MenuItem class="link" to="/contact">Contato</MenuItem>
      <MenuItem class="link" to="/favorites">Favoritos</MenuItem>
      <MenuItem class="link" to="/community">Comunidade</MenuItem>
      <MenuItem class="link" to="/notifications">Notificações</MenuItem>
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {
    MenuItem,
  },
}
</script>

<style scoped>
.menu {
  color: #000000;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.link {
  text-decoration:none;
  color: black;
}

.link:hover {
  text-decoration: none;
  color: #000000;
}

.link:active {
  text-decoration: none;
  color: #000000;
}

</style>
