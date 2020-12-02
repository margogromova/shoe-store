<template>
  <div class="catalog">
    <router-link
        :to="{name: 'cart', params: {cart_data: CART}}"
    >

      <div class="catalog_link__cart">
        <img class="cart_image" :src=" require('../../assets/images/icons/cart.svg') ">
        <span>{{ CART.length }}</span>
      </div>
    </router-link>

    <h1>Каталог товаров</h1>
    <div class="catalog_list">
      <catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          v-bind:product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/catalog/CatalogItem";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Catalog",
  components: {
    CatalogItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'CET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.CET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
.catalog {
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  &_link__cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
  }

  .cart_image {
    width: 50px;
  }

  span {
    color: $btngreen;
    font-size: 20px;
  }
}
</style>