import express, { response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';


const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from Dall.E Routes" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.images.generate({
  prompt,
  n: 1,
  size: "1024x1024",
  response_format: 'b64_json'
});


        const image = response.data.data[0].b64_json;
        res.status(500).json({ message: "Something went wrong" });

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong"});
        
    }
})

export default router;
