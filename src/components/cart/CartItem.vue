<template>
  <div class="cart-item">
    <img class="catalog-item__img" :src=" require('../../assets/images/' + cart_item_data.image) ">
    <div class="cart_item__info">
      <h3 class="catalog-item__name">{{ cart_item_data.name }}</h3>
      <p class="catalog-item__price">Цена: {{ cart_item_data.price }} грн.</p>
    </div>
    <div>
      <p>Количество:</p>
      <div class="cart_item__block">
        <span @click="deleteItemAmount">-</span>
        <div class="cart_item__amount">{{ cart_item_data.amount }}</div>
        <span @click="addItemAmount">+</span>
      </div>
    </div>
    <button class="btn_remove btn" @click="DeleteItemCart">
      Удалить
    </button>

  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    DeleteItemCart() {
      this.$emit('DeleteItemCart')
    },
    deleteItemAmount() {
      this.$emit('deleteAmount')
    },
    addItemAmount() {
      this.$emit('addAmount')
    }

  }
}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: $padding*2;
  margin-bottom: $margin*2;

  .btn_remove {
    background: $btnred;
  }
}

.cart_item__block {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    font-size: 20px;
  }
}

.cart_item__amount {
  padding: $padding*2;
}
</style>