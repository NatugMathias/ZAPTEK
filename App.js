//import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Screenone from './Screens/screenone';
import Screentwo from './Screens/screentwo';
import Screenthree from './Screens/screenthree';
import Screenfour from './Screens/screenfour';



const homesection = 'Home';
const schedulesection = 'Schedule';
const messagesection = 'Messages';
const peoplesection = 'People';

const Tab = createBottomTabNavigator();


export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator
               initialRouteName={homesection}
               screenOptions={({route}) =>({
                   tabBarIcon:({focused, color, size}) =>{
                       let iconName;
                       let iconType;

                       let rn = route.name;

                       if (rn === homesection) {
                        iconName = focused ? 'home' : 'home-outline';
                        iconType = 'Ionicons';
                      } else if (rn === schedulesection) {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        iconType = 'Ionicons';
                      } else if (rn === messagesection) {
                        iconName = focused ? 'message-processing' : 'message-processing-outline';
                        iconType = 'MaterialCommunityIcons';
                      } else if (rn === peoplesection) {
                        iconName = focused ? 'person' : 'person-outline';
                        iconType = 'Ionicons';
                      }
                

                       return (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <>{iconType === 'Ionicons' && <Ionicons name={iconName} size={size} color={color} />}
                          {iconType === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={iconName} size={size} color={color} />}
                        </>
                        {focused && <Text style={{ fontSize: 14, marginLeft: 10 }}>{route.name}</Text>}
              </View>

                      );
                

                   },
                   
               })}
      >
                  <Tab.Screen name={homesection} component={Screenone} options={{ headerShown: false }}
                  />
                  <Tab.Screen name={schedulesection} component={Screentwo} options={{ headerShown: false }}
                  />
                  <Tab.Screen name={messagesection} component={Screenthree} options={{ headerShown: false }}
                  />
                  <Tab.Screen name={peoplesection} component={Screenfour} options={{ headerShown: false }}
                  />
                  


            </Tab.Navigator>
        </NavigationContainer>
    
    );
}