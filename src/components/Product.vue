<template>
  <Layout>
    <template v-slot:content>
  <div>
    <div v-if="productFetchError">
      <p>Has been a mistake loading a product.. Try again later.</p>
    </div>
    <div v-else>
      <div v-if="!product">Loading product</div>
      <div v-else class="col-md-11 mx-auto">
        <h2 class="text-center mb-3">Product {{ id }}</h2>

        <div class="header-sections ">
          <div class="sections-show bg-light py-5">
            <div v-if="!product">Loading transactions</div>
            <div v-else>
              <div class="row text-center mb-2">
                <div class="col fs-1">Id</div>
                <div class="col fs-1">Name</div>
                <div class="col fs-1">Price</div>
                <div class="col fs-1">Stock</div>
              </div>
              <div class="row text-center section p-1 ">
                <div class="col">{{ product.id }}</div>
                <div class="col">{{ product.name }}</div>
                <div class="col">{{ product.price }}</div>
                <div class="col">{{ product.stock }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout";

export default {
  name: "Product",
  props: ["id"],
  components: {
    Layout,
  },
  data: () => {
    return {
      product: null,
      productFetchError: false,
      url: 'http://localhost/api/product/',
    }
  },
  mounted() {
    this.fetchData()
  }, methods: {
    fetchData: function () {
      fetch(this.url + this.id, { headers:{}})
          .then( response => response.json())
          .then((data) => {
            this.product = data
          })
          .catch((err) => {
            this.productFetchError = true
            console.log(err)
          });
    }
  },
}
</script>

<style scoped>

</style>