import axios from "axios";
import React from "react";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import classes from "./payOnlineButton.module.css";

export default function PayOnlineButton({ order, onPayOnlineClick }) {
  const { clearCart } = useCart();
  const handlePayOnlineClick = async () => {
    if (onPayOnlineClick) {
      onPayOnlineClick(order);
    }

    const payload = {
      return_url: process.env.REACT_APP_PUBLIC_RETURN_URI,
      website_url: process.env.REACT_APP_PUBLIC_WEBSITE_URI,
      amount: parseInt(order.totalPrice) * 100,
      purchase_order_id: order.id,
      purchase_order_name: `Order #${order.id} - ${order.items.length} items`,
      customer_info: {
        name: order.name,
        email: order.email,
        address: order.address,
      },
    };

    try {
      const response = await axios.post(
        `https://khalti-api-w3m5.onrender.com/khalti_api`,
        payload
      );
      if (response && response.data && response.data.data) {
        window.location.href = `${response?.data?.data?.payment_url}`;
        clearCart();
        // toast.success("Payment Saved Successfully", "Success");
      }
    } catch (error) {
      toast.error("Payment Save Failed", "Error");
    }
  };

  return (
    <div>
      <button className={classes.button} onClick={handlePayOnlineClick}>
        Pay By Khalti
      </button>
    </div>
  );
}
