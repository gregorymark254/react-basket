import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
// import Offer from "./Offer";
// import SendProducts from "./SendProducts";
import OfferBadge from "./OfferBadge";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);

  const handleClick = (e) => {
    e.preventDefault()
    window.confirm("Are you sure you want to make this purchase?")
    window.location.href = "/modal"
  }
  

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Basket</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Home
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
              Your Items
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Total Price</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} Ksh</span>
            </div>

            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Offer</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} Offer</span>
              </div>
            )}
            {/* <Offer />
            <SendProducts /> */}
            {/* <div className="basket_send">
              <span>Total :</span>
              <span>{state.totalPriceFainal.toLocaleString()} Ksh</span>
            </div> */}
            
            <button className="basket_button_buy" onClick={handleClick}>Buy</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >Remove {state.basket.length}
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">Your Basket Is Empty...</span>
        </div>
      )}
      
    </>
  );
}
