import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { Image, Text, View, StyleSheet } from 'react-native';
import StackNavigation from '../stackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const AppLayout = () => {
    const netInfo = useNetInfo();

    const isOnline = netInfo.isConnected ?? true;

    return isOnline ? (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    ) : (
        <View style={styles.offlineContainer}>
            <Image style={styles.offlineImage} source={require('../../assets/offline.png')} />
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    offlineContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    offlineImage: {
        height: '75%',
        width: '75%',
        resizeMode: 'contain',
    },
    offlineText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});

export default AppLayout;
