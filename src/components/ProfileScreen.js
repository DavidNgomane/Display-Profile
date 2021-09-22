import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme, View, Button, TextInput, Image} from 'react-native';
import globalModel from './UserModel'

export default function Profile({route, navigation}) {
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{uri:route.params.image}} />
                <Text>Name: {route.params.name}</Text>
                <Text>Surname: {route.params.surname}</Text>
                <Text>Email: {route.params.email}</Text>
                <Text>Home Address: {route.params.address}</Text>
                <Text>Cellphone: {route.params.phone}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#008b8b',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#2f4f4f'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200,
        borderWidth: 2,
        
    },
    text:{
        padding:24,
        flex: 1,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 80,
    }
})