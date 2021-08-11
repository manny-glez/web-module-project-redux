import { FAVORITE_MOVIE } from '../actions/movieActions.js'
import movies from '../data.js';

export const initialState = {
  favorites: [],
  displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FAVORITE_MOVIE:
      return {
        ...state,
        displayFavorites: true,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

export default favoritesReducer;