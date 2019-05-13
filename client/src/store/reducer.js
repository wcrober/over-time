
const initialState = {
    isAuthenticated: false
  }
  
  const reducer = (state = initialState, action) => {
  
    switch(action.type) {
      case 'ON_AUTHENTICATED':
        return {
          ...state, // spread operator
          // If the token is not true we will return true or false
          isAuthenticated: action.token != null ? true : false
        }
    }
  
    return state
  }
  
  export default reducer