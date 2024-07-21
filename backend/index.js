const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/mini-backend', {
  useNewUrlParser: true,
  useUnifiedTopoLogy: true,
});

const infoSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
});

const Info = mongoose.model("info", infoSchema);

app.use(bodyParser.json());

app.post("/api/info", async (req, res) => {
  const { date, title, description, photo } = req.body;

   try {
    const info = new Info({date, title, description, photo});
    await info.save()
    res.status(200).send(info);
   } catch(error) {
    res.status(400).send(error);
   }

});

app.get('/api/info', async (req, res) => {
    try {
        const infos = await Info.find()
        res.status(200).send(infos)
    } catch(error){
        res.status(400).send(error)
    }
})

app.delete('/api/info', async (req, res) => {
  try {
    await Info.deleteMany({});
    res.status(200).send({ message: 'All records deleted' });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use(function(res, res, next) {
    res.header("access-control-allow-Origin", "*");
    res.setHeader("access-control-allow-Methods", 'GET, POST')
    next()
})
app.listen(port, () => {
    console.log('Server running on port 3000');
})