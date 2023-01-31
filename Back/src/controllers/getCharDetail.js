const axios = require("axios")



const getCharDetail = async (req, res) => {
    try {
        const { detailId } = req.params
        const result = axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const character = result.data
        const char = {
            image: character.image,
            name: character.name,
            gender: character.gender,
            status: character.status,
            origin: character.origin,
            species: character.species,
            id: character.id
        }
        res.status(200).json(char);

    } catch (error) {
        res.status(500).end(error.message)
    }
}


module.exports = {
    getCharDetail
}