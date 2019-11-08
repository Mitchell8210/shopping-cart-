import React, {useState} from 'react'
import {useMain} from '../Redux/ducks/Main_pictures'
import { selector } from 'postcss-selector-parser'




export default function Main(){
    const {data} = useMain()
    
   

    return (
        <div>
            <div className="orderByLine">
                <div className="productsFound">{data.length} Products Found</div>
                <div>
                <div>Order by</div>
                <select>
                    <option>1</option>
                    <option>2</option>
                </select>
                </div>
            </div>
            <div className="items">
            {data.map(data=>{
                return(
                    <div key={data.id}>
                        <div className="items">
                       <img width="200px"src={`/assets/${data.sku}_1.jpg`}/>
                       </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}