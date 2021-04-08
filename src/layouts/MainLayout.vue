<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-page-container> <router-view /> </q-page-container>
    <q-toolbar
      class="text-white shadow-2 fixed-bottom"
      style="border-radius: 0.5rem 0.5rem 0 0"
    >
    </q-toolbar>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: false,
      tab: "",
      rutaLogin: "",
      claseColumna: "col",
      currentRoute: false,
    };
  },

  methods: {
    navegar(ruta) {
      if (ruta != this.$router.currentRoute.path)
        this.$router.replace({ path: ruta });
    },
  },
  computed: {
 
    Usuario: {
      get() {
        return this.$store.state.global.Usuario;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bg-Mycolor {
  background-color: #172330ff;
}
</style>
