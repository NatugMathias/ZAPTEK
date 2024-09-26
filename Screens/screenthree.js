//import * as React from 'react';
import { Text, View, } from 'react-native';


export default function Screenthree({navigation}){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'lightblue' }}><Text style={{alignitems:'center'}} onPress={() => navigation.navigate('Messages')}>
             This is the third screen</Text></View>
    );
} 