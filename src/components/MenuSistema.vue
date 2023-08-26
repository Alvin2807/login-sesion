<template>
    <div>
      <v-app inspire>
        <v-navigation-drawer
            v-model="drawer"
            app
        >

        </v-navigation-drawer>
        <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ datos }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

      </v-app>
    </div>
</template>
<script>

export default {
    data() {
        return {
           drawer: null,
           
        };
    },

    mounted() {
      this.datos
  },

    computed: {
      datos(){
        return (localStorage.getItem('user').replace(/['"]+/g, ''));
       
      }
    },
}
</script>