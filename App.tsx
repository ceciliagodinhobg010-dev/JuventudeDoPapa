
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';

import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function TelaSimples({ route }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{route.name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#17613B',
          tabBarInactiveTintColor: '#888888',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 65,
            paddingBottom: 8,
            paddingTop: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let icon: any = 'home-outline';

            if (route.name === 'Músicas') icon = 'musical-notes-outline';
            if (route.name === 'Santos') icon = 'book-outline';
            if (route.name === 'Desafios') icon = 'heart-outline';
            if (route.name === 'Perfil') icon = 'person-outline';

            return <Ionicons name={icon} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Músicas" component={TelaSimples} />
        <Tab.Screen name="Santos" component={TelaSimples} />
        <Tab.Screen name="Desafios" component={TelaSimples} />
        <Tab.Screen name="Perfil" component={TelaSimples} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#17613B',
    fontWeight: 'bold',
  },
});
