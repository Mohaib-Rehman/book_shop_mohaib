<template>
    <v-container>
        <h2>Your Cart</h2>
        <v-row>
            <v-col v-for="(item, index) in cart" :key="index" cols="12">
                <v-card class="cart-item">
                    <v-row>
                        <v-col cols="4">
                            <!-- Product Image -->
                            <v-img :src="item.image" alt="Product Image" contain style="height: 200px;"></v-img>


                        </v-col>
                        <v-col cols="8">
                            <!-- Product Details -->
                            <div class="product-details">
                                <h3>{{ item.name }}</h3>
                                <p>{{ item.description }}</p>
                                <!-- Price and Discount -->
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

                                <!-- Details -->
                                <div class="details">
                                    <p>Details: {{ item.details }}</p>
                                </div>
                            </div>
                            <!-- Action Buttons -->
                            <v-row>
                                <v-col cols="4">
                                    <v-btn color="blue" @click="handlePayment(item)" style="width: 200px;">Buy Now</v-btn>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn color="orange" @click="removeItemFromCart(index)" style="width: 200px;">Add to
                                        Cart</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
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
                    image: "https://media.istockphoto.com/id/585796590/photo/variety-of-books-close-up-view.jpg?s=1024x1024&w=is&k=20&c=ol9h56Q09M0DXWg_iMfofNF6CMUEaKI6ZcU60Bu5urU=",
                    rating: 4.5,
                    content: "Lorem ipsum content",
                    summary: "A great book",
                    score: 9.0,
                    average: 4.5,
                    count: 10,
                    details: "Book details here.",

                },
                // Add more items to your cart data
            ];
        },
    },
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
  