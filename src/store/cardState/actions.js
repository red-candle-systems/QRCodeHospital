import service from '../../apiservice/service.js' //  Obtener todos los equipos desde la api
var equipos = []    //  variable global de los equipos para uso exclusico en las actions
var mantenimientos = []  //variable global de los mantenimientos para uso exclusico en las actions


///////////////////////////////  GET   //////////////////////////////////////////////////////

//Obtener todos los equipos desde la api
export async function getEquipmentsAction({ commit, dispatch }) {
    const response = await service.getEquipments();
    equipos = response.data.Items;

    if (response.data.LastEvaluatedKey != undefined) {
        var lastEK = response.data.LastEvaluatedKey;
        //console.log("Esta es la llave", lastEK);
        commit("updateLastEvaluatedKey", lastEK.ID_Equipo)
        commit("updateEquipmentsAux", equipos)
        commit("updateEquipments", equipos)
        //await dispatch("getMoreEquipmentsAction")
    }
    else {
        commit("updateEquipmentsAux", equipos)
        commit("updateEquipments", equipos)
        commit("updateLastEvaluatedKey", "")
    }

}
//obtener todos los mantenimientos de la api
export async function getMaintenancesAction({ commit, state }) {
    //console.log("esta es la fecha: ", state.MaintenanceSectionSelected)

    const response = await service.getAllMantenances(state.MaintenanceSectionSelected);
    mantenimientos = response.data;
    //console.log(mantenimientos)
    commit("updateMaintenancesAux", mantenimientos)
    commit("updateMaintenances", mantenimientos)
}


///////////////////////////////  GET   //////////////////////////////////////////////////////







///////////////////////////////  GETBYID   //////////////////////////////////////////////////////
//obtener todos los mantenimientos por id de equipo de la api
export async function getMaintenancesByIdAction({ commit, state }, IdEquipo) {
    const response = await service.getAllMantenances(state.MaintenanceSectionSelected);

    mantenimientos = response.data;
    var man = mantenimientos.filter((e) =>
        e.ID_Equipo == IdEquipo
    );
    commit("updateMaintenancesAux", man)
    commit("updateMaintenances", man)

    //console.log(man)
}

///////////////////////////////  GETBYID   //////////////////////////////////////////////////////






































