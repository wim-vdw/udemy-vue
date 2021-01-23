import { createStore } from 'vuex';
import productModule from './productModule.js';
import cartModule from './cartModule.js';

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
});

export default store;
