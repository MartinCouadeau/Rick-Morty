const axios = require("axios")


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


module.exports = {
    getCharById
}