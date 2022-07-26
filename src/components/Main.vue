<template>
        <Layout >
          <template v-slot:content>
            <div class="p-5 m-5">
            <h1>Welcome to PdPaola technical test</h1>
            <h1>Here you can fetch all product, transactions and modify products stock through a transaction.</h1>
            </div>
          </template>
        </Layout>

</template>

<script>

// import LatestPosts from "./LatestPosts";
import Layout from "./Layout";
// import Transactions from "@/components/Transactions";
// import Products from "@/components/Products";

export default {
  name: 'Main',
  components: {
    // Products,
    // Transactions,
    Layout,
    // LatestPosts
  }
}
</script>

<style>

</style>