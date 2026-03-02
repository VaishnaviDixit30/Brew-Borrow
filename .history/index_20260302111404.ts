import { Request, Response } from "express";

const express = require('express');
const app = express();
const port: number = 5000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World!');
});




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

