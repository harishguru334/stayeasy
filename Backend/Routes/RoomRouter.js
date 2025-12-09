const express = require("express")
const { createroom, getRoom } = require("../Controller/RoomController")
const router = express.Router()

router.post('/Room', createroom)
router.get('/get',getRoom)


module.exports = router