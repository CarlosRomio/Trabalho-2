import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import StarshipsScreen from './screens/StarshipsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Characters">
                <Stack.Screen name="Characters" component={CharactersScreen} />
                <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
                <Stack.Screen name="Starships" component={StarshipsScreen} />
                {/* Adicionar mais telas quando criadas */}
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
