const { fav } = require("./postFav")

const deleteFav = async (req, res) => { 
    try {
        const { id } = req.params
        const chardelete = fav.find((char) => char.id == id)
        if (chardelete) {
            fav = fav.filter((char) => char.id != id)
            res.status(200).json(chardelete)
        } else {
            throw new Error('El personaje ya no esta en la lista de favoritos')
        }
    } catch (error) {
        res.status(500).end(error.message)
    }
    
}

module.exports = {
    deleteFav
}