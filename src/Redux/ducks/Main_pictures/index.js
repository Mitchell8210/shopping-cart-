import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'

//action names
const GET_DATA ='GET_DATA'
const SHOW_CART = 'SHOW_CART'

// reducer
const initialState = {
  
    data: [],
    cart:[]
}

export default function Reducer(state = initialState, action){
    switch (action.type){
        case GET_DATA:
            return {...state , data: action.payload}
        case SHOW_CART:
            return {...state, cart: action.payload}
        default:
            return state
    }
}



//ACTIONS


function getSku(){
    return dispatch =>{
        Axios.get(`/products`).then(resp=>{
            dispatch({
                type: GET_DATA,
                payload: resp.data
            })
        })
    }
}
function addToCart(item){
    return dispatch =>{
        Axios.post(`/cart`,{item, quantity:1}).then(resp=>{
           
            dispatch(showCartItems(resp.data))
        })
    }
}
function removeFromCart(id){
    return dispatch=>{
        Axios.delete(`/cart/${id}`).then(resp=>{
            dispatch(showCartItems(resp.data))
        })
    }
}
function showCartItems(){
    return dispatch=>{
        Axios.get(`/cart`).then(resp=>{
            dispatch({
                type:SHOW_CART,
                payload: resp.data
            })
        })
    }
}

//CUSTOM HOOK

 export function useMain(){
     const dispatch = useDispatch()
     const data = useSelector(appState=> appState.mainReducer.data)
     const getSkus= () => dispatch(getSku())
     const cart = useSelector(appState => appState.mainReducer.cart)
     const addItem = (item)=> dispatch(addToCart(item))
     const removeItem = (id)=> dispatch(removeFromCart(id))
    useEffect(()=>{
       dispatch(showCartItems())
        getSkus()
    },[dispatch])
    return {data, getSkus, cart, addItem, removeItem }
}