<template>
    <v-app>
        <!-- Sidebar -->
        <v-navigation-drawer app v-model="sidebarOpen">
            <v-list>
                <v-list-item link to="/dashboard">
                    <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/profile">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>



        <!-- Main Content -->



        <v-main>
            
                <swiper :options="swiperOptions" class="swiper-container" style="height: 300px;">
                    <swiper-slide v-for="(image, index) in sliderImages" :key="index">
                        <img :src="image" alt="Slider Image" style="width: 100%; height: 100%; object-fit: cover;" />
                    </swiper-slide>
                    <swiper-pagination class="swiper-pagination"></swiper-pagination>
                    <swiper-button-prev class="swiper-button-prev"></swiper-button-prev>
                    <swiper-button-next class="swiper-button-next"></swiper-button-next>
                </swiper>
           
            <TableForm />
            <UserDataTable />

            <router-view></router-view>
        </v-main>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="sidebarOpen = !sidebarOpen"></v-app-bar-nav-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
           
            <v-btn icon to="/AddToCart">
                <v-icon @click="addToCart">mdi-cart-plus</v-icon>
            </v-btn>
            <v-btn @click="signout" to="/LoginIn">Sign Out</v-btn>
        </v-app-bar>
        <router-view></router-view>
    </v-app>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import UserDataTable from "@/components/UserDataTable.vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
        UserDataTable,
    },
    data() {
        return {

            sidebarOpen: false,
            search: "",

            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            sliderImages: [
                
                'https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                'https://images.unsplash.com/photo-1566131807516-e3b3cd1a89d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                'https://plus.unsplash.com/premium_photo-1661964153042-56211a8e2d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            ],
        };
    },
    methods: {
        addToCart() {
            console.log('Added to cart');
        },
        signout() {
            console.log('Signed out');
        },
    },
};
</script>

<style>
.container-form {
    background-color: aliceblue;
}
</style>
