import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Layout } from './Layout';

export const Loader = () => {
    return (
        <Layout>
            <ActivityIndicator color={'green'}/>
        </Layout>
    );
};

