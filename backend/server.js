import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cntmongoDB from './config/mongodb.js'; 
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App cofiguration
const app = express()
const port = process.env.PORT || 4000;
cntmongoDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// api end points
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>console.log('Server started on PORT : ' + port))
