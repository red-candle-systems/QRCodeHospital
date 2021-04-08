<template>
  <div class="q-pa-md">
    <q-layout id="q-app-2" view="lHh Lpr lFf">
      <q-header
        class="glossy"
        style="height: 150px; border-radius: 0 0 1rem 1rem"
      >
        <q-toolbar class="justify-center">
          <q-img
            basic
            class="shadow-7"
            src="../assets/logo2.jpg"
            style="
              margin-top: 0.5rem;
              height: 60px;
              width: 100%;
              border-radius: 0.5rem;
            "
          ></q-img>
        </q-toolbar>
        <div class="row">
          <div class="col-md-2 col-2">
            <q-img
              basic
              src="../statics/logo.png"
              style="
                height: 4.1rem;
                width: 4.1rem;
                margin: 0.4rem;
                border-radius: 0.5rem;
              "
              class="fixed-top-left"
            />
            <q-btn
              :to="'/detail/' + this.EquipoSelected.ID_Equipo"
              style="
                height: 4.1rem;
                width: 4.1rem;
                margin: 0.4rem;
                border-radius: 0.5rem;
              "
              class="fixed-top-left"
            ></q-btn>
          </div>
          <div class="col-12" style="text-align: center; margin-top: -0.8rem">
            <h5
              style="
                padding: 0.5rem;
                margin: 2rem 1rem 0rem 1rem;
                border-radius: 0.5rem;
                background-color: #193d5c;
              "
            >
              Mantenimientos
            </h5>
          </div>
        </div>
      </q-header>
      <q-page-container>
        <MaintanceTable />
        <br />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import MaintanceTable from "../components/MaintanceTable";

export default {
  name: "EquipmentDetail",

  components: {
    MaintanceTable,
  },

  data() {
    return {
      leftDrawerOpen: false,
      alert: false,
      seleccionado: 0,
    };
  },

  computed: {
    //STATE DE FLAGS GLOBALES
    Flags: {
      get() {
        return this.$store.state.global.Flags;
      },
      set(Flags) {
        this.$store.commit("global/updateFlags", Flags);
      },
    },
    EquipoSelected: {
      get() {
        return this.$store.state.cardState.EquipoSelected;
      },
      set(val) {
        this.$store.commit("cardState/updateEquipoSelected", val);
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
</style>
