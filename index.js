import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
      res.render("index.ejs", {
       Jokes: result.data.joke
      });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  });

app.listen(port,(req,res) =>{
    console.log(`listening to port: ${3000}`);
})