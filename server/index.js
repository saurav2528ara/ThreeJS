import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb"}));

const port = process.env.PORT || 8080;

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req,res) => {
    res.status(200).json({message: "Hello from Backend"});
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})