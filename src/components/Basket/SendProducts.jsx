import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>Price Info</span>
        <span>
          {state.totalPrice - state.offerPrice <= 100_000
            ? `${sendPrice.toLocaleString()} price`
            : "Price"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 100_000 && (
        <div className="send_free_img">
          <img src="images/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}
