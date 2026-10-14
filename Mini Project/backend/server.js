
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");
let db;
const rooms = ["G-101", "G-102", "G-103", "G-104", "G-105"];

// READ
app.get("/students", async (req, res) => {
  res.json(await db.find().toArray());
});

// CREATE
app.post("/students", async (req, res) => {
  const name = req.body.name;
  const list = await db.find().toArray();

  for (const room of rooms) {
    for (let bed = 1; bed <= 4; bed++) {
      if (!list.some(s => s.roomNo === room && s.bedNo === bed)) {
        const student = { name, roomNo: room, bedNo: bed };
        await db.insertOne(student);
        return res.json(student);
      }
    }
  }

  res.status(400).json({ message: "Hostel is full!" });
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);
  const { roomNo, bedNo } = req.body;
  const bed = Number(bedNo);

  if (!rooms.includes(roomNo) || !Number.isInteger(bed) || bed < 1 || bed > 4)
    return res.status(400).json({ message: "Invalid room or bed" });

  const occupied = await db.findOne({
    roomNo, bedNo: bed, _id: { $ne: id }
  });

  if (occupied)
    return res.status(400).json({ message: "Bed already occupied!" });

  await db.updateOne(
    { _id: id },
    { $set: { roomNo, bedNo: bed } }
  );

  res.json({ message: "Room updated!" });
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  await db.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ message: "Student deleted!" });
});

// START SERVER
async function start() {
  await client.connect();
  db = client.db("hostelDB").collection("girlsStudents");
  app.listen(3000, () => console.log("Server running on port 3000"));
}

start();
