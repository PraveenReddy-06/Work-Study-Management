const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

//integrate cors and json
const app= express()
app.use(cors())
app.use(express.json())

//provide the connection to mongodb
mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("connection to mongodb sucessful"))
.catch((err) => console.log("Error connecting to MongoDB:", err));

const PORT =27017
app.listen(PORT,()=>console.log("Server started with S(PORT"))