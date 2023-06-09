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
            console.log(resultado)
            if (resultado.ok) {
               
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
               
                setStore({  people: resultadoJSON.results })
                return resultadoJSON
            } else {
                
                return false
            }
        },

        getSinglePeople: async (numero) => {
            let resultado = await fetch(`${BASE_URL}people/${numero}`)
            if (resultado.ok) {
               
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ", resultadoJSON)
                let store = getStore();
                setStore({people: resultadoJSON})
                return resultadoJSON
            } else {
               
                return false
            }
        }
    }
}