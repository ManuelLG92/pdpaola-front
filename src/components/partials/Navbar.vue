<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="text-decoration-none fw-bold" to="/">
        <span class="navbar-brand">PdPaola</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="text-decoration-none" :to="{name : 'products'}">
            <li class="nav-item">
              <span class="nav-link active">Product
              </span>
            </li>
          </router-link>

          <router-link class="text-decoration-none" :to="{name : 'transactions'}">
            <li class="nav-item">
              <span class="nav-link active">Transactions
              </span>
            </li>
          </router-link>
        </ul>

      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>