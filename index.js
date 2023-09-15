const express = require('express') /// importando el modelo express

const app = express()

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("hello world!")
})


app.listen(3000, () => {console.log('listening on port')})

