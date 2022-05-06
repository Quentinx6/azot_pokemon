import * as React from 'react';
import { StyleSheet, Text, ScrollView, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { useQuery } from "react-query";

const fetcher = () =>
fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) =>
  response.json()
);

export default function Details() {
    return (
      <View>
        <Text>Bienvenue sur le pokedex de Quentin !</Text>
      </View>  
    );
  }