import axios from "axios"

export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


export function addFavorites(char) {
 return function(dispatch) {
    axios.post(`http://localhost:3001/rickandmorty/fav`, char)
    .then((data) => data.data)
    .then((data) => {
        dispatch({
            type: ADD_FAV,
            payload: data,
        })
    })
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