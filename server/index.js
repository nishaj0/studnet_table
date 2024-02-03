import express from "express";
import studentData from "./STUDENTS_MOCK_DATA.json" assert { type: "json" };
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
     console.log("get req");
     try {
          res.status(200).json(studentData);
     } catch (error) {
          res.status(500).json("something went wrong");
     }
});

app.listen(3000, () => console.log("listening to port", 3000));
