const baseURL = 'https://cryptic-retreat-99508.herokuapp.com/api'


export const request = async ({endpoint, method, body, token})=>{
    try{
      let headers = {'Content-Type': 'application/json'}
      if(token) headers['Authorization']=`Bearer ${token}`
      let _request = {
      method:method,
      headers: headers,
    }
    if(body) _request['body']= JSON.stringify(body)
    console.log("options",_request)
    const resp = await fetch(baseURL+endpoint,_request)
    const data = await resp.json()
    
    console.log('apiClient', data)
    
    if(data.error) throw(data.error)
    return  data ? data : null

    }
    catch(err){
      console.error(err)
    }
    finally{
      console.log('request', baseURL+endpoint)
    }
}


export const authenticate = async (endpoint, bodyData)=>{
    const data = await request({
        endpoint:endpoint,
        method:'POST',
        body: {
          username:bodyData.username,
          password:bodyData.password
        }
      })
    return data
}


export const login = async (bodyData)=>{
    const endpoint = '/users/login'
    const data = await authenticate(endpoint, bodyData)
    return data
}


export const register = async (bodyData)=>{
    const endpoint = '/users/register'
    const data = await authenticate(endpoint, bodyData)
    return data
}

export const getMe = async(token)=>{
  const endpoint = '/users/me'
  const data = await request({
    endpoint:endpoint, 
    method:'GET',
    token:token
  })
  return data
}

export const getUserRoutinesWithToken= async(username, token)=>{
  const endpoint = `/users/${username}/routines`
  const data = await request({
    endpoint:endpoint, 
    method:'GET',
    token:token
  })
  return data
}

export const getUserRoutines= async(username)=>{
  const endpoint = `/users/${username}/routines`
  const data = await request({
    endpoint:endpoint, 
    method:'GET'
  })
  return data
}
export const getMyRoutines = async (token) =>{
  try{
      const user = await getMe(token)
      const userRoutines = await getUserRoutinesWithToken(user.username, token)
      return userRoutines
  }catch(error){
      throw error
  }

}