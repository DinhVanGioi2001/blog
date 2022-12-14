import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://hungdinh:1@cluster0.ml91cje.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts)

mongoose
    .set('strictQuery', false)
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to db');
        app.listen(PORT, () => {
            console.log(`Server is runing on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log('err', err);
    })
