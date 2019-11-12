import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/Base.css'
import { Provider } from 'react-redux'
import store from '../Redux/store'
import 'semantic-ui-css/semantic.min.css'
import Aside from './Aside'
import Main from './Main'
import Cart from './Cart'

export default props => {

  return (
    <Provider store={store}>
      <div className="appContainer">
        <Aside/>
        <Main />
      </div>
    </Provider>
  )
}