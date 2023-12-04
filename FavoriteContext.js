// FavoriteContext.js

import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (drugId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(drugId)) {
        return prevFavorites.filter((id) => id !== drugId);
      } else {
        return [...prevFavorites, drugId];
      }
    });
  };

  const isFavorite = (drugId) => {
    return favorites.includes(drugId);
  };

  const useFavorite = (drugId) => {
    return { isFavorite: isFavorite(drugId), toggleFavorite: () => toggleFavorite(drugId) };
  };

  return (
    <FavoriteContext.Provider value={{ useFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
