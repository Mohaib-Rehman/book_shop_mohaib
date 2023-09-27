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
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="6">
                        <v-card elevation="3" class="pa-6">
                            <v-card-title class="text-center">
                                <h2 class="login-heading">Sign Up</h2>
                            </v-card-title>
                            <v-card-text>
                               
                                <div v-if="formAvailable">
                                    <v-form @submit.prevent="signUp" ref="form">
                                        <v-text-field label="First Name" v-model="firstName" outlined
                                            required></v-text-field>
                                        <v-text-field label="Last Name" v-model="lastName" outlined required></v-text-field>
                                        <v-text-field label="Email" v-model="email" outlined required
                                            :rules="emailRules"></v-text-field>
                                        <v-text-field label="Password" v-model="password" outlined type="password"
                                            required></v-text-field>
                                        <v-btn type="submit" color="primary" class="login-button">Sign Up</v-btn>
                                    </v-form>
                                </div>
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
            firstName: "",
            lastName: "",
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Enter a valid email address',
                v => v.endsWith('gmail.com') || 'Enter a valid Email address',
            ],
            formAvailable: false, 
        };
    },
    mounted() {
        this.formAvailable = true;
    },
    methods: {
        signUp() {
            if (this.formAvailable && !this.$refs.form.validate()) {
                return;
            }
            console.log('User Details:');
            console.log('First Name:', this.firstName);
            console.log('Last Name:', this.lastName);
            console.log('Email:', this.email);
            console.log('Password:', this.password);

          
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.password = '';

         
        },
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
</style>
  