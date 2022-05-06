// import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Liste from './components/Liste';
import Details from './components/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>Bienvenue sur le pokedex de Quentin !</Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Pokemons" component={Liste} />
            <Stack.Screen name="Pokemon" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
