const initialState = {
    isAuthenticated: false,
    token : localStorage.getItem('token'),
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {

            localStorage.setItem('token', action.payload.payload.token);
            return {
                ...state,
                ...action.payload.payload,
                token: action.payload.payload.token,
                isAuthenticated: true
            };
        };
        case 'LOGOUT_SUUCCESS' : {
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
              };
        };
        default :  return state
        
    }
}
// export const userReducer = (state = null, action) => {
//     switch (action.type) {
//       case 'LOGIN_SUCCESS':
//         return action.payload;
//       default:
//         return state;
//     }
//   };

export default adminReducer