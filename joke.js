const axios = require('axios');

async function fetchJoke(){
    let response = await axios.get('https://icanhazdadjoke.com/',{
        headers:{Accept:"application/json"}
    })
    console.log(response)
    return response.data.joke
}
module.exports=fetchJoke