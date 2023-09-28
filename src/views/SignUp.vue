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
                                        
                                        <v-text-field label="Name" v-model="name" outlined required
                                            :rules="LastNameRules"></v-text-field>
                                        <v-text-field label="Email" v-model="email" outlined required
                                            :rules="emailRules"></v-text-field>
                                        <v-text-field label="Password" v-model="password" outlined
                                            :type="showPassword ? 'text' : 'password'" required :rules="passwordRules"
                                            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                            @click:append="showPassword = !showPassword"></v-text-field>

                                        <v-text-field label="Confirm Password" v-model="confirmPassword" outlined
                                            :type="showConfirmPassword ? 'text' : 'password'" required
                                            :rules="confirmPasswordRules"
                                            :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                            @click:append="showConfirmPassword = !showConfirmPassword"></v-text-field>
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
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            email: '',
            password: '',
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
           
            LastNameRules: [
                v => !!v || 'Last Name is required',
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Enter a valid email address',
                v => v.endsWith('gmail.com') || 'Enter a valid Email address',
            ],
            formAvailable: false,
        };
    },
    computed: {
        passwordRules() {
            return [
                (v) => !!v || "Password is required",
                (v) =>
                    (v && v.length >= 8) || "Password must be at least 8 characters long",
                (v) =>
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(v) ||
                    "Password must contain at least one letter, one number, and one special character",
                (v) =>
                    /^(?!.*\s).{8,}$/.test(v) ||
                    "Password must not contain spaces",
                (v) =>
                    /^(?!.*(.)\1{2,}).{8,}$/.test(v) ||
                    "Password must not contain repeating characters (e.g., 'aaa' or '111')",
                (v) => {
                   
                    if (
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(v)
                    ) {
                        return "Your password is strong"; 
                    } else {
                        return true; 
                    }
                },
            ];
        },
        confirmPasswordRules() {
            return [
                (v) => !!v || "Confirm Password is required",
                (v) => v === this.password || "Passwords do not match", 
            ];
        },
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
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Password:', this.password);


            axios.post("http://10.0.10.220:8080/api/register", {
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
        })


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

.password-field {
    position: relative;
}

.password-label {
    position: absolute;
    top: 0;
    left: 16px;
    background-color: white;
    padding: 0 4px;
    pointer-events: none;
    z-index: 1;
}

.v-text-field .v-input__append-inner {
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
}
</style>
  