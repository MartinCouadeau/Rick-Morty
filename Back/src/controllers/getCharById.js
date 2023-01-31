const axios = require("axios")


const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const character = result.data
    
        const char = { 
            image: character.image,
            name: character.name,
            gender: character.gender,
            species: character.species,
            id: character.id
        }
        res.status(200).json(char);

    } catch (error) {
        res.staus(500).end(error.message)
    }  
}


module.exports = {
    getCharById
}