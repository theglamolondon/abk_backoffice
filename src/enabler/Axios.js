import axios from "axios";
export const URL_BASE_API = "http://localhost:8080"
//export const URL_BASE_API = "https://abk-web-api.herokuapp.com"

//const token = localStorage.getItem("NVL_TK");

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    console.log("sarting web request with data :", config.data)
    
    if(config.method === "post" || "put"){      
      //let userRaw = localStorage.getItem("user")
      //let user = JSON.parse(userRaw);

      if(config.data instanceof FormData){
        config.data.append("idUtilisateur", 1)
      }else{
        config.data = {...config.data, idUtilisateur: 1}
      }
    }

    /*
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    */
    config.headers['Content-Type'] = config.headers['Content-Type'] === undefined ? 'application/json' : config.headers['Content-Type'];
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.baseURL = URL_BASE_API
    return config;
  },
  error => {
    Promise.reject(error)
});

//Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log("request success   response")
    return response
  },
  (error) => {
    console.log("request error response")
    const originalRequest = error.config;
    /*
    if (error.response.status === 401 && originalRequest.url === "https://localhost:44328/auth/token") {
      document.location.href = "https://localhost:44328/";
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post('/auth/token', {
        "token": token
      })
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          let responseToken = res.data.token
          localStorage.setItem("NVL_TK", responseToken);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + responseToken;
          return axios(originalRequest);
        }
      })
    }    
    */
  return Promise.reject(error);
});

export default axios;