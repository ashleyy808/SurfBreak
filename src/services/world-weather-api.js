const BASE_URL = 'https://api.worldweatheronline.com/premium/v1/marine.ashx';




// functions
export function getCurWeatherByLatLon(lat, lon) {
    return fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`)
    .then(res => res.json());
}