const express = require('express')
const app = express()
const cors = require('cors')




app.use(cors());
app.use(express.json());
app.use(require('./Routes/RoomRouter'))


app.listen(8000, () =>{console.log("server is running")})