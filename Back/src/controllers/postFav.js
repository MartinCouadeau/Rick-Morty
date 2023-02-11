const { Favorite } = require("../DB_connection")

const postFav = async (character) => { 
    try {
       const newFav = await Favorite.create(character)

       return newFav
    } catch (error) {
        res.status(500).end(error.message)
    }
    
}

module.exports = {
    postFav,
    fav
}