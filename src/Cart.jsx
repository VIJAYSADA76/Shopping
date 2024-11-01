import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment, decrement, remove } from "./store";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [dpAmount, setDpAmount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);

  const handleDiscountPercentage = (dValue) => setDpAmount(dValue);

  const applyCoupon = () => {
    switch (couponCode) {
      case "VIJAY10":
        setCouponDiscountPercentage(10);
        break;
      case "VI08P02":
        setCouponDiscountPercentage(20);
        break;
      case "VJ30":
        setCouponDiscountPercentage(30);
        break;
      case "VJ40":
        setCouponDiscountPercentage(40);
        break;
      default:
        setCouponDiscountPercentage(0);
    }
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const discountAmount = (total * dpAmount) / 100;
    const couponDiscount = (total * couponDiscountPercentage) / 100;
    const netAmount = total - discountAmount - couponDiscount;

    return {
      total: parseFloat(total.toFixed(2)),
      discountAmount: parseFloat(discountAmount.toFixed(2)),
      couponDiscount: parseFloat(couponDiscount.toFixed(2)),
      netAmount: parseFloat(netAmount.toFixed(2)),
    };
  };

  const { total, discountAmount, couponDiscount, netAmount } = calculateTotal();

  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-3d-render-of-an-abandoned-shopping-cart-image_3861045.jpg');
            background-size: cover;
            background-position: center;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            color: black;
          }
          ul, p, h2, input, button {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
          }
        `}
      </style>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <li key={item.name}>
            {item.name} - Price: ${item.price}
            <button style={{ color: "black" }} onClick={() => dispatch(decrement({ name: item.name }))}>-</button>
            {item.quantity}
            <button style={{ color: "black" }} onClick={() => dispatch(increment({ name: item.name }))}>+</button>
            <button style={{ color: "red" }} onClick={() => dispatch(remove({ name: item.name }))}>Remove</button>
          </li>
        ))
      )}
      
      <p>Total Before Discount: ${total}</p>

      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter the coupon code"
      />
      <button onClick={applyCoupon}>Apply Coupon</button>

      <h2>Apply Additional Discount</h2>
      <button onClick={() => handleDiscountPercentage(10)}>10%</button>
      <button onClick={() => handleDiscountPercentage(20)}>20%</button>
      <button onClick={() => handleDiscountPercentage(30)}>30%</button>

      <p>Discount Amount ({dpAmount}%): ${discountAmount}</p>
      <p>Coupon Discount Amount ({couponDiscountPercentage}%): ${couponDiscount}</p>
      <p>Final Amount After Discount: ${netAmount}</p>
    </>
  );
}

export default Cart;
