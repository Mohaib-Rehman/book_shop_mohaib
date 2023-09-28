<template>
    <v-container>
     <v-row>
         <v-col  v-for="products in products" :key="products.id" md="3" sm="6">
             <v-card
    
       class="mx-auto"
       max-width="344"
     >
       <v-img
         :src="products.thumbnail"
         height="200px"
         cover
         alt="usm"
       ></v-img>
   
       <v-card-title>
         {{products.title}}
       </v-card-title>
   
       <v-card-subtitle>
         {{products.price}}$
       </v-card-subtitle>
   
       <v-card-actions>
         <v-btn
           color="orange-lighten-2"
           variant="text"
         >
           Explore
         </v-btn>
   
         <v-spacer></v-spacer>
   
         <v-btn
           :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
           @click="show = !show"
         ></v-btn>
       </v-card-actions>
   
       <v-expand-transition>
         <div v-show="show">
           <v-divider></v-divider>
   
           <v-card-text>
             {{products.description}}
            </v-card-text>
         </div>
       </v-expand-transition>
     </v-card>
         </v-col>
     </v-row>
    </v-container>
   </template>
   <script>
 import axios from 'axios'
     export default {
       data: () => ({
         show: false,
         products:[]
       }),
      async mounted(){
         let result = await axios.get("https://dummyjson.com/products")
         this.products= result.data.products
         console.log(this.products)
 
 
       } 
     }
   </script>