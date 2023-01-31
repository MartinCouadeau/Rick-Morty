
const fav = []

const postFav = (req, res) => { 
    fav.push(req.body)
    console.log("fav posts = ", fav)
    res.status(200).json(req.body)
}

module.exports = {
    postFav,
    fav
}