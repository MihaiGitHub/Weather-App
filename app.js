const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Get access to command line arguments using process instead of yargs
const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location}) => {
        // If error stop function execution
        if(error){
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return error
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}