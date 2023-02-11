const { Character } = require("../DB_connection")


const getAllChars = async (req, res) => {
    try {
        const allUsers = await Character.findAll()
        res.status(200).json(allUsers);
    } catch (error) {
        res.staus(404).end(error.message)
    }
}

module.exports = {
    getAllChars
}