import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/contacts",contactRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(`Connected to MongoDB! ${process.env.Mongo_URI}`);   
});
