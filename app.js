const request = require('request')

const url = 'xxxx'

// Parse request as json
request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ', response.body.currently.temperature)
})