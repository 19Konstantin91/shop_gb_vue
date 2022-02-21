<template>
  <div class="page">
      <header>
        <Header></Header>
      </header>
      <router-view v-bind:list="catalog" />
      <footer>
        <Footer></Footer>
      </footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
      Header,
      Footer,
  },
  data() {
    return {
      catalog: [],
      cart: []
    }
  },
  mounted() {
    this.catalog = [
      {id: 1, title: 'Куртка', price: 1000},
      {id: 2, title: 'Куртка', price: 2000},
      {id: 3, title: 'Куртка', price: 3000},
      {id: 4, title: 'Куртка', price: 4000},
      {id: 5, title: 'Куртка', price: 5000},
      {id: 6, title: 'Куртка', price: 6000}
    ]
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Lato Light', sans-serif;
}

.container {
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
