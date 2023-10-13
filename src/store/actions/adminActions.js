import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
})
const getToken = ()=>{
    return localStorage.getItem('token')
}
api.interceptors.request.use(
    (Config) =>{
        const Token = getToken()
        if(Token){
Config.headers['Authorization'] = `bearer ${Token}`
        }
        return Config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export const UserLogin = ({email, password}) => async(dispatch)=>{
    const body = {
        email,
        password,
    }

try {
 
    const res = await axios.post(`${process.env.REACT_APP_URL}api/auth/login`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res)
    if(res.status === 200){
        
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        });
        return res
    }
}catch(error){
    throw error
}
}


export const UserSignUp = ({ name, email, password, verificationCode }) => async (dispatch) => {
    const body = {
      name,
      email,
      password,
      verificationCode,
    };
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}api/auth/register`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      
      if (res.status === 200) {
        dispatch({
          type: 'SIGNUP_SUCCESS',
          payload: res.data
        });
      }
  
      
      return res;
  
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  export const verificationCode = ({verificationCode})=> async(dispatch)=>{
    const body = {
        verificationCode,
    };
    try{
    const res = await axios.post(`${process.env.REACT_APP_URL}api/auth/otp/verify`, body,{
    headers: {'Content-Type': 'application/json'}
    })
    if(res.status === 200){
        dispatch({type: "VERIFIED",
        payload: res.data,})
    }
    return res
    }catch(error){
    
    throw error
    }
      }

      export const getAdminDashboardStats = ()=> async(dispatch)=>{ 
       try{
        const res = await api.get(`${process.env.REACT_APP_URL}api/admin/getAdminDashboardCounts`,{
        headers: {'Content-Type': 'application/json'}
        })
        return res
        }catch(error){
        
        throw error
        }
          }
