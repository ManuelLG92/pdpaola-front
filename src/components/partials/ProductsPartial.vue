<template>
  <div>
    <div v-if="productsFetchError">
      <p>Has been a mistake loading lastest products.. Try again later.</p>
    </div>
    <div v-else>
      <div v-if="!products">Loading Products</div>
      <div v-else class="col-md-11 mx-auto">
        <h2 class="text-center mb-3">Latest Products &#128640;&#128640;</h2>

        <div class="header-sections ">
          <div class="sections-show bg-light py-5">
            <div>
              <div v-if="!products?.length">Loading products</div>
              <div v-else>
                <div class="row text-center mb-2">
                  <div class="col fs-1">Id</div>
                  <div class="col fs-1">Name</div>
                  <div class="col fs-1">Price</div>
                  <div class="col fs-1">Stock</div>
                </div>
                <div class="text-center section p-1 " v-for="product in products" :key="product.id">
                  <router-link class="text-decoration-none fs-5"
                               :to="{ name: 'products-id', params: { id: product.id } }"
                               title="Click to search this products's posts"><div class="row">

                      <div class="col">{{ product.id }}</div>
                      <div class="col">{{ product.name }}</div>
                      <div class="col">{{ product.price }}</div>
                      <div class="col">{{ product.stock }}</div>

                  </div>
                  </router-link>

                </div>
              </div>

            </div>

          </div>

        </div>


        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li v-for="link in links" :key="link.id" :class="(link.active) ? isActive : isNoActive"
                @click="url = link.url">
              <span v-if="link.url" class="page-link">
                <span aria-hidden="true">{{ link.label }}</span>
              </span>
            </li>
          </ul>
        </nav>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductsPartial",
  data: () => {
    return {
      products: false,
      productsFetchError: false,
      pagination: [],
      firstPage: 1,
      lastPage: 1,
      totalPages: 1,
      itemsByPage: 1,
      totalItems: 1,
      links: [],
      isActive: 'page-item active no-allowed',
      isNoActive: 'page-item',
      url: 'http://localhost/api/product'
    }
  },
  mounted() {
    this.fetchData()
  }, methods: {
    fetchData: function () {
      fetch(this.url, {headers: {}})
          .then(response => response.json())
          .then((data) => {
            this.products = data.data
            this.pagination = data
            this.links = data.links
          })
          .catch((err) => {
            this.productsFetchError = true
            console.log(err)
          });
    }
  },
  watch: {
    url: function () {
    this.fetchData();
    }
  },
}
</script>

<style scoped>
.pagination .page-item {
  cursor: pointer;
}

.pagination .no-allowed {
  cursor: not-allowed !important;
}

</style>