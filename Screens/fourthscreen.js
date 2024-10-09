import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Fourthscreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="flex-row mt-8 items-center space-x-24">
      <TouchableOpacity onPress={() => navigation.navigate('Thirdscreen')}>
        <View className="p-4"><Entypo name="chevron-thin-left" size={14} color="black" /></View>
      </TouchableOpacity>
        <View><Text className="font-bold">Order</Text></View>
      </View>

      <View className="flex-row bg-gray-200 h-10 items-center rounded-xl mr-5 ml-5 mt-1 space-x-10 ">
        <View className="bg-orange-400 h-8 w-36 justify-center items-center rounded-lg ml-1"><Text className="text-white">Deliver</Text></View>
        <View><Text className="text-gray-600">Pick Up</Text></View>
      </View>

      <View className="mt-4 ml-5"><Text className="font-medium">Delivery Address</Text></View>
      <View><Text className="font-medium mt-3 ml-5">JI. Kpg Sutoyo</Text></View>
      <View><Text className="text-xs text-gray-400 mt-1 ml-5">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text></View>

      <View className="flex-row mt-3 ml-5 space-x-2">
        <View className="flex-row h-6 w-28 border rounded-3xl border-gray-300 justify-center items-center">
          <View className="pr-1"><FontAwesome6 name="edit" size={14} color="black" /></View>
          <View><Text className="text-xs">Edit Address</Text></View>
        </View>

        <View className="flex-row h-6 w-28 border rounded-3xl border-gray-300 justify-center items-center">
         <View className="pr-1"><MaterialCommunityIcons name="note-text-outline" size={14} color="black" /></View>
         <View><Text className="text-xs">Add Note</Text></View>
        </View>
      </View>

      <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-1 border-gray-300 m-5"/>
  
  <View className="flex-row items-center space-x-12 ml-24">
    <View>
      <Text className="font-medium">Cappuccino</Text>
      <Text className="text-xs text-gray-400">with Chocolate</Text>
    </View>
    <View className="flex-row items-center justify-center space-x-2">
      <View className="border rounded-full border-gray-300 w-6 h-6 items-center justify-center"><AntDesign name="minus" size={12} color="black" /></View>
      <View><Text className="font-medium">1</Text></View>
      <View className="border rounded-full border-gray-300 w-6 h-6 items-center justify-center"><FontAwesome6 name="plus" size={10} color="black" /></View>
    </View>
  </View>

  <View className="bg-gray-200 h-1 mt-4"/>

  <View className="flex-row items-center border border-gray-200 rounded-lg h-12 mt-4 ml-5 mr-5">
    <View className="ml-4"><MaterialCommunityIcons name="hexagon-slice-6" size={24} color="orange" /></View>
    <View className="ml-2"><Text className="font-medium">1 Discount is applied</Text></View>
    <View className="ml-16"><Entypo name="chevron-thin-right" size={14} color="black" /></View>
  </View>

  <View className="ml-5 mt-4"><Text className="font-medium">Payment Summary</Text></View>

  <View className="flex-row ml-5 mt-3 space-x-52">
    <View><Text className="text-gray-800">Price</Text></View>
    <View><Text className='font-medium'>$4.53</Text></View>
  </View>

  <View className="flex-row ml-5 mt-3 space-x-32">
    <View><Text className="text-gray-800">Delivery Fee</Text></View>
    <View className="flex-row space-x-2">
    <View><Text className='text-gray-600 pl-2' style={{ textDecorationLine: 'line-through' }}>$2.0</Text></View>
    <View className=""><Text className='font-medium' >$1.0</Text></View>
    </View>
  </View>

  <View
  style={{
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
className="pt-1 border-gray-300 m-5"/>

<View className="flex-row ml-5 space-x-36">
  <View><Text className="text-gray-700">Total Payment</Text></View>
  <View><Text className="font-bold pl-1">$5.53</Text></View>
</View>

<View className="flex-row ml-5 mt-2 items-center ">
  <View className="mr-3"><MaterialCommunityIcons name="cash-multiple" size={24} color="orange" /></View>
  <View className="flex-row bg-gray-200 h-5 items-center rounded-xl mr-32 space-x-2 ">
        <View className="bg-orange-400 h-5 w-12 justify-center items-center rounded-xl"><Text className="text-white text-xs">Cash</Text></View>
        <View><Text className="text-gray-600 text-xs mr-2" >$5.53</Text></View>
      </View>
  <View className="w-4 h-4 bg-gray-500 rounded-full justify-center items-center"><MaterialCommunityIcons name="dots-horizontal" size={14} color="white" /></View>
</View>

<TouchableOpacity onPress={() => navigation.navigate('Fifthscreen')}>
<View className="bg-orange-400 rounded-xl ml-5 mr-5 h-14 justify-center items-center mt-3"><Text className="text-white font-medium ">Order</Text></View>
</TouchableOpacity> 

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


