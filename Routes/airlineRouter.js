import express from "express";
import asyncHandler from "express-async-handler";
import Airlines from "../Models/airLines.js";

const airlineRouter = express.Router();

airlineRouter.get(
    "/",
    asyncHandler(async (req, res) => {
        const airlines = await Airlines.find({});

        res.json({airlines});
    })
)

export default airlineRouter;