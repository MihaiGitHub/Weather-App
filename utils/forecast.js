const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'xxxx'

    request({ url: url, json: true }, (error, response) => {
        // Fail at a low level; error argument exists, but response does not
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error){ // Fail at request input
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary)
        }
    })

}

module.exports = forecast