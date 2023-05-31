export const peopleStore = {
    people: [], // the list of people
    person: {} // specific person
  };

export function peopleActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL;
    return {
        getPeoples: async () => {
            //console.log(BASE_URL)
            let resultado = await fetch(`${BASE_URL}people`)
            if (resultado.ok) {
                alert("Se trajo correctamente la lista de people")
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
                setStore({ ...store, people: resultadoJSON.results })
                return resultadoJSON
            } else {
                alert("hubo un error en la petición de planetas")
                return false
            }
        },

        getSinglePeople: async (numero) => {
            let resultado = await fetch(`${BASE_URL}people/${numero}`)
            if (resultado.ok) {
                alert("Se trajo correctamente el people solicitado")
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ", resultadoJSON.result)
                let store = getStore();
                setStore({ ...store, people: resultadoJSON.result })
                return resultadoJSON
            } else {
                alert("hubo un error en la petición del people")
                return false
            }
        }
    }
}