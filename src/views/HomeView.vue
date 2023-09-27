<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>E-Commerce </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>Your Catalog</v-btn>
      <v-btn text>Newslatter</v-btn>
      <v-spacer></v-spacer> <!-- This spacer will push the following buttons to the right -->

      <!-- Center-aligned buttons -->
      <v-row>
        <v-btn text class="sign-in-button">SignIn</v-btn>
        <v-btn text class="sign-up-button">SignUp</v-btn>
      </v-row>
    </v-app-bar>


    <!-- Hero Section -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- Hero Section -->
          <div class="hero-container">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
            </v-carousel>
            <div class="hero-content">
              <h1 class="hero-title">Welcome to Our E-Commerce Store</h1>
              <p class="hero-description">Discover the best products at amazing prices.</p>
              <v-btn color="primary">Shop Now</v-btn>
            </div>
          </div>
          <!-- End Hero Section -->
        </v-col>
      </v-row>
    </v-container>


    <ProductListing />


    <!-- newsletter -->
    <div class="newsletter-section">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <div class="newsletter-content">
              <h2 class="newsletter-title">Subscribe to Our Newsletter</h2>
              <p class="newsletter-description">Stay up-to-date with our latest products and offers by subscribing to our
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
    <!-- card  -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- Card -->
          <v-card>
            <v-card-title>Featured Product</v-card-title>
            <v-card-text>
              <v-img
                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Product" contain></v-img>
              <p>This is a featured product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price: $29.99</p>
              <v-btn color="primary">Buy Now</v-btn>
            </v-card-text>
          </v-card>
          <!-- End Card -->
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +123456789</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3>Information</h3>
          <v-list>
            <v-list-item v-for="(item, index) in footerLinks" :key="index">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h3>Follow Us</h3>
          <v-btn icon large>
            <v-icon size="24">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon size="24">mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon large>
            <v-icon size="24">mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ProductListing from './ProductListing.vue';
export default {

  components: {
    ProductListing
  },
  data() {
    return {
      cart: [],
      email: '', // Stores the email address entered by the user
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      items: [
        {
          src: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1',
          alt: 'Image 1',
        },
        {
          src: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1',
          alt: 'Image 1',
        },
        // Add more items as needed
      ],


      footerLinks: ["About Us", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"],
    };
  },
  methods: {
    subscribeToNewsletter() {
      // Implement your newsletter subscription logic here,
      // for example, send the email address to your server.
      console.log('Subscribed with email:', this.email);
      // You can also reset the email field after successful submission
      this.email = '';
    },

  },
};
</script>
<style>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

div.v-carousel {
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Header Styles */
.v-app-bar {
  background-color: #1976D2;
  /* Header background color */
  color: white;

  /* Header text color */
}

/* Add styles for the "SignIn" button */
.sign-in-button {
  background-color: #007BFF;
  /* Blue background color for SignIn */
  color: white;
  /* White text color */
  font-weight: bold;
  /* margin-block: 10px; */
  margin-inline-end: 10px;
}

/* Add styles for the "SignUp" button */
.sign-up-button {
  background-color: #FF5733;
  /* Orange background color for SignUp */
  color: white;
  /* White text color */
  font-weight: bold;
  /* Bold text */
  /* Add any other styles you want */
}

.hero-container {
  position: relative;
  height: 400px;
  /* Adjust the height as needed */
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.hero-title {
  font-size: 32px;
  margin-bottom: 16px;
}

.hero-description {
  font-size: 18px;
  margin-bottom: 24px;
}

/* newsletter */


.newsletter-section {
  background-color: #f8f8f8;
  /* Set the background color to your preference */
  padding: 60px 0;
}

.newsletter-content {
  text-align: center;
}

.newsletter-title {
  font-size: 32px;
  color: #333;
  /* Change the text color to your preference */
  margin-bottom: 20px;
}

.newsletter-description {
  font-size: 18px;
  color: #666;
  /* Change the text color to your preference */
  margin-bottom: 40px;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subscribe-button {
  font-size: 10px;
  padding: 10px 30px;
}

/* Footer Styles */


.v-footer {
  position: "relative";
  background-color: #f5f5f5;
  /* Footer background color */
  padding: 20px 0;
  color: #333;
  /* Footer text color */
}

.v-list-item-title {
  font-weight: bold;
}

/* Follow Us Icons Styles */
.v-btn.icon.large {
  margin-right: 10px;
  /* margin-top: "10px"; */

}

.custom-card {
  /* Customize card container styles */
  max-width: auto;
  margin-top: "20px";
  margin: 0 auto;
}

.custom-card-title {
  /* Customize card title styles */
  font-size: 24px;
  color: #333;
}

.custom-image {
  /* Customize image styles */
  max-width: 100%;
  height: auto;
}

.custom-description {
  /* Customize description text styles */
  font-size: 16px;
  color: #666;
  margin-top: 20px;
}

.custom-price {
  /* Customize price text styles */
  font-size: 18px;
  color: #f00;
  /* Red color for price */
  margin-top: 10px;
}

.custom-button {
  /* Customize button styles */
  background-color: #007bff;
  /* Blue color for button */
  color: #fff;
  margin-top: 10px;
}

.custom-button:hover {
  /* Hover effect for the button */
  background-color: #0056b3;
  /* Darker blue on hover */
}
</style>
