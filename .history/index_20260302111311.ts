import { Request } from "express";

const express = require('express');
const app = express();
const port: number = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World!');
});




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

