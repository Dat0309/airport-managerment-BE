import express from "express";
import asyncHandler from "express-async-handler";
import AirplaneType from "../Models/airPlaneType.js";


const airPlaneTypeRouter = express.Router();

airPlaneTypeRouter.get(
    "/",
    asyncHandler(async (req, res) => {
        const airPlaneTypes = await AirplaneType.find({});

        res.json({airPlaneTypes});
    })
)

export default airPlaneTypeRouter;