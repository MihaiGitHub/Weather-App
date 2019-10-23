const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'xxxx'

// Parse request as json
request({ url: url, json: true }, (error, response) => {
    // Fail at a low level; error argument exists, but response does not
    if(error){
        console.log('Unable to connect to weather service')
    } else if (response.body.error) { // Fail at request input
        console.log('Unable find location')
    }
    else {
        console.log('It is currently ', response.body.currently.temperature)
    }
})

const geocodeURL = 'yyyy'
// Parse request as json
request({ url: geocodeURL, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to location services')
    } else if (response.body.features.length === 0){
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
    
        console.log(latitude, longitude)
    }
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })












geocode('New York', (error, data) => {
    console.log('Error ', error)
    console.log('Data ', data)
})


