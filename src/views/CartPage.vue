<template>
    <v-container class="catalog-section">

        <h2 class="text-center">Your Cart</h2>
        <v-row>
            <v-col v-for="(item, index) in cart" :key="index" cols="12">
                <v-card class="cart-item">
                    <v-row>
                        <v-col class="catalog-section-img" cols="4">
                            <v-img :src="item.image" alt="Product Image" contain style="height: 200px;"></v-img>
                        </v-col>
                        <v-col class="catalog-sction-cart" cols="8">                            
                            <div class="product-details">
                                <h3>{{ item.name }}</h3>
                                <p>{{ item.description }}</p>                             
                                <p>
                                    <template v-if="item.discount">
                                        <span style="text-decoration: line-through; color: gray;">Rs.800 {{ item.price
                                        }}</span>
                                        <br />
                                        <strong>Rs.200 {{ calculateDiscountedPrice(item.price, item.discount) }}</strong>
                                        ({{ item.discount }}% off)
                                    </template>
                                    <template v-else>
                                        Rs. {{ item.price }}
                                    </template>
                                </p>
                                <p>Quantity: {{ item.quantity }}</p>
                                <v-rating v-model="item.rating" :max="5" :half-increments="true" color="amber"
                                    readonly></v-rating>
                                <div class="content">
                                    <p>Content: {{ item.content }}</p>
                                </div>
                                <div class="summary">
                                    <p>Summary: {{ item.summary }}</p>
                                </div>
                                <div class="score">
                                    <p>Score: {{ item.score }}</p>
                                </div>
                                <div class="average">
                                    <p>Average: {{ item.average }}</p>
                                </div>
                                <div class="count">
                                    <p>Count: {{ item.count }}</p>
                                </div>

                              
                                <div class="details">
                                    <p>Details: {{ item.details }}</p>
                                </div>
                            </div>
                           
                            <v-row>
                                <v-col cols="4">
                                    <v-btn color="blue" @click="handlePayment(item)" style="width: 200px;" to="/LoginIn">Buy
                                        Now</v-btn>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn color="orange" @click="removeItemFromCart(index)" style="width: 200px;">Add to
                                        Cart</v-btn>
                                </v-col>
                                <router-view></router-view>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>

            <v-card class="mx-auto">
                <v-container fluid cols="6">
                    <v-row dense>
                      
                        <v-row cols="6">
                            <v-col v-for="card in cards" :key="card.title" cols="6" >
                                <v-card>
                                    <v-img :src="card.src" class="align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                                        <v-card-title class="text-white" v-text="card.title"></v-card-title>
                                    </v-img>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
                                        <v-btn size="small" color="surface-variant" variant="text"
                                            icon="mdi-bookmark"></v-btn>
                                        <v-btn size="small" color="surface-variant" variant="text"
                                            icon="mdi-share-variant"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                      
                    </v-row>
                </v-container>
            </v-card>

        </v-row>
    </v-container>
</template>

  
<script>

export default {

    computed: {
        cart() {
            return [
                {

                    id: 1,
                    name: "New Book",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    price: 50,
                    discount: 50,
                    quantity: 2,
                    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                    rating: 4.5,
                    
                    score: 9.0,
                    average: 4.5,
                    count: 10,


                },

            ];
        },
    },
    data: () => ({
        cards: [

            { title: 'Favorite Book', src: 'https://s26162.pcdn.co/wp-content/uploads/2015/06/book-piles.jpg' },
            { title: 'Best Author', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80' },
        ],
    }),
    methods: {

        removeItemFromCart(index) {
            this.cart.splice(index, 1);
        },
        calculateDiscountedPrice(price, discount) {
            const discountedPrice = price - (price * discount) / 100;
            return discountedPrice.toFixed(2);
        },

    },
};
</script>
  
<style scoped>
.catalog-section {
    margin-top: 40px;
}

.catalog-sction-cart {
    margin-bottom: 20px;
}

.catalog-section-img {
    margin-top: 40px;

}

.product-details {
    padding: 10px;
}

.content,
.summary,
.score,
.average,
.count,
.details {
    margin-top: 10px;
}
</style>
  