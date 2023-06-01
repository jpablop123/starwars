import { planetStore, planetActions } from "./planetas.js";
import { favoriteStore, favoriteActions } from "./favorites.js";
import { peopleStore,peopleActions } from "./people.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
          ruta: "uno",
          indice: 0,
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
          ruta: "dos",
          indice: 1,
        },
      ],
      ...planetStore,
      ...peopleStore,
      ...favoriteStore,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the local store
        setStore({ ...store, demo: demo });
      },
      ...planetActions(getStore, getActions, setStore),
      ...favoriteActions(getStore, getActions, setStore),
      ...peopleActions(getStore, getActions, setStore),
    },
  };
};

export default getState;
