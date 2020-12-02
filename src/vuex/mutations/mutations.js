export default {
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
    }
}