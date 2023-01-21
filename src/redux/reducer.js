import {ADD_FAV, DELETE_FAV, ORDER, FILTER} from "./actions"

const initialState = {
    myFavorites: [],
    allFavorites: []
}


export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allFavorites: [...state.myFavorites, action.payload]
            }
            break;
        case DELETE_FAV:
            const filtered = state.myFavorites.filter((char) => {
                return char.id !== action.payload
            })
            return {
                ...state,
                myFavorites: filtered,
                allFavorites: filtered
            }
            break;
        case FILTER:
            if (action.payload === "Default") {
                return {
                    ...state,
                    myFavorites: [...state.allFavorites]
                }
            }
            const filterCopy = [...state.allFavorites]
            const filteredCopy = filterCopy.filter((char) => {
                return char.gender === action.payload
            })
            return {
                ...state,
                myFavorites: filteredCopy
            }
            break;
        case ORDER:
            const orderCopy = [...state.allFavorites]
            const orderedCopy = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === action.payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return "Descendente" === action.payload ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                myFavorites: orderedCopy
            }
            break;
        default:
            return {
                ...state
            }
            break;
    }
}