
const fav = []

const postFav = async (req, res) => { 
    try {
        fav.push(req.body)
        console.log("fav posts = ", fav)
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).end(error.message)
    }
    
}

module.exports = {
    postFav,
    fav
}