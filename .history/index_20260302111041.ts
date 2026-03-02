const express = require('express');
const app = express();
const port: number = 3000;

app.get('/',(req,res: express.Response)=>{
    res.send('Hello World!');
});




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

