// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Liste from './components/Liste';
import Details from './components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>Bienvenue sur le pokedex de Quentin !</Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
    <NavigationContainer>
      {/* <Stack.Navigator> */}
          <QueryClientProvider client={queryClient}>
            <Details />
          </QueryClientProvider>
        {/* </Stack.Navigator> */}
    </NavigationContainer>
    </>

  );
}