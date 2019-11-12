import React, {useState} from 'react'
import { useMain } from '../Redux/ducks/Main_pictures/index'
import CurrencyFormat from 'react-currency-format';



export default function Aside(){
    const {cart, removeItem} = useMain()
    // const [item, setItem] = useState({})

function handleDelete(id){
    removeItem(id)
}
////Function to get Ids of the items in cart
let cartIds = cart.map(item =>{
    return(
        item.item.id
    )
})

let myCart = cart.map(item =>{
    return item.item.id
})
let mySet = new Set(cartIds)
console.log('cart:',cart)
console.log('mySet:',[...mySet])

let filteredCart= [...mySet].filter((item, index) =>{
    return(
        cart.indexOf(item) >=index
    )
})
console.log('filteredCart:',filteredCart)


/////////
let prices= cart.map(item=>{
    return(
        item.item.price
    )
})
function sum(a, b){
    return a + b
}
let subTotal = prices.reduce(sum,0).toFixed(2)
let taxes= (subTotal*0.046).toFixed(2)
let grandTotal = (Number(subTotal) + Number(taxes))
///////////
    return (


        <div className="cartContainer">
            {cart.map(item=>{
                return(
                    <div key={'the'+item.id} className="cartItems">
                        <img src={`/assets/${item.item.sku}_2.jpg`}/>

                        <div className="itemTitleAndDescription">
                        <div className="cartItemTitle">{item.item.title}</div>
                        <div className="cartItemStyle">{item.item.style}</div>
                        <div className="quantity">Quantity: {(item.quantity? item.quantity:"")}</div>

                        </div>
                        <div className="cartPriceContainer">
                        <button onClick={(e)=>handleDelete(item.id)}>del</button>
                        <div className="cartPrice">
                        <CurrencyFormat value={item.item.price} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} />
                        </div>
                        <div className="quantityButtons">
                            <button className="minus" onClick={(e)=>item.item.quantity-=1}>-</button>
                            <button onClick={(e)=>item.item.quantity+=1} className="plus">+</button>
                        </div>
                        </div>
                    </div>
                )
            })}
            <div className="checkout">
                <div className="subTitle">SUBTOTAL</div>
                <div className="subCalc">
                <div className="subTotal">${subTotal}</div>
                <div className="tax">Taxes: ${taxes}</div>
                <div className="grandTotal">Grand Total: ${grandTotal.toFixed(2)}</div>

                <div className="subTotalInstallments">OR UP TO 5 x ${(subTotal/5).toFixed(2)}</div>
                
                </div>

            </div>
            <div className="checkoutButton">CHECKOUT</div>
        </div>
    )
}