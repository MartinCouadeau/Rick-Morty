const app = require("./app")
const { database } = require("./DB_connection")
const { saveApiData } = require("./controllers/saveApiData")

const PORT = 3001

database.sync({ force: true})
    .then( async () => {
        await saveApiData()
        app.listen(PORT, () => {
            console.log("escuchando en puerto, ",PORT)
        })
    })
    .catch((error) => console.log(error.message))

