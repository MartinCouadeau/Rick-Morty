const { fav } = require("./postFav")

const getFav = (req, res) => { 
    res.status(200).json(fav)
}

module.exports = {
    getFav
}