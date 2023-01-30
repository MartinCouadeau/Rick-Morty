const axios = require("axios")


var fav = []


const getCharById = (req, res) => {
    const { id } = req.params
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const char = { 
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
            id: data.id
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(char));
    }).catch((error) => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
}


const getCharDetail = (req, res) => {
    const { detailId } = req.params
    axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.data)
    .then((data) => {
        const char = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species,
            id: data.id
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(char));
    }).catch((error) => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
}


const getFav = (req, res) => { 
    res.status(200).json(fav)
}


const postFav = (req, res) => { 
    fav.push(req.body)
    console.log("fav posts = ", fav)
    res.status(200).json(req.body)
}


const deleteFav = (req, res) => { 
    const { id } = req.params
    const chardelete = fav.find((char) => char.id == id)
    if (chardelete) {
        fav = fav.filter((char) => char.id != id)
        res.status(200).json(chardelete)
    } else {
        res.status(400).json({error: "personaje no encontrado en lista de favoritos"})
    }
}


module.exports = {
    getCharById,
    getCharDetail,
    getFav,
    postFav,
    deleteFav
}