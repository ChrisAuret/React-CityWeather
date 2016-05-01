import axios from 'axios';
const API_KEY = "7f690c6f38e9a6c54ffe54a3c3c6c115";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    console.log('Request:', request );
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}


// submit form ==> calls action creator (fetch weather(city))
// make ajax call which returns a promise
//  return the promise as the payload
//
//promise is intercepted by middleware redux-promise.
// redux-promise  Stops the action, maninipulates it, 
//  finally it passes to reducer
