import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import handler from "express-async-handler";
import foodRouter from "./routers/food.router.js";
import userRouter from "./routers/user.router.js";
import orderRouter from "./routers/order.router.js";
//import { OrderModel } from "./models/order.model.js";
//import { OrderStatus } from "./constants/orderStatus.js";

import { dbconnect } from "./config/database.config.js";
dbconnect();

// let paymentIdFromCallback;

// function setPaymentId(id) {
//   paymentIdFromCallback = id;
// }

// function getPaymentId() {
//   return paymentIdFromCallback;
// }

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get(
  "/track-callback",
  handler(async (req, res) => {
    // const userId = req.query.user_id;
    // const order = await getNewOrderForUser(userId);

    // Parse the parameters from the URL query string
    const {
      pidx,
      transaction_id,
      amount,
      purchase_order_id,
      purchase_order_name,
    } = req.query;

    console.log("Payment Callback Received:");
    console.log("pidx:", pidx);
    console.log("transaction_id:", transaction_id);
    console.log("amount:", amount);
    console.log("purchase_order_id:", purchase_order_id);
    console.log("purchase_order_name:", purchase_order_name);

    // setPaymentId(pidx || transaction_id);

    // const paymentId = getPaymentId();
    // console.log("Payment ID before PUT request:", paymentId);

    // if (!paymentId) {
    //   res.status(BAD_REQUEST).send("Payment ID Not Found!");
    //   return;
    // }

    // // Check if the order exists and is associated with the user
    // if (!order) {
    //   res.status(BAD_REQUEST).send("Order Not Found!");
    //   return;
    // }

    // order.paymentId = paymentId;
    // order.status = OrderStatus.PAYED;
    // await order.save();

    // res.send(order._id);
    res.redirect("http://localhost:3000/track");
  })
);

// Assuming that you have defined the getNewOrderForUser function somewhere
// const getNewOrderForUser = async (userId) =>
//   await OrderModel.findOne({ user: userId, status: OrderStatus.NEW });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
