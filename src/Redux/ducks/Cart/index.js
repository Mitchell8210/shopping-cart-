import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { dispatch } from 'rxjs/internal/observable/range'

//action names
const GET_PICTURES = '/cart_GET_PICTURES'

// reducer
const initialState = {
    cart: []
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_PICTURES:
            return {...state , cart: action.payload}
        default:
            return state
    }
}


//ACTIONS
function listCartItems(){
    
}

function addItem(){

}
//CUSTOM HOOK

 export function useCart(){
     const dispatch = useDispatch()
    const add = item => dispatch(addItem(item))
    const fetch = () => dispatch(listCartItems())

    // useEffect(()=>{
    //     fetch()
    // },[])
}