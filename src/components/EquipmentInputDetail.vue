<template>
  <div>
    <div class="row">
      <div class="col-12" style="margin-right: 1rem; margin-top: 0.5rem">
        <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-btn
              style="width: 100%; height: 56px"
              color="light-blue-10"
              push
              icon="engineering"
              @click="verMantenimientos()"
              >Mantenimientos</q-btn
            >
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <Stepper />
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-toolbar class="justify-center">
              <img :src="src" id="Imagen" basic class="imageStyle" />
            </q-toolbar>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <div
              style="
                background-color: #1976d2;
                margin-top: 1rem;
                height: 0.2rem;
                width: 100%;
              "
              class="glossy"
            ></div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textNumeroSerie"
              filled
              :label="this.props[0].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textNumeroControl"
              filled
              :label="this.props[7].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textEquipo"
              filled
              :label="this.props[1].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textModelo"
              filled
              :label="this.props[2].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textMarca"
              filled
              :label="this.props[3].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              color="blue"
              v-model="textUbicacion"
              filled
              :label="this.props[4].name"
              style="width: 100%"
              readonly
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textAñoFabricacion"
              filled
              :label="this.props[5].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textProveedor"
              type="text"
              filled
              label="Proveedor"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              v-model="textEstatus"
              type="text"
              filled
              label="Estatus"
              style="width: 100%"
              readonly
            >
              <template v-slot:prepend>
                <q-icon name="line_weight" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              v-model="textCosto"
              filled
              :label="this.props[6].name"
              style="width: 100%"
            >
              <template v-slot:prepend>
                <q-icon name="attach_money" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              filled
              color="blue"
              v-model="dateGarantia"
              style="width: 100%"
              label="Fecha de garantia"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="dateGarantia" mask="YYYY-MM-DD" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              readonly
              filled
              v-model="dateCompra"
              style="width: 100%"
              label="Fecha de Adquisición"
            >
              <template v-slot:prepend>
                <q-icon name="event"> </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4">
            <q-input
              filled
              color="blue"
              v-model="fecha_prox_mantenimiento"
              style="width: 100%"
              label="Fecha de proximo mantenimiento"
              readonly
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="fecha_prox_mantenimiento"
                      mask="YYYY-MM-DD"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6 col-lg-4 col-md-4 column items-center">
            <q-btn-toggle
              v-model="modelServicio"
              :toggle-color="modelServicio ? 'primary' : 'dark'"
              color="white"
              text-color="dark"
              :options="[
                { label: 'Estatus en Alta', value: true },
                { label: 'Estatus en Baja', value: false },
              ]"
              readonly
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div style="width: 100%">
        <h5
          style="
            background-color: #1976d2;
            color: white;
            font-family: Serif;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
          "
          class="glossy text-center bg-blue-10"
        >
          Observaciones
        </h5>
        <div class="q-pa-md q-gutter-sm" style="margin-top: -2.8rem">
          <q-editor readonly v-model="editor" :toolbar="[]" />
        </div>

        <div
          style="
            background-color: #1976d2;
            margin-top: 1rem;
            height: 0.2rem;
            width: 100%;
          "
          class="glossy"
        ></div>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">¡{{ aviso }}!</div>
            </q-card-section>
            <q-card-section class="q-pt-none">¡{{ aviso2 }}!</q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" to="/Home" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar
                icon="keyboard_return"
                color="primary"
                text-color="white"
              />
              <span class="q-ml-sm">¿Seguro que deseas salir?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn
                flat
                label="Salir"
                to="/Home"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="prompt" persistent>
          <q-card style="min-width: 90%">
            <q-card-section>
              <div class="text-h6">¿Cuál es el problema?</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                v-model="report"
                autofocus
                @keyup.enter="prompt = false"
              />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancelar" v-close-popup />
              <q-btn
                flat
                label="Reportar"
                v-close-popup
                @click="_insertReport()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "../components/Stepper";
import service from "../apiservice/service";

export default {
  components: {
    Stepper,
  },
  created() {
    this.IDEM = this.$route.params.equipmentId;
    this.cargarEquipoSelected();
  },
  data() {
    return {
      size: 300,
      tipo: "text",
      aviso: "Registro Guardado",
      aviso2: "Su registro se ha generado exitosamente",
      props: [
        {
          id: 1,
          name: "Número de serie",
        },
        {
          id: 2,
          name: "Equipo",
        },
        {
          id: 3,
          name: "Modelo",
        },
        {
          id: 4,
          name: "Marca",
        },
        {
          id: 5,
          name: "Ubicacion",
        },
        {
          id: 6,
          name: "Año de fabricacion",
        },
        {
          id: 7,
          name: "Costo",
        },
        {
          id: 8,
          name: "Número de control",
        },
      ],
      textNumeroSerie: "",
      textEquipo: "",
      textModelo: "",
      textUbicacion: "",
      textMarca: "",
      textAñoFabricacion: 0,
      textCosto: "",
      src: "",
      textModelo: "",
      modelServicio: "",
      editor: "",
      modelGarantia: "",
      fecha_prox_mantenimiento: "",
      dateGarantia: "",
      dateCompra: "",
      textProveedor: "",
      textNumeroControl: "",
      textEstatus: "",
      files: null,
      alert: false,
      confirm: false,
      prompt: false,
      report: "",
    };
  },
  methods: {
    async cargarEquipoSelected() {
      let response = await service.getEquipmentById(this.IDEM);
      this.EquipoSelected = response.data;
      this.textNumeroSerie = this.EquipoSelected.No_Serie;
      this.textEquipo = this.EquipoSelected.Nombre_Equipo;
      this.textModelo = this.EquipoSelected.Modelo;
      this.textUbicacion = this.EquipoSelected.Ubicacion;
      this.textMarca = this.EquipoSelected.Marca;
      this.textAñoFabricacion = this.EquipoSelected.Ano_Equipo;
      this.textCosto = this.EquipoSelected.Precio;
      this.src = this.EquipoSelected.Foto;
      this.editor = this.EquipoSelected.Observaciones;
      this.modelServicio = this.EquipoSelected.Estado_Servicio;
      this.modelGarantia = true;
      this.fecha_prox_mantenimiento = this.EquipoSelected.Siguiente_Mantenimiento;
      this.dateGarantia = this.EquipoSelected.Fecha_Garantia;
      this.dateCompra = this.EquipoSelected.Fecha_Adquisicion;
      this.textProveedor = this.EquipoSelected.Proveedor;
      this.textNumeroControl = this.EquipoSelected.textNumeroControl;
      this.textEstatus = this.EquipoSelected.textEstatus;
    },
    //Metodo que redirige a la pagina con la lista de los matenimientos de un equipo
    verMantenimientos() {
      this.$router.push({ path: "/MaintenanceSectionEquipment" });
    },
  },

  computed: {
    MaintenanceSectionSelected: {
      get() {
        return this.MaintenanceSectionSelected;
      },
      set(MaintenanceSectionSelected) {
        this.$store.commit(
          "cardState/updateMaintenanceSectionSelected",
          MaintenanceSectionSelected
        );
      },
    },
    ReportSectionSelected: {
      get() {
        return this.ReportSectionSelected;
      },
      set(ReportSectionSelected) {
        this.$store.commit(
          "cardState/updateReportSectionSelected",
          ReportSectionSelected
        );
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
    IDEM: {
      get() {
        return this.$store.state.cardState.IDEM;
      },
      set(IDEM) {
        this.$store.commit("cardState/updateIDEM", IDEM);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid black

.divP
  margin-right: 1rem
  margin-top: 0.5rem

.imageStyle
  width: 50%
  border-radius: 0.5rem
  height: auto
  max-height: 350px

.FileStyle
  width: 100%
  padding: 5.5px

.ObservacionesStyle
  background-color: #1976d2
  color: white
  font-family: Serif
  border-radius: 8px

.divEditor
  margin-top: -2.8rem

.btnGuardarStyle
  margin: 1rem 0rem 1rem 1rem

.btnReporte
  margin: 1rem 0rem 1rem 1rem

.divS
  margin-left: -1rem

.btnToggleStyle
  width: 100%
  height: 18%
  margin-top: 1.45rem
  border-radius: 0.5rem

.cardStyle
  margin-top: -1.5rem
</style>
