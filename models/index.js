const User = require("./User.model")
const Cheese = require("./Cheese.model")
const Board = require("./Board.model")

User.hasMany(Board)
Board.belongsTo(User)

Board.belongsToMany(Cheese, { through: "cheese_tag" })
Cheese.belongsToMany(Board, { through: "cheese_tag" })

module.exports = {
    User,
    Cheese,
    Board
}