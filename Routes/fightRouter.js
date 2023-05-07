import express from "express";
import asyncHandler from "express-async-handler";
import Fight from "../Models/fight.js";

const fightRouter = express.Router();

fightRouter.get(
    "/",
    asyncHandler(async (req, res) => {
        const fights = await Fight.find({});
        res.json({ fights });
    })
);

fightRouter.get(
    "/airplanetypeid/:id",
    asyncHandler(async (req, res) => {
        const id = req.params.id;
        const fights = await Fight.find({ airplane_type_id: id }).sort({ _id: -1 });

        res.json(fights)
    })
);

export default fightRouter;