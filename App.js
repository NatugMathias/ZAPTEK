import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import Firstscreen from './Screens/firstscreen';
import Secondscreen from './Screens/secondscreen';
import Thirdscreen from './Screens/thirdscreen';
import Fourthscreen from './Screens/fourthscreen';
import Fifthscreen from './Screens/fifthscreen';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView className=" ">
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Firstscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen2" component={Secondscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen3" component={Thirdscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen4" component={Fourthscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen5" component={Fifthscreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

      
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}


