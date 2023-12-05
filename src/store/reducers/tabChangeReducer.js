const initialState ={
    tabValue:'',
}

const tabChangeReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TAB_CHANGE': {
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
                tabValue:action.payload
            };
        };
        default :  return state
        
    }
}

export default tabChangeReducer