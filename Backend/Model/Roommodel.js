const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  image: {
        data: Buffer,
        contentType: String
    },
    Id: String,
    Name: String,
    catagory: String,
    Price: String,
    discription: String,
});

const Room = mongoose.model("Room", RoomSchema);
 
module.exports = Room