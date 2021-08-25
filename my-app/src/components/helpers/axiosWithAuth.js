import axios from 'axios';

const axiosWithAuth=()=>{
    const token = localStorage.getItem('token');
    return axios.create({
        headers:{
            Authorization:token
        },
        baseUrl: "https://watermyplants-02.herokuapp.com/"
    });
}
export default axiosWithAuth