import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'

//action names
const GET_PICTURES = '/filters_GET_PICTURES'

// reducer
const initialState = {
    pictureFilters: []
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_PICTURES:
            return {...state , pictureFilters: action.payload}
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

    useEffect(()=>{
        fetch()
    },[])
}