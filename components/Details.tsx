import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {useQuery} from 'react-query';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useState} from 'react';

export default function Details({route}: {route: any}) {
  //json recovery
  const fetcher = () =>
    fetch(route.params.names).then(response => response.json());

  const {data, isLoading} = useQuery('infoPokemon', fetcher);

  //Create a useState for result boolean
  const [goodImage, setGoodImage] = useState(true);

  if (isLoading) return null;

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.texte}>{data.name}</Text>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: goodImage
                ? data.sprites.front_default
                : data.sprites.back_default,
            }}
          />
        </View>
        <View style={styles.box}>
          <Pressable
            onPress={() =>
              goodImage === true ? setGoodImage(false) : setGoodImage(true)
            }>
            <Ionicons name="reload-circle" size={60} color="red" />
          </Pressable>
        </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texte: {
    color: '#000',
    padding: 30,
    fontFamily: 'Pixeled',
  },
  image: {
    width: 300,
    height: 300,
  },
});
