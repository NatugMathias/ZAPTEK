import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const secondimage = require('../Components/picturetwo.jpg');
const thirdimage = require('../Components/picturethree.jpg');
const fourthimage = require('../Components/picturefour.jpg')

 
export default function Screentwo({navigation}) {
  return (
    
   <SafeAreaView className="flex-1 m-4 bg-white" onPress={() => navigation.navigate('Schedule')}>
    <View className="flex-row space-x-6">
        <View className="justify-center rounded-r-xl bg-gray-100 h-8 mt-4 w-12 -ml-4"><Text className="text-gray-400">dule</Text></View>
        <View className="justify-center items-center rounded-xl bg-blue-50 h-8 mt-4 w-40"><Text className="text-blue-400">Upcoming schedule</Text></View>
        <View className="justify-center items-end rounded-l-xl bg-gray-100 h-8 mt-4 w-16"><Text className="text-gray-400">Comp</Text></View>
    </View>
    <View className=" bg-white-400 rounded-xl mt-2 justify-center border border-gray-100">
        <View className="flex-row">
         <View className="justify-center"><Image source={secondimage} className="rounded-full w-10 h-10 bg-gray-600"/></View>
           <View className="pl-2">
            <Text className="text-black text-xl font-medium">Dr.Joseph Brostito </Text>
            <Text className="text-gray-400">Dental Specialist</Text>
           </View>
        </View>
        <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-4 border-gray-300"/>
        <View className="flex-row space-x-2 pt-4">
          <View><Ionicons name="calendar-outline" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">Sunday, 12 June</Text></View>
          <View className="pl-2"><MaterialIcons name="access-time" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">11:00-12:00 AM</Text></View>
        </View>
        <View className="justify-center items-center rounded-xl bg-blue-50 h-8 mt-4 mb-2"><Text className="text-blue-400">Details</Text></View>
    </View>
    <View className=" bg-white-400 rounded-xl mt-6 justify-center border border-gray-100">
        <View className="flex-row">
         <View className="justify-center"><Image source={fourthimage} className="rounded-full w-10 h-10 bg-gray-600"/></View>
           <View className="pl-2">
            <Text className="text-black text-xl font-medium">Dr.Bessie Coleman </Text>
            <Text className="text-gray-400">Dental Specialist</Text>
           </View>
        </View>
        <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-4 border-gray-300"/>
        <View className="flex-row space-x-2 pt-4">
          <View><Ionicons name="calendar-outline" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">Sunday, 12 June</Text></View>
          <View className="pl-2"><MaterialIcons name="access-time" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">11:00-12:00 AM</Text></View>
        </View>
        <View className="justify-center items-center rounded-xl bg-blue-50 h-8 mt-4"><Text className="text-blue-400">Details</Text></View>
    </View>
    <View className=" bg-white-400 rounded-xl mt-6 justify-center border border-gray-100">
        <View className="flex-row">
         <View className="justify-center"><Image source={thirdimage} className="rounded-full w-10 h-10 bg-gray-600"/></View>
           <View className="pl-2">
            <Text className="text-black text-xl font-medium">Dr.Babe Didrikson</Text>
            <Text className="text-gray-400">Dental Specialist</Text>
           </View>
        </View>
        <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-4 border-gray-300"/>
        <View className="flex-row space-x-2 pt-4">
          <View><Ionicons name="calendar-outline" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">Sunday, 12 June</Text></View>
          <View className="pl-2"><MaterialIcons name="access-time" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">11:00-12:00 AM</Text></View>
        </View>
        <View className="justify-center items-center rounded-xl bg-blue-50 h-8 mt-4"><Text className="text-blue-400">Details</Text></View>
    </View>
          
      <StatusBar style="auto" />
   </SafeAreaView>
      
  ); 
}


