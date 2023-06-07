export const vehicleStore = {
    vehicle: [], // the list of people
    vehicles: {} // specific person
  };
  
  export function vehicleActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL;
    return {
      getVehicles: async () => {
        //console.log(BASE_URL)
        let resultado = await fetch(`${BASE_URL}starships`)
        console.log(resultado)
        if (resultado.ok) {
          alert("Se trajo correctamente la lista de Vehicle")
          let resultadoJSON = await resultado.json()
          //console.log("resultadoJSON: ", resultadoJSON.results)
          let store = getStore();
          console.log(resultadoJSON)
          setStore({ vehicle: resultadoJSON.results })
          return resultadoJSON
        } else {
          alert("hubo un error en la petición de vehicles")
          return false
        }
      },
  
      getSingleVehicle: async (numero) => {
        let resultado = await fetch(`${BASE_URL}starships/${numero}`)
        if (resultado.ok) {
          alert("Se trajo correctamente el people solicitado")
          let resultadoJSON = await resultado.json()
          console.log("resultadoJSON: ", resultadoJSON)
          let store = getStore();
          setStore({ vehicle: resultadoJSON })
          return resultadoJSON
        } else {
          alert("hubo un error en la petición del people")
          return false
        }
      }
    }; // <-- Added closing parenthesis here
  }
  