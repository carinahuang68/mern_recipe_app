// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import Recipe from './models/recipe.model.js';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipe.route.js';


const app = express();

app.use(express.json()); // allows us to accept JSON data in req.body

app.use('/api/recipes', recipeRoutes);


app.listen(3000, async () => {
    console.log("Server started at http://localhost:3000");
    await connectDB();
})

