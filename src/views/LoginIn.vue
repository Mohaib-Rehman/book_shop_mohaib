<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>E-Commerce </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to="/home">Home</v-btn>
            <v-btn text>Your Catalog</v-btn>
            <v-btn text>Newslatter</v-btn>
            <v-spacer></v-spacer>
            <v-row>
                <v-btn text class="sign-in-button" to="/LoginIn">SignIn</v-btn>
                <v-btn text class="sign-up-button" to="SignUp">Register</v-btn>
            </v-row>
        </v-app-bar>
        <v-main>
            <v-container class="fill-height">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="6">
                        <v-card elevation="3" class="pa-6">
                            <v-card-title class="text-center">
                                <h2 class="login-heading">Login</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form @submit.prevent="login">
                                    <v-text-field label="Username" v-model="username" outlined required></v-text-field>
                                    <v-text-field label="Password" v-model="password" outlined type="password"
                                        required></v-text-field>
                                    <v-btn type="submit" color="primary" class="login-button">
                                        Login
                                    </v-btn>
                                    <v-card-text>
                                        Don't Have an Acount?
                                        <v-btn text class="sign-up-button small-button" to="SignUp">Register</v-btn>

                                    </v-card-text>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },

};
</script>
  
<style scoped>
.login-heading {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

.login-button {
    width: 100%;
    margin-top: 20px;
}

.small-button {
    font-size: 6px;
    padding: 1px 2px;
}
</style>
  
  
  