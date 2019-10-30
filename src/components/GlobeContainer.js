import React, { useState, useEffect } from 'react';
import Globe from './Globe';
import { fetchGuests } from '../utils/fetchGuests';

/*
*
* This function should act like a controller between 
* managing the initial data fetch and the rendering of the globe
*
*/
export default function GlobeContainer() {
    const [guests, setGuests] = useState(null);

    useEffect(() => {
        fetchGuests().then(guests => {
            setGuests(guests);
            // renderGlobe();
        })
    }, []);

    return (
        <div> hehe </div>
    );
}