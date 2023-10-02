<template>
    <v-app>
      <v-container>
        
        <v-form ref="userForm" @submit.prevent="addUser">
          <v-text-field v-model="newUser.userName" label="User Name"></v-text-field>
          <v-text-field v-model="newUser.productName" label="Product Name"></v-text-field>
          <v-text-field v-model="newUser.price" label="Price"></v-text-field>
          <v-text-field v-model="newUser.quantity" label="Quantity"></v-text-field>
          <v-btn type="submit" color="primary">Add User Data</v-btn>
        </v-form>
      </v-container>
  
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">User Name</th>
            <th class="text-left">Product Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Total</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.userName }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.total }}</td>
            <td>
              <v-btn @click="removeRow(index)" color="red" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td><strong>Total:</strong></td>
            <td>{{ total }}</td>
          </tr>
        </tfoot>
      </v-table>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [], 
        total: 0, 
        newUser: {
          userName: "",
          productName: "",
          price: 0,
          quantity: 0,
          total: 0,
        },
      };
    },
    methods: {
      addUser() {
        
        this.items.push({ ...this.newUser });
        this.calculateTotal();
  
        // Reset the form fields
        this.$refs.userForm.reset();
      },
      calculateTotal() {
        // Calculate the overall total
        this.total = this.items.reduce((acc, item) => acc + (item.total || 0), 0);
      },
      removeRow(index) {
        // Remove a row from the table
        this.items.splice(index, 1);
        this.calculateTotal();
      },
    },
  };
  </script>
  