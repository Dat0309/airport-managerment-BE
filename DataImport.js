import express from "express";
import asyncHandler from "express-async-handler";
import Airlines from "./Models/airLines.js";
import airlines from "./data/airLineData.js";
import AirplaneType from "./Models/airPlaneType.js";
import airplanetypes from "./data/airPlaneTypeData.js";
import Fight from "./Models/fight.js";
import fights from "./data/fightData.js";
import Terminal from "./Models/terminal.js";
import terminals from "./data/terminalData.js";


const ImportData = express.Router();


ImportData.post(
  "/airLine",
  asyncHandler(async (req, res) => {
    await Airlines.deleteMany({});
    const importAirline = await Airlines.insertMany(airlines);
    res.send({importAirline});
  })
);

ImportData.post(
  "/airPlaneType",
  asyncHandler(async (req, res) => {
    await AirplaneType.deleteMany({});
    const importAirPlane =  await AirplaneType.insertMany(airplanetypes);
    res.send({importAirPlane});
  })
);

ImportData.post(
  "/fight",
  asyncHandler(async (req, res) => {
    await Fight.deleteMany({});
    const importFight = await Fight.insertMany(fights);
    res.send({importFight});
  })
);

ImportData.post(
  "/terminal",
  asyncHandler(async (req, res) => {
    await Terminal.deleteMany({});
    const importTerminal = await Terminal.insertMany(terminals);
    res.send({importTerminal});
  })
);


export default ImportData;
