import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env'

/**
 * This FC return a search bar from Google places RN auto complete 
 * @returns search bar
 */
export const SearchBar = () => {

    return (
            <GooglePlacesAutocomplete
                placeholder='Escribe tu dirección'
                keepResultsAfterBlur={true}
                keyboardShouldPersistTaps='never'
                fetchDetails={true}
                styles={{
                    textInput: {
                        backgroundColor: "#fff",
                        borderRadius: 30,
                        marginTop: 7,
                        borderWidth: 2,
                        borderColor: '#F2F2F2',
                        height: 60,
                        zIndex: 999
                    },
                    textInputContainer: {
                        marginTop: -45,
                    },
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'es',
                }}
                onPress={(data, details) => {
                    console.warn(data, details);
                }}
            />
    );
};

