<template>
    <div>
        <v-toolbar id="toolbar" dark>
            <v-spacer></v-spacer>
            <v-toolbar-title>{{ tituloToolbar }}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titulo:-1
        }
    },

    computed: {
        tituloToolbar(){
            return this.titulo === -1 ? 'Sistema de Control de Insumos' : ''
        }
    },
}
</script>
<style>
#toolbar {
    background-color: #15395A ;
}
</style>