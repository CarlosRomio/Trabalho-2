import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function StarshipsScreen({ route }) {
    const { character } = route.params;
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchStarships = async () => {
            const starshipsData = await Promise.all(character.starships.map(url => axios.get(url)));
            setStarships(starshipsData.map(res => res.data));
        };

        if (character.starships.length > 0) {
            fetchStarships();
        }
    }, [character]);

    return (
        <View style={styles.container}>
            {starships.length > 0 ? (
                <FlatList
                    data={starships}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>Nome: {item.name}, Modelo: {item.model}, Passageiros: {item.passengers}</Text>
                    )}
                />
            ) : (
                <Text>Este personagem não tem naves associadas.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        fontSize: 16,
        marginBottom: 10,
    },
});
