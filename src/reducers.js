import { combineReducers } from 'redux'

import homePage from './components/pages/HomePage/HomePageReducer';


const App = combineReducers({
  homePage
})

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined
//   }
//   return App(state, action)
// }

export default App
