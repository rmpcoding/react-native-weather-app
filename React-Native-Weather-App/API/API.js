import React from 'react';
import axios from 'axios';

function apiCall() {
    let city = 'rosemead';
    const baseUrl =
        'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/';
    const apiKey = 'a059151d000029215400bdaa7965fbc2';
    const URL = `${baseUrl}weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios
        .get(URL)
        .then(res => {
            console.log(res);
            console.log('SUCCESS');
            console.log(res.status);
            console.log('====================');
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            console.log('Error in API Call retrieving weather data');
        });
}

export default apiCall;
