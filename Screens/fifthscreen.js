import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import Entypo from '@expo/vector-icons/Entypo';
//import Ionicons from '@expo/vector-icons/Ionicons';
//import AntDesign from '@expo/vector-icons/AntDesign';
//import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import localImage from '../Image/map.jpeg'

export default function Fifthscreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1  bg-gray-50">
      <View className="flex-row mt-8 ml-6 items-center space-x-52 ">
      <TouchableOpacity onPress={() => navigation.navigate('Screen4')}>
        <View className="w-8 h-8 bg-white justify-center items-center rounded-lg"><Entypo name="chevron-thin-left" size={14} color="black" /></View>
      </TouchableOpacity>
        <View className="w-8 h-8 bg-white justify-center items-center rounded-lg "><MaterialCommunityIcons name="crosshairs-gps" size={18} color="black" /></View>
      </View>

      <View className="ml-6 mt-4">
      <Image className="rounded-xl" source={localImage} style={{ width: 270, height: 300 }} />
    </View>


      <View className="bg-white rounded-tl-2xl rounded-tr-2xl h-60 mt-16">
        <View className="items-center">
          <View className="h-1 w-10 bg-gray-300 rounded mt-1"/>
      
          <View><Text className="font-medium mt-2">10 minutes left</Text></View>
          <View className="flex-row space-x-1">
            <View><Text className="text-xs text-gray-400">Delivery to</Text></View>
            <View><Text className="text-xs font-medium">JI. Kpg Sutoyo</Text></View>
          </View>

          <View className="flex-row space-x-1 mt-2">
            <View className="h-1 w-16 bg-green-500 rounded mt-1"/>
            <View className="h-1 w-16 bg-green-500 rounded mt-1"/>
            <View className="h-1 w-16 bg-green-500 rounded mt-1"/>
            <View className="h-1 w-16 bg-gray-300 rounded mt-1"/>
          </View>

           <View className="flex-row border border-gray-300 rounded-xl h-20 items-center mt-2">
              <View className="border border-gray-300 rounded-xl w-16 h-16 ml-2 mr-2"/>
              <View className='mr-4'>
                <View><Text className="font-medium">Delivered your order</Text></View>
                <View>
                  <Text className="text-xs text-gray-400"> We deliver your goods to you in</Text>
                  <Text className="text-xs text-gray-400"> the shortest possible time.</Text>
                </View>
              </View>
           </View>
        </View>
        <View className="flex-row items-center ml-16 mt-4">
          <View className="mr-20 pl-3">
            <Text className="font-medium">Johan Hawn</Text>
            <Text  className="text-xs text-gray-400 mt-1">Personal Courier</Text>
          </View>
          <View className="border border-gray-300 rounded-xl w-12 h-12 justify-center items-center"><MaterialCommunityIcons name="phone-in-talk" size={24} color="gray" /></View>
        </View>
      </View>

      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


