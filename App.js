
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  const pizza = useSelector
  return (
    <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
    </NavigationContainer>
  );
}


