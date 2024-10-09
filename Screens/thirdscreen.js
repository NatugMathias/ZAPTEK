import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Thirdscreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="flex-row mt-8 items-center space-x-24">
      <TouchableOpacity onPress={() => navigation.navigate('Secondcreen')}>
        <View className="p-4"><Entypo name="chevron-thin-left" size={14} color="black" /></View>
      </TouchableOpacity>  
        <View><Text className="font-bold">Details</Text></View>
        <View><Ionicons name="heart-outline" size={20} color="black" /></View>
      </View>

      <View className="mt-56 ml-5">
       <View>
         <Text className="font-bold text-lg">Cappuccino</Text>
         <Text className="text-xs text-gray-400">with Chocolate</Text>
       </View>
       <View className="flex-row h-8 items-baseline">
        <View><AntDesign name="star" size={12} color="orange" /></View>
        <View><Text className="font-bold">4.8</Text></View>
        <View><Text className="text-xs font-small text-gray-400">(230)</Text></View>
        <View className="bg-gray-100 w-8 h-8 rounded-lg mr-2 ml-36"></View>
        <View className="bg-gray-100 w-8 h-8 rounded-lg"></View>
       </View>
      </View>

      <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-1 border-gray-300 m-5"/>
  
      <View className="ml-5"><Text className="font-bold">Description</Text></View>
      <View className="mt-3 ml-5"><Text className="text-xs text-gray-400 ">A cappuccino is an approximately 150ml (5</Text></View>
      <View className="ml-5"><Text className="text-xs text-gray-400 ">oz) beverage, with 25 ml of espresso coffee </Text></View>
        <View className="flex-row">
          <View className="ml-5"><Text className="text-xs text-gray-400 ">and 85ml of fresh milk the fo..</Text></View>
          <View><Text className="font-bold text-orange-400 text-xs">Read More</Text></View>
        </View>
        <View className="mt-3 ml-5"><Text className="font-bold">Size</Text></View>
        <View className="flex-row ml-6 space-x-4 mt-2">
          <View className="w-20 h-8 border border-gray-400 rounded-lg justify-center items-center border-gray-300"><Text className="text-xs">S</Text></View>
          <View className="w-20 h-8 border border-gray-400 rounded-lg justify-center items-center border-orange-400 bg-red-100"><Text className="text-xs">M</Text></View>
          <View className="w-20 h-8 border border-gray-400 rounded-lg justify-center items-center border-gray-300"><Text className="text-xs">L</Text></View>
        </View>
        <View className="flex-row space-x-14 mt-4 border  border-b-0 border-gray-100 rounded-tl-2xl rounded-tr-2xl">
          <View className="flex-row space-x-14 ml-2 h-20">
          <View className="justify-center items-center">
           <View><Text className="text-gray-400 text-xs">Price</Text></View>
           <View><Text className="text-orange-500 font-bold pl-3">$ 4.53</Text></View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Fourthscreen')}>
          <View className="justify-center items-center w-44 h-14 bg-orange-400 rounded-xl mt-4"><Text className="text-white font-medium">Buy Now</Text></View>
          </TouchableOpacity>
          </View>
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


