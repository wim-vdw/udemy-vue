export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    cartQuantity(state) {
      return state.qty;
    },
    cartTotal(state) {
      return state.total.toFixed(2);
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === payload.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += payload.price;
    },
    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProductToCart(context, payload) {
      context.commit('addProductToCart', payload);
    },
    removeProductFromCart(context, prodId) {
      context.commit('removeProductFromCart', prodId);
    },
  },
};
