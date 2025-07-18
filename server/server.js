import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
     res.send(`Api is working`);
})
app.use('/api/user' ,userRouter)

app.listen(PORT,()=>{
    console.log(`server is listening ${PORT}`)
})