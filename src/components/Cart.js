import React, {useState} from 'react'
import { useCart } from '../Redux/ducks/Cart'




export default function Aside(){

const {add} = useCart()
const [item, setItem] = useState({})

    return (
        <div>Aside</div>
    )
}