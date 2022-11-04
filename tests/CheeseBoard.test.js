const { User, Cheese, Board } = require("../models")

test("Testing if User table is created with data", async () => {
    const user1 = await User.create({
        name: "Omkar",
        email: "@gmail.com"
    })
    expect(user1).toHaveProperty("name", "Omkar")
    expect(user1).toHaveProperty("email", "@gmail.com")

    await user1.destroy()
})

test("Testing if Board table is created with data", async () => {
    const board1 = await Board.create({
        type: "Omkar's cheese board",
        description: "I don't know. I have no idea what a cheese board even is",
        rating: 4
    })
    expect(board1).toHaveProperty("type", "Omkar's cheese board")
    expect(board1).toHaveProperty("description", "I don't know. I have no idea what a cheese board even is")
    expect(board1).toHaveProperty("rating", 4)

    await board1.destroy()
})

test("Testing if Cheese is created with data", async () => {
    const cheese1 = await Cheese.create({
        title: "Wensleydale",
        description: "I remember its the cheese from wallace and gromit thats it 🤷‍♂️"
    })
    expect(cheese1).toHaveProperty("title", "Wensleydale")
    expect(cheese1).toHaveProperty("description", "I remember its the cheese from wallace and gromit thats it 🤷‍♂️")
    
    await cheese1.destroy()
})



test("Testing User association with cheese boards", async () => {
    const user2 = await User.create({
        name: "Pami",
        email: "Pami@gmail.com"
    })

    const board2 = await Board.create({
        type: "Pami's cheese board",
        description: "She don't know. She has no idea what a cheese board even is",
        rating: 5
    })

    await user2.addBoard(board2)

    const userBoard = await user2.getBoards()
    expect(userBoard[0]).toHaveProperty("id", board2.id)

    user2.removeBoard(board2)
    await board2.destroy()
    await user2.destroy()
})

test("Testing Board association with cheese ", async () => {

    const board2 = await Board.create({
        type: "Pami's cheese board",
        description: "She don't know. She has no idea what a cheese board even is",
        rating: 5
    })

    const cheese1 = await Cheese.create({
        title: "Wensleydale",
        description: "I remember its the cheese from wallace and gromit thats it 🤷‍♂️"
    })

    await board2.addCheese(cheese1)

    const boardCheese = await board2.getCheeses()
    expect(boardCheese[0]).toHaveProperty("id", cheese1.id)

    board2.removeCheese(cheese1)
    await board2.destroy()
    await cheese1.destroy()
})

test("Testing cheese association with board ", async () => {

    const board2 = await Board.create({
        type: "Pami's cheese board",
        description: "She don't know. She has no idea what a cheese board even is",
        rating: 5
    })

    const cheese1 = await Cheese.create({
        title: "Wensleydale",
        description: "I remember its the cheese from wallace and gromit thats it 🤷‍♂️"
    })

    await cheese1.addBoard(board2)

    const cheeseBoard = await cheese1.getBoards()
    expect(cheeseBoard[0]).toHaveProperty("id", board2.id)

    cheese1.removeBoard(board2)
    await board2.destroy()
    await cheese1.destroy()
})