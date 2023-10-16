const initialState = {
    isAuthenticatedAdmin: false,
    isAuthenticatedUser: false,
    token : localStorage.getItem('token'),
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS_ADMIN': {

            localStorage.setItem('token', action.payload.payload.token);
            console.log("ADMIN_LOGIN")
            return {
                ...state,
                ...action.payload.payload,
                token: action.payload.payload.token,
                isAuthenticatedAdmin: true
            };
        };
        case 'LOGIN_SUCCESS_USER': {
            localStorage.setItem('token', action.payload.payload.token);
            console.log("USER_LOGIN")
            return {
                ...state,
                ...action.payload.payload,
                token: action.payload.payload.token,
                isAuthenticatedUser: true
            };
        };
        case 'LOGOUT_SUUCCESS' : {
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticatedAdmin: false,
                isAuthenticatedAdmin:false
              };
        };
        default :  return state
        
    }
}

export default adminReducer