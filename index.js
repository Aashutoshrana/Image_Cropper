const express=require('express');
const app=express();

const multer=require('multer');
const path=require('path');
const fs=require('fs');
const sharp=require('sharp');
//sharp libray resize the image
app.set("view engine","ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const storage=multer.memoryStorage();
const upload=multer({storage});

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/resize',upload.single('image'),async(req,res)=>{
    try{
        const resizedImageBuffer=await sharp(req.file.buffer)
        .resize(Number(req.body.width),Number(req.body.height))
        .toBuffer()
        res.writeHead(200,{
            "Content-Type":"image/webp",
            "Content-Disposition":'attachment;filename="resized_image.png"'
        })
        res.end(resizedImageBuffer)
    }
    catch(err){
      console.log(err);
      res.status(500).send("Error resizing Image")
    }
})

app.listen(5000,()=>{
    console.log("App is listening on port 5000")
})