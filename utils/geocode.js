const request = require('request')

const geocode = (address, callback) => {
    const url = 'xxxx' + encodeURIComponent(address) + 'yyyy'

    request({ url: url, 'json': true }, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0){
            callback('Unable to find location. Try another.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode