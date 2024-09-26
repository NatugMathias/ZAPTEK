import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

const firstimage = require('../Components/pictureone.jpg');
const secondimage = require('../Components/picturetwo.jpg');

 
export default function Screenone({navigation}) {
  return (
   <SafeAreaView className="flex-1 m-4 mt-10 bg-black" onPress={() => navigation.navigate('Home')} >
      <View className="flex-row space-x-36 " >
        <View>
          <Text className="text-gray-400" >Hello,</Text>
          <Text className="text-xl font-bold">Hi James</Text>
        </View>
        <View className="bg-or rounded-full justify-center"><AntDesign name="smile-circle" size={44} color="dodgerblue" /></View>
      </View>
      <View className=" p-4 bg-blue-400 rounded-xl mt-7"> 
        <View className="flex-row justify-center">
         <View className="justify-center"><Image source={firstimage} className="rounded-full w-10 h-10"/></View>
           <View className="pl-2">
             <Text className="text-white text-xl font-medium">Dr.Imran Syahir</Text>
            <Text className="text-gray-300 ">General Doctor</Text>
          </View>
          <View className="pl-12 justify-center"><Entypo name="chevron-thin-right" size={20} color="white" /></View>
        </View>
        <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-4 border-blue-100"/>
        <View className="flex-row space-x-2 pt-4">
          <View><Ionicons name="calendar-outline" size={20} color="white" /></View>
          <View><Text className="text-white">Sunday, 12 June</Text></View>
          <View><MaterialIcons name="access-time" size={20} color="white" /></View>
          <View><Text className="text-white">11:00-12:00</Text></View>
        </View>
      </View>
      <View className="flex-row mt-4 bg-gray-100 rounded-xl p-4">
          <View><Feather name="search" size={24} color="gray"/></View>
          <View className="pl-4"><Text className="text-gray-500">Search doctor or health issues</Text></View>
       </View>

       <View className="flex-row mt-4 justify-center space-x-6 ">
        <View className="">
          <View className="bg-gray-100  rounded-full w-14 h-14 items-center justify-center"><FontAwesome6 name="virus-covid" size={18} color="dodgerblue" /></View>
          <View><Text className="text-gray-500">Disease</Text></View>
        </View>
        <View className="">
          <View className="bg-gray-100  rounded-full w-14 h-14 items-center justify-center"><FontAwesome6 name="user-doctor" size={18} color="dodgerblue" /></View>
          <View><Text className="text-gray-500">Doctor</Text></View>
        </View>
        <View className="">
          <View className="bg-gray-100  rounded-full w-14 h-14 items-center justify-center"><Fontisto name="link2" size={18} color="dodgerblue" /></View>
          <View><Text className="text-gray-500">Medicine</Text></View>
        </View>
        <View className="">
          <View className="bg-gray-100  rounded-full w-14 h-14 items-center justify-center"><FontAwesome5 name="clinic-medical" size={18} color="dodgerblue" /></View>
          <View><Text className="text-gray-500">Hospital</Text></View>
        </View>
       </View>

       <View><Text className="text-xl font-bold mt-3">Near Doctor</Text></View>
       <View className=" bg-white-400 rounded-xl mt-6 justify-center">
        <View className="flex-row">
         <View className="justify-center"><Image source={secondimage} className="rounded-full w-10 h-10 bg-gray-600"/></View>
           <View className="pl-2">
             <Text className="text-black text-xl font-medium">Dr.Joseph Brostito </Text>
            <Text className="text-gray-300">Dental Specialist</Text>
          </View>
          <View className="justify-center"><EvilIcons name="location" size={24} color="gray" /></View>
          <View className="justify-center"><Text className="text-gray-400">1.2KM</Text></View>
        </View>
        <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-4 border-gray-300"/>
        <View className="flex-row space-x-2 pt-4">
          <View><MaterialIcons name="access-time" size={20} color="orange" /></View>
          <View><Text className="text-orange-300">4,8 (120 Reviews)</Text></View>
          <View><MaterialIcons name="access-time" size={20} color="dodgerblue" /></View>
          <View><Text className="text-blue-400">Open at 17.00</Text></View>
        </View>
      </View>
      <StatusBar style="auto" />
   </SafeAreaView>
      
  ); 
}



