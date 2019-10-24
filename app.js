const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('New York', (error, data) => {
    // If error stop function execution
    if(error){
        return console.log(error)
    }

    console.log('Error ', error)
    console.log('Data ', data)

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return error
        }
        
        console.log('Error', error)
        console.log('Data', data)
    })
})