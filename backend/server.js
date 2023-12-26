const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const InventoryModel = require("./models/inventoryModel")
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
//Routes

app.post("/addItem",(req, res)=>{
  InventoryModel.create(req.body)
  .then(items => res.json(items))
  .catch(err=> res.json(err))
})
app.get("/getAllItems", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;


//connect to DB and start server
mongoose 
  .connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err)=> console.log(err))