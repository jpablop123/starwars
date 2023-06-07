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
            console.log(resultado)
            if (resultado.ok) {
                alert("Se trajo correctamente la lista de planets")
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
                console.log(resultadoJSON)
                setStore({planet: resultadoJSON.results })
                return resultadoJSON
            } else {
                alert("hubo un error en la petición de planetas")
                return false
            }
        },

        getSinglePlanet: async (numero) => {
            let resultado = await fetch(`${BASE_URL}planets/${numero}`)
            if (resultado.ok) {
                alert("Se trajo correctamente el planet solicitado")
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ", resultadoJSON)
                let store = getStore();
                setStore({planet: resultadoJSON})
                return resultadoJSON
            } else {
                alert("hubo un error en la petición del planet")
                return false
            }
        }
    }
}