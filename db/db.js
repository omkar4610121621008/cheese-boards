const { Sequelize } = require("sequelize")
const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
    logging: false
})

module.exports = db