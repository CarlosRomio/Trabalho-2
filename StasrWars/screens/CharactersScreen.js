import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CharactersScreen() {
    const [characters, setCharacters] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => setCharacters(response.data.results.slice(0, 5)))  // Pegamos os 5 primeiros personagens
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personagens de Star Wars</Text>
            <FlatList
                data={characters}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CharacterDetails', { character: item })}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        padding: 10,
        backgroundColor: '#ddd',
        marginVertical: 8,
        borderRadius: 5,
    },
});
