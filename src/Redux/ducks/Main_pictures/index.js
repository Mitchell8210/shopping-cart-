import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'

//action names
const GET_DATA ='GET_DATA'
const SHOW_CART = 'SHOW_CART'
const ADD_TO_CART= 'ADD_TO_CART'

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
        case ADD_TO_CART:
                // let existed_item = state.cart.find(item=> action.id ===item.id)
                // if(existed_item){
                //     existed_item.quantity= existed_item.quantity+1;
                //     return {...state, cart: [...state.cart]}
                // }
                // else{
                //     return {...state, cart: [...state.cart, action.payload]}
                // }
                    // return{
                    //     ...state,
                    //     cart: state.cart.map(e=>{
                    //         if(e.item.id===existed_item){
                    //             e.quantity +=1
                    //             return e
                    //         } else{
                    //             return {...state, cart: state.cart}
                    //         }
                    //     })
                    // }
            
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
           
        dispatch(
            showCartItems()
            )
            
        })
        
    }
}
function checkDuplicate(item){
    return dispatch =>{ 
        dispatch({
        type:ADD_TO_CART,
        payload:item
        
    })
    console.log('checkDuplicate:',item.id)
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
     const addItem = (item)=> (dispatch(addToCart(item),
     dispatch(checkDuplicate(item))))
     const removeItem = (id)=> dispatch(removeFromCart(id))
    useEffect(()=>{
       dispatch(showCartItems())
        getSkus()
    },[dispatch])
    return {data, getSkus, cart, addItem, removeItem }
}