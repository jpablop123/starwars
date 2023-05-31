export const favoriteStore = {
  favorites: [
    
  ], //la lista de planetas
  favorite: {}, //planeta en específico
};

export function favoriteActions(getStore, getActions, setStore) {
  const BASE_URL = process.env.BASE_URL;
  return {
    addFavorite: (index, value) => {
      const store = getStore();
      const actions = getActions();
      let valueExist, valueIndex;
      for (let i = 0; i < store.favorites.length; i++) {
        if (store.favorites[i].id == index) {
          valueExist = true;
          valueIndex = i;
        }
      }
      if (valueExist === true) {
        actions.removeFavorite(valueIndex);
      } else {
        setStore({
          favorites: [...store.favorites, { id: index, name: value }],
        });
      }
    },
    removeFavorite: (index) => {
      const store = getStore();
      setStore({
        favorites: [
          ...store.favorites.slice(0, index),
          ...store.favorites.slice(index + 1, store.favorites.length),
        ],
      });
    },
  };
}
