import express from "express";
import asyncHandler from "express-async-handler";
import babershops from "./data/babershopData.js";
import hairstyles from "./data/hairstyleData.js";
import orders from "./data/orderData.js";
import services from "./data/servicesData.js";
import users from "./data/userData.js";
import BaberShop from "./Models/babershop.js";
import HairStyle from "./Models/hairstyle.js";
import Order from "./Models/order.js";
import Services from "./Models/services.js";
import User from "./Models/user.js";


const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/babershop",
  asyncHandler(async (req, res) => {
    await BaberShop.deleteMany({});
    const importBarberShop = await BaberShop.insertMany(babershops);
    res.send({importBarberShop});
  })
);

ImportData.post(
  "/hairstyle",
  asyncHandler(async (req, res) => {
    await HairStyle.deleteMany({});
    const importHairStyle =  await HairStyle.insertMany(hairstyles);
    res.send({importHairStyle});
  })
);

ImportData.post(
  "/services",
  asyncHandler(async (req, res) => {
    await Services.deleteMany({});
    const importService = await Services.insertMany(services);
    res.send({importService});
  })
);

ImportData.post(
  "/orders",
  asyncHandler(async (req, res) => {
    await Order.deleteMany({});
    const importOrders = await Order.insertMany(orders);
    res.send({importOrders});
  })
);


export default ImportData;
