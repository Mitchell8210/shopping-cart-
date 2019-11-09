import React, {useState}from 'react'
import { useCart } from '../Redux/ducks/Cart'
import {Link} from 'react-router-dom'
import {useMain} from '../Redux/ducks/Main_pictures'

export default function Aside(){
    // const {add} = useCart()
    const [item, setItem] = useState({})
    const {data, addItem, add} = useMain()

    return (
        <div className="asideContainer">
        <div>(gitHub)</div>
        <div className="sizesContainer">
            <div>Sizes:</div>
        <div className="sizeFilters">
        {/* <div onClick={data.filter(data=>{
                for(let i=0; i<data.length; i++;){
                    return()
                    if(data.availableSizes){
                    }
                }
            
            return(

            ) */}
        {/* })} className="sizes">XS</div> */}
        <div className="sizes">S</div>
        <div className="sizes">M</div>
        <div className="sizes">ML</div>
        <div className="sizes">L</div>
        <div className="sizes">XL</div>
        <div className="sizes">XXL</div>
        </div>
        <div className="sizesNote">Leave a star on Github if this repository was useful :)</div>
        <div className="sizesStar">
        <button>Star</button>
        <div>938</div>
        </div>
        </div>
        </div>

    )
}