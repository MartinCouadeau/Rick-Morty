require("dotenv").config()
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelCharacter  = require('./models/Character')
const modelFavorite = require("./models/Favorite")


const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
    { 
        logging: false,
        native: false 
    }
);


modelCharacter(database)
modelFavorite(database)

module.exports = {
    database,
    ...database.models,
};