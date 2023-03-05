import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Layout } from './Layout';

/**
 * This FC create a reusable loader
 * @returns Loader component
 */
export const Loader = () => {
    return (
        <Layout>
            <ActivityIndicator color={'green'}/>
        </Layout>
    );
};

