import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Eventos({ partido }) {
    const navigation = useNavigation(); 

    const goToPage = () => {
        navigation.navigate('DetallePartido', { partido });
    };

    return (
        <TouchableOpacity onPress={goToPage}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.teamContainer}>
                        <Image source={{ uri: partido.teams.home.logo }} style={styles.teamLogo} />
                        <Text style={styles.teamName}>{partido.teams.home.name}</Text>
                    </View>
                    <Text style={styles.vs}>VS</Text>
                    <View style={styles.teamContainer}>
                        <Image source={{ uri: partido.teams.away.logo }} style={styles.teamLogo} />
                        <Text style={styles.teamName}>{partido.teams.away.name}</Text>
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        borderRadius: 5,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    teamContainer: {
        alignItems: 'center',
    },
    teamLogo: {
        width: 50,
        height: 50,
    },
    teamName: {
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
    },
    vs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    matchDate: {
        textAlign: 'right',
        color: 'white',
    },
});
