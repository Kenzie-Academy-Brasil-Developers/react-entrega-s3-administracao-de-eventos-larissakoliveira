import axios from 'axios'

const apiDrinks = axios.create({
    baseURL: "https://api.punkapi.com/v2/beers",
});

export default apiDrinks;