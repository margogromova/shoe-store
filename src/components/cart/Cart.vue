<script src="../../vuex/store.js"></script>
<template>
  <div class="cart">
    <router-link
        :to="{name: 'catalog'}"
    >
      <div class="catalog_link__cart">Назад</div>
    </router-link>
    <h1>Корзина</h1>
    <div v-if="!cart_data.length">
      <p>Ваша корзина пуста</p>
      <a href="#" @click.prevent="BackToStore">
        Обратно в магазин
      </a>
    </div>
    <cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @DeleteItemCart="DeleteItemCart(index)"
        @deleteAmount="deleteAmount(index)"
        @addAmount="addAmount(index)"
    />

    <div class="cart_total">
      <h2>Общая сумма:</h2>
      <p>{{ totalCart }} грн</p>
    </div>
  </div>

</template>

<script>
import CartItem from "@/components/cart/CartItem";
import {mapActions} from 'vuex'

export default {
  name: "Cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartItem
  },
  methods: {
    ...mapActions([
      'DELETE_ITEM_CART',
      'ADD_ITEM_AMOUNT',
      'DELETE_ITEM_AMOUNT'
    ]),
    DeleteItemCart(index) {
      this.DELETE_ITEM_CART(index)
    },
    BackToStore() {
      this.$router.push('/')
    },
    deleteAmount(index) {
      this.DELETE_ITEM_AMOUNT(index)
    },
    addAmount(index) {
      this.ADD_ITEM_AMOUNT(index)
    }


  },
  computed: {
    totalCart() {
      let result = []
      if (this.cart_data.length) {

        for (let item of this.cart_data) {
          result.push(item.price * item.amount)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }


    }
  }
}
</script>

<style lang="scss">
.cart {
  &_total {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $padding*3;

    h2 {
      color: #2068b0;
    }

    p {
      margin: $margin*2;
      font-size: 20px;
      color: #555;
    }
  }
}
</style>