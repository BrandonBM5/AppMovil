import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RootStack from './navigators/RootStack';

import Login from './Views/Login'
export default function App() {
    return (
        <SafeAreaView style={styles.container}>            
        <RootStack/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
