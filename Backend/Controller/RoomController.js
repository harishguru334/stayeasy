const express = require('express')
const Room = require("../Model/Roommodel")


const createroom = async (req, res) => {
    console.log(req.body)

        const newRoom = new Room({
        Name: req.body.Name,
        catagory: req.body.catagory,
        Price: req.body.Price,
        discription: req.body.discription
    })
    try {
        const saveRoom = await newRoom.save()
    } catch (error) {

    }
    
} 
const getRoom = async(req, res)=>{
    console.log("tasting")
}
module.exports={createroom , getRoom}