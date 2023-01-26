

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const char = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species,
            id: data.id
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(char));
    }).catch((error) => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
}


module.exports = {
    getCharDetail,
}