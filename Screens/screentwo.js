import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const secondimage = require('../Components/picturetwo.jpg');
const thirdimage = require('../Components/picturethree.jpg');
const fourthimage = require('../Components/picturefour.jpg')

 
 export default function Screentwo  ({navigation}) {
  return (
    
   <SafeAreaView className="flex-1 m-4 bg-white" >
    <View className="flex-row space-x-6 mt-4">
        <View className="justify-center rounded-r-xl bg-gray-100 h-8 mt-4 w-12 -ml-4"><Text className="text-gray-400">dule</Text></View>
        <View className="justify-center items-center rounded-xl bg-blue-50 h-8 mt-4 w-40"><Text className="text-blue-400">Upcoming schedule</Text></View>
        <View className="justify-center items-end rounded-l-xl bg-gray-100 h-8 mt-4 w-16"><Text className="text-gray-400">Comp</Text></View>
    </View>
    <View className=" bg-white-400 rounded-xl mt-10 justify-center border border-gray-100">
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
    <View className=" bg-white-400 rounded-xl mt-10 justify-center border border-gray-100">
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
    <View className=" bg-white-400 rounded-xl mt-9 justify-center border border-gray-100">
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
        <View className="flex-row space-x-2 pt-4 pb-2">
          <View><Ionicons name="calendar-outline" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">Sunday, 12 June</Text></View>
          <View className="pl-2"><MaterialIcons name="access-time" size={20} color="gray" /></View>
          <View><Text className="text-gray-400">11:00-12:00 AM</Text></View>
        </View>
        <View className="rounded-xl bg-blue-50"></View>
    </View>
    <View className="-ml-4 -mr-4 border border-gray-100 border-b-0"></View>
      <View className="flex-row space-x-8 justify-center items-center mt-4">
        <View onPress={() => navigation.navigate("Home")}><Ionicons name="home-outline" size={24} color="gray" /></View>
        <View className="flex-row justify-center items-center bg-blue-100 rounded-lg w-28 h-10">
        <View><Ionicons name="calendar" size={24} color="dodgerblue" /></View>
        <View className="ml-2"><Text className="text-blue-400">Schedule</Text></View>
        </View>
        <View><MaterialCommunityIcons name="message-processing-outline" size={24} color="gray" /></View>
        <View><Ionicons name="person-outline" size={24} color="gray" /></View>
      </View>
      <StatusBar style="auto" />
   </SafeAreaView>
      
  ); 
}


