<template>
  <div class="footer-custom mt-auto bg-dark b-0">
    <footer>
      <p class="text-center text-white pt-2">Manuel Leon {{ year }}1 </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-custom {
  height: 3em;
}
</style>

