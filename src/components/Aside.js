import React, {useState}from 'react'
import { useCart } from '../Redux/ducks/Cart'
import {Link} from 'react-router-dom'


export default function Aside(){
    // const {add} = useCart()
    const [item, setItem] = useState({})


    return (
        <div className="asideContainer">
        <div>(gitHub)</div>
        <div className="sizesContainer">
        <div className="sizeFilters">
        <div className="sizes">XS</div>
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