(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"67dc":function(t,e,i){t.exports=i.p+"img/logo.abb119c7.png"},8327:function(t,e,i){},b0d4:function(t,e,i){"use strict";i("8327")},d683:function(t,e,i){t.exports=i.p+"img/logo2.1cc7db88.jpg"},ee87:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{id:"q-app",view:"lHh Lpr lFf"}},[r("q-header",{staticClass:"glossy",staticStyle:{height:"150px","border-radius":"0 0 1rem 1rem"}},[r("q-toolbar",{staticClass:"justify-center"},[r("q-img",{staticClass:"shadow-7",staticStyle:{"margin-top":"0.5rem",height:"60px",width:"100%","border-radius":"0.5rem"},attrs:{basic:"",src:i("d683")}})],1),r("div",{staticClass:"row"},[r("q-img",{staticClass:"fixed-top-left",staticStyle:{height:"4.1rem",width:"4.1rem",margin:"0.4rem","border-radius":"0.5rem"},attrs:{basic:"",src:i("67dc")}}),r("q-btn",{staticClass:"fixed-top-left",staticStyle:{height:"4.1rem",width:"4.1rem",margin:"0.4rem","border-radius":"0.5rem"},attrs:{to:"/detail/"+this.EquipoSelected.ID_Equipo}}),r("div",{staticClass:"col-12",staticStyle:{"text-align":"center","margin-top":"-0.8rem"}},[r("h5",{staticStyle:{padding:"0.5rem",margin:"2rem 1rem 0rem 1rem","border-radius":"0.5rem","background-color":"#193d5c"}},[t._v("\n          Mantenimientos por equipo\n        ")])])],1)],1),r("q-page-container",[r("router-view"),r("MaintenanceSectionEquipment",{staticStyle:{"margin-bottom":"3rem"}})],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"row q-col-gutter-x-xs q-col-gutter-y-lg justify-center",staticStyle:{width:"100%"}},t._l(t.items,(function(e,r){return i("div",{key:r,staticStyle:{width:"108px"}},[i("q-btn",{staticClass:"btn-fixed-width",staticStyle:{width:"100%","margin-bottom":"-0.7rem"},attrs:{color:t.drawerState?"grey-9":"orange-"+e.Color,align:"between",icon:"engineering"},on:{click:function(i){return t.verMaintenanceTable(e)}}},[t._v("\n        "+t._s(e.Nombre)+" - "+t._s(e.Anio)+"\n      ")])],1)})),0)])},o=[],s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function c(t){if(!isNaN(t)&&t>=1&&t<=12)return s[t-1]}var l={data(){return{items:[],totalDias:0}},created(){let t=new Date("2019/02/01"),e=new Date,i=e.getMonth()+1,r=!1,a=6;for(let n=e.getFullYear();n>=t.getFullYear()+1;n--){for(let t=i;t>=1;t--){10==a&&0==r?(r=!0,a--):a<10&&0==r?(a++,10==a&&(r=!1)):6==a&&r?(r=!1,a++):(a--,6==a&&(r=!0));let e={Nombre:c(t),Anio:n,Color:a,Mes:t};this.items.push(e)}i=12}for(let n=i;n>t.getMonth();n--){10==a&&0==r?(r=!0,a--):a<10&&0==r?(a++,10==a&&(r=!1)):6==a&&r?(r=!1,a++):(a--,6==a&&(r=!0));let e={Nombre:c(n),Anio:t.getFullYear(),Color:a,Mes:n};this.items.push(e)}},methods:{verMaintenanceTable(t){1==t.Mes.toString().length&&(t.Mes="0"+t.Mes.toString());var e={Mes:t.Mes,"Año":t.Anio};this.MaintenanceSectionSelected=e,this.$router.push({path:"/MaintenanceList"})}},computed:{MaintenanceSectionSelected:{get(){return this.$store.state.cardState.MaintenanceSectionSelected},set(t){this.$store.commit("cardState/updateMaintenanceSectionSelected",t)}}}},d=l,u=i("2877"),m=i("9c40"),p=i("eebe"),g=i.n(p),h=Object(u["a"])(d,n,o,!1,null,null,null),b=h.exports;g()(h,"components",{QBtn:m["a"]});var S={name:"CardsPage",components:{MaintenanceSectionEquipment:b},computed:{EquipoSelected:{get(){return this.$store.state.cardState.EquipoSelected},set(t){this.$store.commit("cardState/updateEquipoSelected",t)}}}},f=S,w=(i("b0d4"),i("4d5a")),M=i("e359"),q=i("65c6"),y=i("068f"),v=i("09e3"),C=Object(u["a"])(f,r,a,!1,null,null,null);e["default"]=C.exports;g()(C,"components",{QLayout:w["a"],QHeader:M["a"],QToolbar:q["a"],QImg:y["a"],QBtn:m["a"],QPageContainer:v["a"]})}}]);