<template>
  <Layout>
    <template v-slot:content>
      <LatestPosts/>
    </template>
  </Layout>

</template>

<script>

import LatestPosts from "./partials/ProductsPartial";
import Layout from "./Layout";

export default {
  name: 'Products',
  components: {
    Layout,
    LatestPosts
  }
}
</script>

<style>

</style>