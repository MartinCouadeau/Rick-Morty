const { fav } = require("./postFav")

const getFav = async (req, res) => { 
    try {
        res.status(200).json(fav)
    } catch (error) {
        res.status(500).end(error.message)
    }
    
}

module.exports = {
    getFav
}