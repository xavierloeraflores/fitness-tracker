const baseURL = 'https://cryptic-retreat-99508.herokuapp.com/api'


const request = async ({endpoint, method, body, token})=>{
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
    
    console.log(data)
    
    if(data.error) throw(data.error)
    return  data.data ? data.data : null

    }
    catch(err){
      console.error(err)
    }
    finally{
      console.log('request', baseURL+endpoint)
    }
}


const authenticate = async (endpoint, bodyData)=>{
    const data = await this.request({
        endpoint:endpoint,
        method:'POST',
        body: {
          username:bodyData.username,
          password:bodyData.password
        },
        token:null
      })
    return data
}


const login = async (bodyData)=>{
    const endpoint = '/login'
    const data = await authenticate(endpoint, bodyData)
    return data
}


const register = async (bodyData)=>{
    const endpoint = '/register'
    const data = await authenticate(endpoint, bodyData)
    return data
}