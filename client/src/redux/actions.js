import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";

export const getCountries = () => {
    return async function  (dispatch) {
        const apiCountry = await axios.get(
            "http://localhost:3001/countries/all"
        );
        console.log(apiCountry);
        const countries = apiCountry.data;
        dispatch({type: GET_COUNTRIES, payload: countries})
    }   
}

export const getCountry = (id) => {
    return async function (dispatch) {
        const apiCountry = await axios.get(
            `http://localhost:3001/countries/${id}`
        );
        console.log(apiCountry);
        const country = apiCountry.data;
        dispatch({type: GET_COUNTRY, payload: country})
    }
}