import * as FavoritesConstants from "./FavoritesConstants";

export function addToFavorites(payload) {
    return {
        type: FavoritesConstants.ADD_TO_FAVORITES,
        payload
    }
}