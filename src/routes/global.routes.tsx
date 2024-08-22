import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../features';
import HomeScreen from '../features/dashboard/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definindo os tipos das rotas
type RootStackParamList = {
  Inicio: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function GlobalRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" >
        <Stack.Screen name="Inicio" component={IndexScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GlobalRoutes;
