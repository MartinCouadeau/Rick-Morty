const { getCharById } = require("./getCharById")
const { getCharDetail } = require("./getCharDetail")
const { getFav } = require("./getFav")
const { postFav } = require("./postFav")
const { deleteFav } = require("./deleteFav")
const { getAllChars } = require("./getAllChars")


module.exports = {
    getCharById,
    getCharDetail,
    getFav,
    postFav,
    deleteFav,
    getAllChars
}