<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-header
      class="glossy"
      style="height: 150px; border-radius: 0 0 1rem 1rem"
    >
      <q-toolbar class="justify-center">
        <q-img
          basic
          class="shadow-7"
          src="../statics/logo2.jpg"
          style="
            margin-top: 0.5rem;
            height: 60px;
            width: 100%;
            border-radius: 0.5rem;
          "
        ></q-img>
      </q-toolbar>
      <div class="row">
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
        <div class="col-12" style="text-align: center; margin-top: -0.8rem">
          <h5
            style="
              padding: 0.5rem;
              margin: 2rem 1rem 0rem 1rem;
              border-radius: 0.5rem;
              background-color: #193d5c;
            "
          >
            Mantenimientos por equipo
          </h5>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
      <MaintenanceSectionEquipment style="margin-bottom: 3rem" />
    </q-page-container>
  </q-layout>
</template>

<script>
import MaintenanceSectionEquipment from "../components/MaintenanceSectionEquipment.vue";

export default {
  name: "CardsPage",

  components: {
    MaintenanceSectionEquipment,
  },

  computed: {
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
