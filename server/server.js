const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser')

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',credentials:true
}))

const Routes = require('./routes/character.routes')
Routes(app)

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)








app.listen(PORT,()=> {console.log(`Server is up and running ${PORT}`)})