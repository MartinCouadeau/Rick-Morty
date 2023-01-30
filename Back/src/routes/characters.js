const express = require("express");
const { 
    getCharById,
    getCharDetail,
    getFav,
    postFav,
    deleteFav
 } = require("../controllers/index")

const router = express.Router()

router.get("/character/:id",getCharById)
router.get("/detail/:detailId",getCharDetail)
router.get("/fav",getFav)
router.post("/fav",postFav)
router.delete("/fav/:id",deleteFav)

module.exports = router