import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';
import React from 'react';
import { Theme } from './src/theme/theme';

const App = () => {
    return (
        <NavigationContainer>
            <Theme>
                <Navigator />
            </Theme>
        </NavigationContainer>
    );
}

export default App;