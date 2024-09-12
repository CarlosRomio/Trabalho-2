import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CharacterDetailsScreen({ route, navigation }) {
    const { character } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.detail}>Nome: {character.name}</Text>
            <Text style={styles.detail}>Altura: {character.height}</Text>
            <Text style={styles.detail}>Peso: {character.mass}</Text>
            <Text style={styles.detail}>Cor do cabelo: {character.hair_color}</Text>
            <Text style={styles.detail}>Cor da pele: {character.skin_color}</Text>
            <Text style={styles.detail}>Cor dos olhos: {character.eye_color}</Text>
            <Text style={styles.detail}>Gênero: {character.gender}</Text>

            <Button title="Ver Naves" onPress={() => navigation.navigate('Starships', { character })} />
            <Button title="Ver Filmes" onPress={() => navigation.navigate('Movies', { character })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    detail: {
        fontSize: 18,
        marginBottom: 10,
    },
});
