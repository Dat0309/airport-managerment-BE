import express from "express";
import asyncHandler from "express-async-handler";
import Terminal from "../Models/terminal.js";

const terminalRouter = express.Router();

terminalRouter.get(
    "/",
    asyncHandler(async (req, res) => {
        const terminals = await Terminal.find({});

        res.json({terminals});
    })
)

export default terminalRouter;