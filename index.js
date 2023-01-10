const express = require('express');
const mongoose = require('mongoose')
const multer = require('multer');
const cors = require('cors');
const { resister, login, status, getstatus } = require('./controller/auth');

mongoose.set('strictQuery', true)
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });


app.post('/autn/resister', resister)
app.post('/autn/login', login)
app.post('/status', status)
app.get('/getstatus', getstatus)


mongoose.connect(process.env.DBurl).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('listening on port 3000');
  })
})
