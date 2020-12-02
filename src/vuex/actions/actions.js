import axios from "axios";

export default {
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
    }
}