<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>E-Commerce </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/ProductListing">Your Catalog</v-btn>
      <v-btn text to="/NewsLetter">Newslatter</v-btn>
      <v-spacer></v-spacer>
      <v-row>
        <v-btn text class="sign-in-button" to="/LoginIn">SignIn</v-btn>
        <v-btn text class="sign-up-button" to="/SignUp">Register</v-btn>
      </v-row>
      <router-view></router-view>
    </v-app-bar>



    <!-- Hero Section -->
    <v-container class="hero-section" fluid>
      <v-row>
        <v-col cols="12">
          <div class="hero-container">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
            </v-carousel>
            <div class="hero-content">
              <h1 class="hero-title">Welcome to Our E-Commerce Store</h1>
              <p class="hero-description">Discover the best products at amazing Prices.</p>
              <v-btn color="primary" to="/LoginIn">Shop Now</v-btn>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>


    <ProductListing />


    <!-- newsletter -->
    <NewsLetter />

    <PremiumPlan />

    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- Card -->
          <v-card class="featured-product-card">
            <v-card-title>Featured Product</v-card-title>
            <v-card-text>
              <v-img
                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Product" contain></v-img>
              <p>This is a featured product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price: $29.99</p>
              <v-btn color="primary" to="/LoginIn">Buy Now</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <router-view></router-view>
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
import PremiumPlan from './PremiumPlan.vue';
import NewsLetter from './NewsLetter.vue'

export default {

  components: {
    ProductListing,
    PremiumPlan,
    NewsLetter,
  },
  data() {
    return {
      cart: [],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Enter a valid email address',
        v => v.endsWith('gmail.com') || 'Enter a valid email address',
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

      ],


      footerLinks: ["About Us", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"],
    };
  },

};
</script>
<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

div.v-carousel {
  margin-top: 20px;
  margin-bottom: 20px;
}

.v-app-bar {
  background-color: #1976D2;
  color: white;

}

.sign-in-button {
  background-color: #007BFF;
  color: white;
  font-weight: bold;
  margin-inline-end: 10px;
}

.sign-up-button {
  background-color: #FF5733;
  color: white;
  font-weight: bold;
}

.hero-section {
  margin-bottom: 20px;
}

.hero-container {
  position: relative;
  height: 400px;
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



.newsletter-section {
  background-color: #f8f8f8;
  padding: 60px 0;
}

.newsletter-content {
  text-align: center;
}

.newsletter-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.newsletter-description {
  font-size: 18px;
  color: #666;
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

.featured-product-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.featured-product-card v-card-title {
  font-size: 24px;
  color: #333;
}

.featured-product-card v-card-text {
  margin-top: 20px;
}

.featured-product-card p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

.featured-product-card v-btn {
  background-color: #007BFF;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
}

.featured-product-card v-btn:hover {
  background-color: #0056b3;
}

/* Footer Styles */


.v-container {
  position: "relative";
  background-color: #e4e0e0;
  padding: 20px 0;
  color: #333;
}


.v-btn.icon.large {
  margin-right: 10px;

}

.custom-card {
  max-width: auto;
  margin-top: "20px";
  margin: 0 auto;
}

.custom-card-title {
  font-size: 24px;
  color: #333;
}

.custom-image {
  max-width: 100%;
  height: auto;
}

.custom-description {
  font-size: 16px;
  color: #666;
  margin-top: 20px;
}

.custom-price {
  font-size: 18px;
  color: #f00;
  margin-top: 10px;
}

.custom-button {
  background-color: #007bff;
  color: #fff;
  margin-top: 10px;
}

.custom-button:hover {
  background-color: #0056b3;
}
</style>
