import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Firstscreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 items-center bg-gray-200">
      <View className="pt-60"></View>
      <View className="bg-black bg-gradient-to-b from-black-100 to-black-500 h-80 w-80 mt-40 pt-8 items-center">
        <Text className=" text-white text-4xl font-mid">Coffee so good,</Text>
        <Text className=" text-white text-4xl font-mid">your taste buds</Text>
        <Text className=" text-white text-4xl font-mid">will love it.</Text>
        <Text className=" text-gray-400 font-light pt-2">The best grain, the finest roast, the</Text>
        <Text className=" text-gray-400 font-light">powerful flavor.</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>

         <View className="mt-5 bg-orange-400 w-64 h-14 items-center justify-center rounded-xl">
           <Text className="text-orange-100 font-medium">Get Started</Text>
         </View>
         </TouchableOpacity>
     
      </View>
      
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}


