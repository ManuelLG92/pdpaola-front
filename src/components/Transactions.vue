<template>
  <Layout>
    <template v-slot:content>
      <TransactionsPartial/>
    </template>
  </Layout>

</template>

<script>

import Layout from "./Layout";
import TransactionsPartial from "./partials/TransactionsPartial";

export default {
  name: 'Transactions',
  components: {
    Layout,
    TransactionsPartial
  }
}
</script>

<style>

</style>