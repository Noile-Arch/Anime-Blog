const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Blogs = require("./models/blog");

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Connect Database
let isConnected = false;

const connectDb = async () => {
  if (isConnected) {
    console.log("MongoDb already connected");
    return;
  }
  try {
    await mongoose.connect("mongodb://localhost:27017/animeblog", {
      dbName: "animeblog",
    });
    isConnected = true;
    console.log("Mongodb connected");
  } catch (error) {
    console.error("Mongo db connection error");
  }
};

app.post("/blog/new", async (req, res) => {
  await connectDb();
  const { title, body, author } = req.body;
  const newBlog = new Blogs({
    title,
    body,
    author,
  });
  await newBlog.save();
  console.log(newBlog);
  res.json(newBlog);
});

app.get("/blogs", async (req,res) => { 
  try {
    await connectDb();
    const data = await Blogs.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log('Error fetching data');
  }

});
app.get("/blog/:id", async (req, res) => {
  try {
    await connectDb();
    const id = req.params.id;
    console.log(id);
    const data = await Blogs.findOne({ _id: id });
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

