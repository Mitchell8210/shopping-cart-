import React, {useState} from 'react'
import {useMain} from '../Redux/ducks/Main_pictures'
import { selector } from 'postcss-selector-parser'
import CurrencyFormat from 'react-currency-format';
import 'semantic-ui-css/semantic.min.css'
import { Button, Menu, Sidebar } from "semantic-ui-react"
import Cart from './Cart'

export default function Main(){
    const {data, addItem, add} = useMain()
    const [visible, setVisible] = useState(false)
    // console.log(data)
    // console.log(add)
    
   function handleAdd(item){
       addItem(item)
   }

    return (
        <div className="mainContainer">
            <Button
        icon="shop"
        onClick={e => (!visible ? setVisible(true) : setVisible(false))}
        className="cart"
        secondary
      />


<Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          id="sidebar"
        >
          <Cart />
        </Sidebar>
        <Sidebar.Pusher>
            <div className="orderByLine">
                <div className="productsFound">{data.length} Product(s) Found</div>
                <div className="orderBy">
                <div >Order by</div>
                <select>
                    <option>Select</option>
                    <option>Lowest to Highest</option>
                    <option>Highest to Lowest</option>
                </select>
                </div>
               
            </div>
            <div className="items">
            {data.map(data1=>{
                return(
                    <div key={data1.id} className="pictureContainer">
                        <div >
                        <div className="pictures">
                            <div className={data1.isFreeShipping ? "freeShipping": "freeShippingHidden"}>Free Shipping</div>
                       <img width="100%"src={`/assets/${data1.sku}_1.jpg`}/>
                       </div>
                       

                       <div className="itemTitle">{data1.title}</div>

                       <div className="itemPrice">
                       <CurrencyFormat value={data1.price} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} /></div>
                       <div className="orItem">OR</div>
                       <div className="itemPriceMultiple"><CurrencyFormat value={data1.price/data1.installments} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'}></CurrencyFormat> X {data1.installments}</div>
                       <div className="itemAddToCart" onClick={(e)=>handleAdd(data1)}>Add to cart</div>
                       <div>{(data1.price/data1.installments).toFixed(2)}X{data1.installments}</div>
                       </div>
                    </div>
                )
            })}
            
            </div>
            </Sidebar.Pusher>
      </Sidebar.Pushable>
        </div>
    )
}