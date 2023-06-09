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
       
        if (resultado.ok) {
        
          let resultadoJSON = await resultado.json()
          //console.log("resultadoJSON: ", resultadoJSON.results)
          let store = getStore();
          
          setStore({ vehicle: resultadoJSON.results })
          return resultadoJSON
        } else {
          
          return false
        }
      },
  
      getSingleVehicle: async (numero) => {
        let resultado = await fetch(`${BASE_URL}starships/${numero}`)
        if (resultado.ok) {
          
          let resultadoJSON = await resultado.json()
          
          let store = getStore();
          setStore({ vehicle: resultadoJSON })
          return resultadoJSON
        } else {
          
          return false
        }
      }
    }; // <-- Added closing parenthesis here
  }
  