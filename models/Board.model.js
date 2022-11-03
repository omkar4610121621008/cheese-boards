const { DataTypes, Model } = require("sequelize")
const db = require("../db/db")

class Board extends Model {}

Board.init({
    type: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db
})

module.exports = Board