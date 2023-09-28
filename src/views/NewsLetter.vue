<template>
    <div class="newsletter-section">
        <v-container>
            <v-row justify="center" align="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <div class="newsletter-content">
                        <h2 class="newsletter-title">Subscribe to Our Newsletter</h2>
                        <p class="newsletter-description">Stay up-to-date with our latest products and offers by subscribing
                            to our
                            newsletter.</p>
                        <form @submit.prevent="subscribeToNewsletter" class="newsletter-form">
                            <v-row align="center">
                                <v-col cols="12" sm="8">
                                    <v-text-field v-model="email" label="Email" outlined color="primary" required
                                        :rules="emailRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-btn type="submit" outlined color="primary" class="subscribe-button">Subscribe</v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

    methods: {
        subscribeToNewsletter() {

            console.log('Subscribed with email:', this.email);

            this.email = '';
        },

    },
};
</script>