<template>
    <v-app>
        <login-sistema/>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md3>
                    <v-card class="elevation-0" mt-16>
                        <v-card-text>
                            <h3 id="tituloIniciar" class="text-center">{{ tituloLogin }}</h3>
                            <v-form>
                            <v-row class="mt-1">
                                <v-col
                                cols="12"
                                sm="12"
                                >
                                <v-text-field
                                    v-model="editedItem.usuario"
                                    label="Usuario"
                                    type="text"
                                    color="#15395A"
                                    prepend-inner-icon="person"
                                    :rules="reglasValidacion"
                                    autocomplete="off"
                                >
                                </v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12">
                                <v-text-field
                                    v-model="editedItem.password"
                                    label="Contraseña"
                                    type=password
                                    color="#15395A"
                                    prepend-inner-icon="password"
                                    autocomplete="off"
                                    dense
                                    :rules="reglasValidacion"
                                >
                                </v-text-field>
                                </v-col>
                            </v-row>
                            </v-form>
                        </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="elevation-0" color="#15395A" dark
                        @click="login()"
                        >
                        <v-icon class="mx-1">login</v-icon>
                        acceder
                        </v-btn>
                    </v-card-actions>

                    </v-card>

                </v-flex>

            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
import LoginSistema from '../components/LoginSistema.vue'
import api from '@/api'
export default {
    components:{
        LoginSistema
    },
    data() {
        return {
            titulo: -1,
            editedItem: {
            usuario: '',
            password: '',
        },
        reglasValidacion: [
            (v) => !!v || 'Campo obligatorio',
        ],
        }
    },

    computed: {
    tituloLogin() {
      return this.titulo === -1 ? 'Iniciar seccion' : '';
    },
  },

  methods: {
    login(){
        api.post('iniciar_sesion', this.editedItem)
        .then(respuesta=>{
            const token  = respuesta.data.token
            const user   = respuesta.data.data.name
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            api.defaults.headers.common['Authorization'] = "Bearer" +token
            this.$router.push({path:'/inicio'})
        })
          
    }
   
  },
}
</script>
<style>
#tituloIniciar{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
}
</style>