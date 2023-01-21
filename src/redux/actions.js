export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


export function addFavorites(char) {
 return {
    type: ADD_FAV,
    payload: char
 }
} 

export function deleteFavorites(id) {
    return {
        type: DELETE_FAV,
        payload: id
    }
}

export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}