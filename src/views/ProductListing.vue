<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Your Catalog</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="searchQuery" label="Search Product" prepend-icon="mdi-magnify" @input="filterProducts"
          outlined dense solo-inverted clearable color="primary" class="custom-input"></v-text-field>

      </v-col>

    </v-row>
    <v-row>
      <v-col v-for="products in  filteredProducts" :key="products.id" md="3" sm="6">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="products.cover_image" height="200px" cover alt="usm"></v-img>

          <v-card-title>
            {{ products.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ products.price }}$
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text" to="/ShowCards">
              Explore
            </v-btn>
            <router-view></router-view>
            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ products.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    show: false,
    products: [],
    searchQuery: '',
  }),
  async mounted() {
    let result = await axios.get("http://10.0.10.220:8080/api/book")
    this.products = result.data.books
    console.log(this.products)


  },
  computed: {
    filteredProducts() {

      return this.products.filter(product => {
        const productName = product.title.toLowerCase()
        return productName.includes(this.searchQuery.toLowerCase())
      })
    },
  },
}
</script>
<style>
.custom-input {
  border-radius: 20px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-input input {
  padding: 10px;
}
</style>