
import axios from 'axios';
export async function getdata(){
    const res = await axios.get("http://localhost:7834/fetch");
    // console.log(res)
    console.log("hi")
    return res.data[0];

}