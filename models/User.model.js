const { DataTypes, Model } = require("sequelize")
const db = require("../db/db")

class User extends Model {}

User.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize: db
})

module.exports = User