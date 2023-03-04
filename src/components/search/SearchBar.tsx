import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export const SearchBar = () => {
    return (
        <>
            <GooglePlacesAutocomplete placeholder='Escribe tu dirección' styles={{
                textInput:{
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    marginTop: 7,
                    borderWidth: 2,
                    borderColor: '#F2F2F2',
                    height: 60,
                },
                textInputContainer: {
                    marginTop: -55
                },
                query: {
                    key: 'AIzaSyBFQEpJUaEOAG1cLgjg9QuNHnDv5satspQ',
                }
            }}/>
        </>
    );
};