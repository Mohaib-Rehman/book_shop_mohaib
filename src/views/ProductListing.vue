<template>
    <div class="product-section">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card-title>Your Catalog</v-card-title>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4" lg="3">
                    <v-card>
                        <v-img :src="product.image" alt="Product Image" height="200" contain></v-img>
                        <v-card-title>{{ product.name }}</v-card-title>
                        <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                        <v-card-actions>
                            <router-link to="/cart">
                                <v-btn>Add to Cart</v-btn>
                            </router-link>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {


    name: "ProductListing",

    data() {
        return {
            cart: [],
            products: [
                {
                    name: "Product 1",
                    price: "$10.99",
                    image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1",
                },
                {
                    name: "Product 1",
                    price: "$10.99",
                    image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1",
                },
                {
                    name: "Product 2",
                    price: "$19.99",
                    image: "https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg",
                },
                {
                    name: "Product 1",
                    price: "$10.99",
                    image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1",
                },
                {
                    name: "Product 3",
                    price: "$14.99",
                    image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=900&t=st=1695635672~exp=1695636272~hmac=9c1b5fef123b76caae504173751c5dc63eb5a9f6cccbe04a61bdb8f037158199",
                },
                {
                    name: "Product 2",
                    price: "$19.99",
                    image: "https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg",
                },
                {
                    name: "Product 2",
                    price: "$19.99",
                    image: "https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg",
                },
                {
                    name: "Product 3",
                    price: "$14.99",
                    image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=900&t=st=1695635672~exp=1695636272~hmac=9c1b5fef123b76caae504173751c5dc63eb5a9f6cccbe04a61bdb8f037158199",
                },
                // Add more products
            ],
            footerLinks: ["About Us", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"],
        };

    },
    methods: {
        addToCart(product) {
            // Check if the product is already in the cart
            const index = this.cart.findIndex((item) => item.id === product.id);

            if (index !== -1) {
                // If the product is already in the cart, increase its quantity
                this.cart[index].quantity++;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                });
            }

            // You can optionally show a notification or perform other actions here
        },
    },

}

</script>
<style>
.v-card {
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Card shadow */
}

.v-card-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.v-card-subtitle {
    font-size: 1rem;
    color: #666;
}

.v-btn.primary {
    background-color: #007BFF;
    color: white;
}
</style>