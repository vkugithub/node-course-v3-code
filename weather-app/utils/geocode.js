const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlrcmFudGt1bWFyaXQiLCJhIjoiY2szMDNkN2ZlMGVsbDNvand1dWZ2b3I3ZyJ9.F8BI-CX2aydp3CZnnI5lYQ&limit=1'

//    request({ url, json: true }, (error, { body }) => {  //Destructuring acording to ES6
//
//       if (error) {
//            callback('Unable to connect to location services!', undefined)
//        } else if (body.features.length === 0) {
//            callback('Unable to find location. Try another search.', undefined)
//        } else {
//            callback(undefined, {
//                latitude: body.features[0].center[1],
//                longitude: body.features[0].center[0],
//                location: body.features[0].place_name
//            })
//        }
//    })

     request({ url, json: true }, (error, response) => {  //Destructuring


           if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (response.body.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                const resData={latitude: response.body.features[0].center[1],
                               longitude: response.body.features[0].center[0],
                               location: response.body.features[0].place_name
                                           }
                callback(undefined, resData)
            }
        })
}

module.exports = geocode