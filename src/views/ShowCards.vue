<template>
  <v-container>
    <v-card class="mx-auto" max-width="600">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img height="300"
            src="https://plus.unsplash.com/premium_photo-1676057875510-f73d9d5950e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            cover></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <v-card-title class="headline font-weight-bold">
            Product Name
          </v-card-title>
          <v-card-subtitle class="body-2 mb-3">
            <div class="font-weight-bold subtitle-1">
              Description:
            </div>

            <div>
              This is a full description of the product. It provides detailed information about the product's features
              and benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat mi ac orci semper,
              ut consequat nisi posuere. Etiam malesuada ac dui nec rhoncus.
            </div>

          </v-card-subtitle>
          <v-row class="showCard-section">
            <v-col cols="6">
              <div class="font-weight-bold subtitle-1">
                Price:
              </div>
              <div class="subtitle-1">
                $99.99
              </div>
            </v-col>
            <v-col cols="6">
              <div class="font-weight-bold subtitle-1">
                Discount:
              </div>
              <div class="subtitle-1">
                10% off
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn color="primary" class="mr-2" >
          Add to Cart
        </v-btn>
        <v-btn color="orange" to="/LoginIn">
          Buy Now
        </v-btn>
        <router-view></router-view>
      </v-card-actions>
    </v-card>

    <v-container>
      <v-divider class="my-4"></v-divider>
      <div>
        <h2>Rate this product:</h2>
        <star-rating v-model="productRating"></star-rating>
        <p>Selected Rating: {{ productRating }}</p>
      </div>


      <v-divider class="my-4"></v-divider>
      <div class="font-weight-bold subtitle-1">
        Comments:
      </div>

      <div>
        This is a placeholder for the comment section. Users can leave comments and feedback here.
      </div>
    </v-container>
  </v-container>
</template>

<script>
import StarRating from '@/components/StarRating.vue'
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      productRating: 0,

    };
  },
 
}
</script>

<style>
.showCard-section {
  margin-left: 20px;
}
</style>
