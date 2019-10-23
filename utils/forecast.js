const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'xxxx'

    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary)
        }
    })

}

module.exports = forecast