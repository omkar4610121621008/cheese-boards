const user = require("./User.model")
const cheese = require("./Cheese.model")
const board = require("./Board.model")

user.hasMany(board)
board.belongsTo(user)

board.belongsToMany(cheese, { through: "cheese_tag" })
cheese.belongsToMany(board, { through: "cheese_tag" })

module.exports = {
    user,
    cheese,
    board
}