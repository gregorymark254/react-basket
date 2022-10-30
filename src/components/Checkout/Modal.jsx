import React from 'react'
import './modal.css'

const Modal = () => {
  const handleClick = (e) => {
    e.preventDefault()
    alert("Your order has been sent")
    window.location.href = "/"
  }
  return (
    <>
      
    <div className="mainscreen">
      <div className="card">
        <div className="leftside">
          <img
            src="https://ak.picdn.net/offset/photos/5f88c1326f52af4409e4bf16/medium/offset_1020444.jpg?DFghwDcb?DFghwDcb"
            className="product"
            alt="Shoes"
          />
        </div>
        <div className="rightside">
          <form >
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" className="inputbox" name="card_number" required />

            <p>Card Type</p>
            <select className="inputbox" name="card_type"  required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div className="expcvv">

              <p className="expcvv_text">Expiry</p>
              <input type="date" className="inputbox" name="exp_date"  required />

              <p className="expcvv_text2">CVV</p>
              <input type="password" className="inputbox" name="cvv" required />
            </div>
            <p></p>
            <button type="submit" onClick={handleClick} className="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
  
    </>  
  )
}

export default Modal
