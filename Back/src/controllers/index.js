const { getCharById } = require("./getCharById")
const { getCharDetail } = require("./getCharDetail")
const { getFav } = require("./getFav")
const { postFav } = require("./postFav")
const { deleteFav } = require("./deleteFav")

module.exports = {
    getCharById,
    getCharDetail,
    getFav,
    postFav,
    deleteFav
}