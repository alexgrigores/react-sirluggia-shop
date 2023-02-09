const initialState = {
    favorites: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            let productInFavorites = state.favorites.find(product => product.id === action.payload.product.id);

            if (!productInFavorites) {
                return Object.assign({}, state, {
                    favorites: [
                        ...state.favorites,
                        {
                            ...action.payload.product
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    favorites: state.favorites
                });
            }

        default:
            return state;
    }
}

