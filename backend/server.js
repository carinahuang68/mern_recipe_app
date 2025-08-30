// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import recipeRoutes from './routes/recipe.route.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // allows us to accept JSON data in req.body

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);


app.listen(PORT, async () => {
    console.log("Server started at http://localhost:" + PORT);
    await connectDB();
})

