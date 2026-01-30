import express from "express";
import dotenv from "dotenv";
import { readFile } from "fs";


dotenv.config();

const app = express();

app.use(express.static("src"));

app.get(`/`, (request,response) => {


    readFile('./src/pages/index.html', 'utf8', (err,html) =>
    {
        if (err) {
            response.status(500).send('sorry, out of order')

        }

        response.send(html)
    })
    
});

app.listen(process.env.PORT || 3000, () => console.log("App avaiable on http://localhost:3000"))