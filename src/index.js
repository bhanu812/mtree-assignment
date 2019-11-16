const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const noteRouter = require('./routers/note')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(noteRouter)

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})