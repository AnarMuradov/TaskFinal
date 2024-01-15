import express from 'express'
import mongoose from 'mongoose';
import cors from "cors";
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const { Schema } = mongoose;

const biletSchema = new Schema({
 title:String,
 file:String,
 img:String,
 text:String,
},
{
    timestamps:true
});

const biletModel = mongoose.model('Bilet', biletSchema);


app.get('/', async (req, res) => {
    const bilets = await biletModel.find()
    res.send(bilets)
  })

  app.get('/:id',async (req, res) => {
    const {id} = req.params
    const bilets = await biletModel.findById(id)
    res.send(bilets)
  })
  
  app.post('/',async (req, res) => {
    const {title,file,img,text}=req.body
    const newBilet = new biletModel({title,file,img,text})
    await newBilet.save()
    res.send(newBilet)
  })
  
  app.put('/:id',async (req, res) => {
    const {id} = req.params
    const {title,file,img,text}=req.body
    const bilets = await biletModel.findByIdAndUpdate(id,{title,file,img,text})
    res.send(bilets)
  })
  
  app.delete('/:id',async (req, res) => {
    const {id} = req.params
    const bilets = await biletModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

  mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  