<template>
    <v-content>

        <v-container
        class="fill-height elevation-12"
        fluid
        
      >
        <v-row
          align="center"
          justify="center"
        >
        <v-col
            cols="12"
            sm="8"
            md="5"
          >

         <v-card class="elevation-9">
                <v-toolbar
                color="primary"
                dark
                elevation="3"
                >
                <v-row justify="center">
                <v-toolbar-title>SignUp</v-toolbar-title>
                </v-row>
                </v-toolbar>
                

                <v-card-text>
                    <v-alert type="error" :value="error">
                    {{error}}
                    </v-alert>
                    <v-form>
                        <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon="person"
                        type="text"
                        v-model="login"
                        required='required'
                        ></v-text-field>

                        <v-text-field
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                        v-model="password"
                        required
                        ></v-text-field>

                        <v-text-field
                        label="Confirm password"
                        name="confirmPassword"
                        prepend-icon="lock"
                        type="password"
                        v-model="confirmPassword"
                        required
                        ></v-text-field>

                    </v-form>
                </v-card-text>
                
                <v-card-actions class="ma-0 pa-0">
                    <v-row justify="center" class="ma-0 pa-0">
                        <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                        <v-btn class="success white--text ma-0 pa-0" block tile x-large elevation="3"
                        :disabled="processing"
                        @click="loadingFunction"
                        @click.prevent="signup"
                        >Login</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
         </v-card>
        </v-col>
        </v-row>
        </v-container>
    </v-content>
</template>




<script>
export default {
    data(){
        return{
            loading: false,
            login: null,
            password: null,
            confirmPassword: null,
        }
    },
    computed:{
        error(){
            return this.$store.getters.get_error
        },
        processing(){
            return this.$store.getters.get_processing
        },
        isUserAuthenticated(){
            return this.$store.getters.isUserAuthenticated
        }


    },
    watch:{
        isUserAuthenticated(val){
            if(val === true)
                this.$router.push("/")
        }
    },
    methods:{
        loadingFunction(){
            this.loading= true,
            setTimeout(() => (this.loading = false), 3000)
        },
        signup(){
            this.$store.dispatch('signup', {login: this.login, password: this.password, confirmPassword: this.confirmPassword})
        }
    }
}
</script>