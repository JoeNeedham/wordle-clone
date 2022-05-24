const PORT = 8000
const axios = require("axios");
const express = require("express")

const app = express()

app.listen(PORT, () => console.log('Server running on port' + PORT))

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5'},
        headers: {
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            'X-RapidAPI-Key': 'c977122234msh8668a2a9fceb01ap1a69e2jsnd54aafbddeb3'
        }
    };
    
    axios.request(options).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

