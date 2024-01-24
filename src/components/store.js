import { createStore } from 'vuex'
import { createApp } from 'vue'
const app = createApp()

export default createStore({
  state: {
    posts: [
        {
          "id": 1,
          "title": "Lorem Ipsum 1",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "imgSrc": "https://picsum.photos/id/1/400/310",
          "categorias": [
            "musica",
            "animais",
            "arte"
          ]
        },
        {
          "id": 2,
          "title": "Lorem Ipsum 2",
          "body": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          "imgSrc": "https://picsum.photos/id/200/410/300",
          "categorias": [
            "arte",
            "animais"
          ]
        },
        {
          "id": 3,
          "title": "Lorem Ipsum 3",
          "body": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          "imgSrc": "https://picsum.photos/id/30/400/300",
          "categorias": [
            "musica"
          ]
        },
        {
          "id": 4,
          "title": "Lorem Ipsum 4",
          "body": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          "imgSrc": "https://picsum.photos/id/121/500/300",
          "categorias": [
            "teste"
          ]
        }
    ]
      
  },
  mutations: {
    adicionarPost(state, novoPost) {
      state.posts.push(novoPost)
    },
  },
  actions: {
    adicionarNovoPost({ commit }, novoPost) {
      commit('adicionarPost', novoPost)
    },
  },
  getters: {
    posts: state => {
      return state.posts
    },
    postById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    uniqueCategories: state => {
      const uniqueCategoriesSet = new Set()
      state.posts.forEach(post => {
        post.categorias.forEach(category => {
          uniqueCategoriesSet.add(category)
        })
      })
      return Array.from(uniqueCategoriesSet)
    },
    
  },
})
