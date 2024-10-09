import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing icons
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Secondscreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="bg-black h-56 mt-6 pt-6 pl-8">
        <View><Text className="text-gray-400 text-xs">Location</Text></View>
        <View className="flex-row items-center">
         <View><Text className="text-gray-300">Bilzen, Tanjungbalai</Text></View>
         <View><Entypo name="chevron-small-down" size={24} color="lightgray" /></View>
        </View>
        <View className="flex-row items-center bg-gray-800 mt-4 w-64 h-12 rounded-xl">
          <View className="ml-3"><EvilIcons name="search" size={24} color="white" /></View>
          <View className="ml-1"><Text className="text-gray-400">Search coffee </Text></View>
          <View className="bg-orange-400 ml-20 h-10 w-10 items-center justify-center rounded-xl"><AntDesign name="swap" size={24} color="white" /></View>
        </View>
      </View>
      <View>
        <View className="flex-row items-center mt-16 space-x-1">
        <TouchableOpacity onPress={() => navigation.navigate('Thirdscreen')}>
          <View className="bg-orange-500 rounded-lg w-28 h-7 items-center justify-center ml-7"><Text className="text-orange-100">Cappuccino</Text></View>
        </TouchableOpacity>
          <View className="bg-white rounded-lg w-20 h-7 items-center justify-center"><Text>Machiato</Text></View>
          <View className="bg-white rounded-lg w-16 h-7 items-center justify-center"><Text>Latte</Text></View>
          <View className="bg-white rounded-l-lg w-6 h-7 items-center justify-center"><Text className="pl-2">Ar</Text></View>
        </View>
      </View>

      <View className="flex-row mt-7 justify-center space-x-2">

        <View className="bg-white rounded-xl w-32 h-48 ">
          <View className="bg-gray-300 flex-row w-12 h-6 m-1 justify-center items-center rounded-tl-xl rounded-br-xl">
            <View><AntDesign name="star" size={12} color="orange" /></View>
            <View><Text className="text-xs text-white">4.8</Text></View>
          </View>
          <View className="ml-3 mt-20">
            <Text className="font-bold">Cappuccino</Text>
            <Text className="text-xs text-gray-400">with Chocolate</Text>
          </View>
          <View className="flex-row items-center mt-1 ml-3">
            <View><Text className="font-bold text-lg">$ 4.53</Text></View>
            <View className="bg-orange-400 rounded-lg w-8 h-8 justify-center items-center ml-6"><Ionicons name="add-outline" size={16} color="white" /></View>
          </View>
        </View>

        <View className="bg-white rounded-xl w-32 h-48">
          <View className="bg-gray-300 flex-row w-12 h-6 m-1 justify-center items-center rounded-tl-xl rounded-br-xl">
            <View><AntDesign name="star" size={12} color="orange" /></View>
            <View><Text className="text-xs text-white">4.9</Text></View>
          </View>
          <View className="ml-3 mt-20">
            <Text className="font-bold">Cappuccino</Text>
            <Text className="text-xs text-gray-400">with Oat Milk</Text>
          </View>
          <View className="flex-row items-center mt-1 ml-3">
            <View><Text className="font-bold text-lg">$ 3.90</Text></View>
            <View className="bg-orange-400 rounded-lg w-8 h-8 justify-center items-center ml-6"><Ionicons name="add-outline" size={16} color="white" /></View>
          </View>
        </View>

      </View>
      <View className="flex-row mt-6 justify-center space-x-2">
      <View className="bg-white rounded-tl-xl rounded-tr-xl w-32 h-7">
          <View className="bg-gray-300 flex-row w-12 h-6 m-1 justify-center items-center rounded-tl-xl rounded-br-xl">
            <View><AntDesign name="star" size={12} color="orange" /></View>
            <View><Text className="text-xs text-white">4.9</Text></View>
          </View>
      </View>
      <View className="bg-white rounded-tl-xl rounded-tr-xl w-32 h-7">
          <View className="bg-gray-300 flex-row w-12 h-6 m-1 justify-center items-center rounded-tl-xl rounded-br-xl">
            <View><AntDesign name="star" size={12} color="orange" /></View>
            <View><Text className="text-xs text-white">4.9</Text></View>
          </View>
      </View>
      </View>
      <View className="flex-row bg-white rounded-tl-3xl rounded-tr-3xl h-20 justify-center items-center space-x-10">
        <View className="items-center">
          <View><Foundation name="home" size={24} color="orange" /></View>
          <View className="bg-orange-400 w-2 h-1 rounded"></View>
        </View>
        <View><MaterialCommunityIcons name="cards-heart" size={24} color="gray" /></View>
        <View><Ionicons name="bag" size={24} color="gray" /></View>
        <View><Octicons name="bell-fill" size={22} color="gray" /></View>
      </View>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}


