import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';


export const Map = () => {

    const [location, setLocation] = useState()

    useEffect(() => {
        getPermissions();
    }, [])

    const getPermissions = async () => {
        
            let { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted') {
                console.log('Please grant Location permissions')
                return;
            }
    
            const currentLocation = await Location.getCurrentPositionAsync({})
    
            console.log('location', currentLocation.coords.latitude, currentLocation.coords.longitude)
      
        };


    return (
        <MapView
            style={{ width: '100%', height: '100%', }} //provisorio
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >

            {/* <Marker
                //key={index} para array con map
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
                title='titulo'
                description='Descripcion del marcador'
            /> */}
        </MapView>
    );
};

