import axios from "axios";


const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const getToken = () => {
  return localStorage.getItem('token');
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const updateProfileInfo = (name, phone)=> async(dispatch)=>{
    try{
     const res = await api.put(`${process.env.REACT_APP_URL}api/user/profile?name=${name}&phone_number=${phone}`,{
     })
     return res
     }catch(error){
     
     throw error
     }
       }
       export const updateAvatar = (formData)=> async(dispatch)=>{
        try{
         const res = await api.put(`${process.env.REACT_APP_URL}api/user/profile`,formData,{
         })
         return res
         }catch(error){
         
         throw error
         }
           }
export const addPost = (body)=> async(dispatch)=>{ 
    try{
     const res = await api.post(`${process.env.REACT_APP_URL}api/user/posts`,body,{
     })
     return res
     }catch(error){
     
     throw error
     }
       }


       export const getAllPosts = ()=> async(dispatch)=>{ 
        try{
         const res = await api.get(`${process.env.REACT_APP_URL}api/user/posts`,{
         })
         return res
         }catch(error){
         
         throw error
         }
           }

           export const deletePost = (id)=> async(dispatch)=>{ 
            try{
             const res = await api.delete(`${process.env.REACT_APP_URL}api/user/posts/${id}`,{
             })
             return res
             }catch(error){
             
             throw error
             }
               }
    
               export const updatePost = (body ,id)=> async(dispatch)=>{ 
                try{
                 const res = await api.put(`${process.env.REACT_APP_URL}api/user/posts/${id}`, body ,{
                 })
                 return res
                 }catch(error){
                 
                 throw error
                 }
                   }
// CREATE THE PROJECT 
export const CreateProject = (formData) => async (dispatch) =>{
  try {
    const res = await api.post(`${process.env.REACT_APP_URL}api/user/projects`, formData,{
    })
    console.log(res)
    if(res.status === 200){
      dispatch({
        type: 'CREATE_PROJECT',
        payload: res.data
      });
    }
    return res;
  }catch(err){
console.log(err)
  }
}
export const getAllProjects = () => async (dispatch)=>{
  try{
    const res = await api.get(`${process.env.REACT_APP_URL}api/user/projects`,{  
    })
    return res
  }catch(error){
    throw error
  }

} 

// EVENTS ACTIONS

export const createEvent = (formData) => async (dispatch)=>{
  try{
    const res = await api.post(`${process.env.REACT_APP_URL}api/admin/events`,formData,{  
    })
    return res
  }catch(error){
    throw error
  }

} 

export const getAllEvents = () => async (dispatch)=>{
  try{
    const res = await api.get(`${process.env.REACT_APP_URL}api/admin/events`,{  
    })
    return res
  }catch(error){
    throw error
  }

} 