import React, { useState } from 'react';
import MapQuest from '../components/MapQuest/MapQuest';
import MyLocation from '../components/MyLocation/MyLocation';

const HomePage = () => {
    const [lat, setLat] = useState('51.034809');
    const [lng, setLng] = useState('3.729268');

    let markers = [];

    const setCenter = (lat, lng) => {
        setLat(lat);
        setLng(lng);

        window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12);
    }

    const addMarker = (lat,lng ,title, subtitle) => {
       const marker = window.L.mapquest.textMarker(
           new window.L.LatLng(lat, lng),
           {
               text: title || '',
               subtext: subtitle || '',
               position: 'right',
               type: 'marker',
               icon: {
                   primaryColor:'#a8190f',
                   secondaryColor: '#db2c2c',
                   size: 'md'
               }
           }
       ).addTo(window.L.mapquest.Map.getMap('map'));

       markers.push(marker);
    }
    return (
        <>
        
        <div>
            <MapQuest 
            height="80vh"
            width="100%"
            center={[lat, lng]}
            tileLayer={'map'} //map, dark
            zoom={12}
            apiKey="GKKfhSGiuCci3f0vi6uvpxIrqAWMXyaR"
            />
        </div>

        <MyLocation setCenter={setCenter} setMarker={addMarker} />
        </>
    )
}


export default HomePage;