import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
    const {getTotalCartAmount, all_product ,removeFromCart , cartItems } = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-formate-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      
      {
        all_product.map((e)=>{
            if(cartItems[e.id] > 0)
            {
           
     return   <div>
              <div className='cartitems-formate cartitems-formate-main'>
             <img src={e.image} alt='' className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
             <p>${e.new_price* cartItems[e.id]}</p>
            <img src={remove_icon} onClick={()=> removeFromCart(e.id)} alt='' className='carticon-remove-icon'/>
            </div>
           <hr/>
        </div>
          }  
         
        })}

        <div className='cartitems-down'>
          <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Subtatals</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>free</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have promocode , Enter it here</p>
            <div className='cartitems-promobox'>
            <input type='text' placeholder='Promo code' />
            <button>Search</button>
            </div>
          </div>
        </div>
        </div>

  )
}

export default CartItems
