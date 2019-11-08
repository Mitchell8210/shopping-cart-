import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'

//action names
const GET_DATA ='GET_DATA'

// reducer
const initialState = {
  
    data: []
}

export default function Reducer(state = initialState, action){
    switch (action.type){
        case GET_DATA:
            return {...state , data: action.payload}
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
//CUSTOM HOOK

 export function useMain(){
     const dispatch = useDispatch()
     const data = useSelector(appState=> appState.mainReducer.data)
     const getSkus= () => dispatch(getSku())


    useEffect(()=>{
       
        getSkus()
    },[])
    return {data, getSkus }
}