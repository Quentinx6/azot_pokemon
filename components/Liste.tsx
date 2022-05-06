import * as React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useFonts} from 'expo-font';
import {useQuery} from 'react-query';

const fetcher = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response =>
    response.json(),
  );

export default function Liste({navigation}: {navigation: any}) {
  const [loaded] = useFonts({
    Pixeled: require('../assets/fonts/Pixeled.ttf'),
  });

  const {data, isLoading} = useQuery('GetAllPokemon', fetcher);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.container}>
        {data?.results.map((item: {url: string; name: string}) => (
          <View style={styles.box}>
            <Pressable
              onPress={() => navigation.navigate('Pokemon', {names: item.url})}>
              <Text style={styles.texte} key={item.name}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  box: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  texte: {
    color: '#fff',
    padding: 30,
    fontFamily: 'Pixeled',
  },
});
