const { fav } = require("./getFav")

const deleteFav = (req, res) => { 
    const { id } = req.params
    const chardelete = fav.find((char) => char.id == id)
    if (chardelete) {
        res.status(200).json(chardelete)
    } else {
        res.status(400).json({error: "personaje no encontrado en lista de favoritos"})
    }
}


module.exports = { 
    deleteFav
}