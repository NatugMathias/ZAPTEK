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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Firstscreen} />
        <Stack.Screen name="Screen1" component={Secondscreen} />
        <Stack.Screen name="Screen2" component={Thirdscreen} />
        <Stack.Screen name="Screen3" component={Fourthscreen} />
        <Stack.Screen name="Screen4" component={Fifthscreen} />
      </Stack.Navigator>
    </NavigationContainer>

      
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}


