import axios from 'axios'

const API_KEY = '96b9bbb0901ff7664c7900392939e968';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload:request
    };
}