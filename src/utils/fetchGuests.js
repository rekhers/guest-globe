import * as d3 from 'd3';
import guests from '../data/guestData.csv';
/*
* 
* Fetches the guest info CSV
*
* @async
* @function fetchGuests 
* @return { Promise <Array> } Array of guest objects 
*
*/
export async function fetchGuests() {
    try {
        return await d3.csv(guests);
    }
    catch(e) {
        console.log(`😿😿😿Error Meowssage: ${e}`);
    }
}