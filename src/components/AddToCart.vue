<template>
  <v-row justify="center" class="my-5">
    <v-col cols="12">
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="fw-normal mb-0 text-black">Shopping Cart</h2>
        <div>
          <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price
              <v-icon>mdi-chevron-down</v-icon></a></p>
        </div>
      </div>

      <v-card v-for="item in cartItems" :key="item.id" class="rounded-3 mb-4">
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="2">
              <v-img :src="item.image" class="img-fluid rounded-3" alt="Product"></v-img>
            </v-col>
            <v-col cols="12" md="3">
              <p class="lead fw-normal mb-2">{{ item.name }}</p>
              <p><span class="text-muted">Size:</span> {{ item.size }} <span class="text-muted">Color:</span> {{
                item.color }}</p>
            </v-col>
            <v-col cols="12" md="3" class="d-flex">
              <v-btn @click="decrementQuantity(item)" icon>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-text-field v-model="item.quantity" label="Quantity" type="number" min="1" class="mx-2"></v-text-field>
              <v-btn @click="incrementQuantity(item)" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="2" offset-md="1">
              <h5 class="mb-0">{{ formatCurrency(item.price) }}</h5>
            </v-col>
            <v-col cols="12" md="1" class="text-end">
              <v-icon @click="removeItem(item)" class="text-danger">mdi-delete</v-icon>
            </v-col>
          </v-row>
          <v-card-text class="text-right">

          </v-card-text>
        </v-card-text>
      </v-card>
      
        <h3 >Total Price: {{ formatCurrency(totalCartPrice) }}</h3>
     

      <v-card class="rounded-3 mb-4">
        <v-card-text>
          <v-row justify="center">

            <v-col cols="12" md="6">
              <v-btn @click="proceedToPay" color="warning" block large to="/LoginIn">Proceed to Pay</v-btn>
            </v-col>
          </v-row>
          <router-view></router-view>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: 'Basic T-shirt',
          size: 'M',
          color: 'Grey',
          image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
          price: 499.00,
          quantity: 2
        },
        {
          id: 1,
          name: 'Basic T-shirt',
          size: 'M',
          color: 'Grey',
          image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
          price: 100.00,
          quantity: 2
        },

      ],
      discountCode: ''
    };
  },
  computed: {
    totalCartPrice() {
      // Calculate the total price based on the quantity of each item
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  methods: {
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    incrementQuantity(item) {
      item.quantity++;
    },
    removeItem(item) {
      const index = this.cartItems.indexOf(item);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },

  }
};
</script>

<style>
h3{
  margin-left: 1200px;
  margin-bottom: 20px;
}

.d-flex.justify-space-between.align-center {
  justify-content: space-between;
  align-items: center;
}


.text-muted {
  color: #888;
}

.text-body {
  color: #333;
}


.v-icon.mdi-chevron-down {
  font-size: 16px;
}


.v-card {
  border-radius: 15px;
}


.img-fluid {
  max-width: 100%;
  height: auto;
}


.lead {
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.text-muted {
  color: #888;
}


.v-text-field.mx-2 {
  width: 60px;
}


h5.mb-0 {
  font-size: 1.25rem;
}

.v-icon.text-danger {
  cursor: pointer;
}


.form-control.form-control-lg {
  border-radius: 5px;
  padding: 12px;
  font-size: 1.25rem;
  border: 2px solid #ccc;
  width: 100%;
}

.v-btn.color-warning {
  background-color: #ffc107;
  color: #333;
}


.v-btn.color-warning.block.large {
  background-color: #ffc107;
  color: #333;
  width: 100%;
  margin-top: 1rem;
}
</style>