<template>
  <div class="catalog-item">
    <img class="catalog-item__img" :src=" require('../../assets/images/' + product_data.image) ">

    <div class="catalog-item_info">
      <p class="catalog-item_sale">{{ product_data.sale }}%</p>
      <div>
        <h3 class="catalog-item_name">{{ product_data.name }}</h3>
        <p class="catalog-item_price">{{ product_data.price }} грн.</p>
        <p class="catalog-item_oldprice">{{ product_data.old_price }} грн.</p>
      </div>
    </div>

    <button class="btn btn_add"
            @click="addToCart"
    >В корзину
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.$set(this.product_data, 'amount', 1)
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
.catalog-item {
  border: 1px solid #edf0f4;
  padding: $padding*2;
  margin-bottom: $margin;
  background: white;

  .btn_add {
    background: $btngreen;
  }

  &_info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: baseline;

      .catalog-item_name {
        font-size: 16px;
      }
      .catalog-item_oldprice {
        text-decoration: line-through;
        color: #b9c3d0;
      }
    }

  }

  &_sale {
    font-size: 16px;
    color: #dd0808;
    font-weight: 600;
  }

  &_price {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
}

</style>