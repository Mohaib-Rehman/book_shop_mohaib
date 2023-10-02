<template>

        <v-row justify="center" class="my-5">
            <v-col cols="12">
                <v-card class="rounded-3">
                    <v-row>
                       
                        <v-col cols="12" md="4">
                            <v-img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                class="img-fluid rounded-lg" alt="Product Image"></v-img>
                        </v-col>
                        
                        <v-col cols="12" md="8">
                            <v-card-title class="text-h5">Product Name</v-card-title>
                            <v-card-subtitle class="mb-3">Price: $99.99</v-card-subtitle>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    
                                    <v-col cols="12" md="4">
                                        <v-select v-model="selectedSize" :items="sizes" label="Select Size"
                                            outlined></v-select>
                                    </v-col>
                                   
                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="quantity" label="Quantity" type="number" min="1"
                                            outlined></v-text-field>
                                    </v-col>
                                   
                                    <v-col cols="12" md="4">
                                        <v-btn @click="addToCart" color="success" dark block>Add to Cart</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                           
                            <v-card-actions>
                                <v-btn @click="buyNow" color="primary" dark>Buy Now</v-btn>
                                <v-spacer></v-spacer>
                               
                                <v-icon>mdi-facebook</v-icon>
                                <v-icon>mdi-twitter</v-icon>
                                <v-icon>mdi-instagram</v-icon>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
   
</template>
  
<script>
export default {
    data() {
        return {
            selectedSize: '',
            sizes: ['Small', 'Medium', 'Large'],
            quantity: 1,
        };
    },
    methods: {
        addToCart() {
          
        },
       
    },
};
</script>
  