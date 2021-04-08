import axios from 'axios';
export default class service {
  static endpoint = "https://792zxpfywg.execute-api.us-east-1.amazonaws.com/v2/Equipo";
  static endpointGetBySection = "https://meke072ewi.execute-api.us-east-1.amazonaws.com/v2/Mantenimientos";
  static endpointMant = "https://mas4zhpar9.execute-api.us-east-1.amazonaws.com/v2/Mantenimiento/equipo";
  static endpointStepper = "https://loihwzj263.execute-api.us-east-1.amazonaws.com/def/Instructivo";

  //Obtiene todos los mantenimientos
  static getAllMantenances(obj) {
    return axios.get(`${service.endpointGetBySection}/${obj.Año}-${obj.Mes}`, {
      headers: {
        "x-api-key": "iRNB5DZhMO4K8xQoKSbsm9yEEnxx0NlW6Deag3Ab"
      }
    });
  }


  //Obtiene los equipos por id 
  static getEquipmentById(idEquipo) {
    return axios.get(`${service.endpoint}/${idEquipo}`, {
      headers: {
        "x-api-key": "iRNB5DZhMO4K8xQoKSbsm9yEEnxx0NlW6Deag3Ab"
      }
    });
  }

  //Obtiene todos los mantenimientos de un equipo
  static getMantenances(id) {
    return axios.get(`${service.endpointMant}/${id}`, {
      headers: {
        "x-api-key": "iRNB5DZhMO4K8xQoKSbsm9yEEnxx0NlW6Deag3Ab"
      }
    });
  }



  //Obtiene los pasos para el uso de un equipo
  static getSteps(id) {
    return axios.get(`${service.endpointStepper}/${id}`, {
      headers: {
        "x-api-key": "iRNB5DZhMO4K8xQoKSbsm9yEEnxx0NlW6Deag3Ab"
      }
    });
  }
}