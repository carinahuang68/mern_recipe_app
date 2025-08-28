// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import Recipe from './models/recipe.model.js';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipe.route.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // allows us to accept JSON data in req.body

app.use('/api/recipes', recipeRoutes);


app.listen(PORT, async () => {
    console.log("Server started at http://localhost:" + PORT);
    await connectDB();
})

