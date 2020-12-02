import Vue from 'vue'
import Vuex from 'vuex'
// import actions from "@/vuex/actions/actions";
import axios from "axios";
// import mutations from "@/vuex/mutations/mutations";
// import getters from "@/vuex/getters/getters";


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    actions: {
        CET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SER_CART', product)
        },
        DELETE_ITEM_CART({commit}, index) {
            commit('REMOVE_ITEM_CART', index)
        },
        ADD_ITEM_AMOUNT({commit}, index) {
            commit('ADD_AMOUNT', index)
        },
        DELETE_ITEM_AMOUNT({commit}, index) {
            commit('DELETE_AMOUNT', index)
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SER_CART: (state, product) => {
            if (state.cart.length) {
                let ProductExist = false;
                state.cart.map(function (item) {
                    if (item.article === product.article) {
                        ProductExist = true;
                        item.amount++
                    }
                })
                if (!ProductExist) {
                    state.cart.push(product)
                }

            } else {
                state.cart.push(product)
            }

        },
        REMOVE_ITEM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        ADD_AMOUNT: (state, index) => {
            state.cart[index].amount++
        },
        DELETE_AMOUNT: (state, index) => {
            if (state.cart[index].amount > 1) {
                state.cart[index].amount--
            }

        }
    },

    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    }

});

export default store;