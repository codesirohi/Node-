const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dba78ec59cfe873a0062f443838a9901'

request({ url: url, json: true }, (error, response) =>{
    console.log(response.body.main)
})