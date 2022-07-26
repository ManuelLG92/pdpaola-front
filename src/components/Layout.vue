<template>
  <div class="content">
    <div class="col-md-12" >
      <img src="../assets/pdpaola.jpeg" alt="Banner" >
    </div>
    <Navbar />
    <div class="container-fluid mb-5 mt-5 content ">
      <div class="row mx-auto">
        <div class="col-12">
          <slot name="content">

          </slot>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style scoped>
.content {
  min-height: 50vh;
  background-color: rgb(235, 243, 243);
}

img {
  height: 300px;
  width: 70%;
  display: flex;
  margin: auto;
}
</style>