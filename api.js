"use strict";



window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const App_ID = "7730ca69";
const API_KEY = "508c181a77bf9868e9f4563367005fe3";
const TYPE = "public";
//queries --> query array 
//successCallback -->function 
export const fetchData = async function (queries, successCallback) {
    const query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "20%")
        .replace(/\+/g, "%2B");

    const url = `${ACCESS_POINT}?app_id=${App_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    //Response
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}
