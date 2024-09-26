//import * as React from 'react';
import { Text, View, } from 'react-native';


export default function Screenfour({navigation}){
    return(
        <View style={{ flex: 1, justifyContent: 'center',
         alignItems: 'center' , backgroundColor:'dodgerblue'}}>
            <Text onPress={() => navigation.navigate('Person')}>
             This is the fourth screen</Text>
             </View>
            
    );
} 