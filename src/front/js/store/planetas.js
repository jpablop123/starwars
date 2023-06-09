export const planetStore = {
    planet: [], // the list of people
    planets: {} // specific person
  };

export function planetActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL;
    return {
        getPlanets: async () => {
            //console.log(BASE_URL)
            let resultado = await fetch(`${BASE_URL}planets`)
           
            if (resultado.ok) {
                
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
                
                setStore({planet: resultadoJSON.results })
                return resultadoJSON
            } else {
               
                return false
            }
        },

        getSinglePlanet: async (numero) => {
            let resultado = await fetch(`${BASE_URL}planets/${numero}`)
            if (resultado.ok) {
              
                let resultadoJSON = await resultado.json()
                
                let store = getStore();
                setStore({planet: resultadoJSON})
                return resultadoJSON
            } else {
                
                return false
            }
        }
    }
}