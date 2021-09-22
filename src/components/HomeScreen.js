import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView,StatusBar,StyleSheet,Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import globalModel from './UserModel'

const Stack = createNativeStackNavigator();

export default function Home({navigation}){

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      globalModel.setImage(result.uri);
    }
  };

return (
  <View style={styles.container}>
    <ScrollView>
      <Text>Name:</Text>
      <TextInput style={styles.input} 
      placeholder= 'name'
      onChangeText={(name) => globalModel.setName(name)}/>

      <Text>Surname:</Text>
      <TextInput style={styles.input} 
      placeholder= 'surname'
      onChangeText={(surname) => globalModel.setSurname(surname)}/>

      <Text>Email:</Text>
      <TextInput style={styles.input} 
      placeholder= 'example@gmail.com'
      onChangeText={(email) => globalModel.setEmail(email)}/>

      <Text>Home Address:</Text>
      <TextInput style={styles.input} 
      placeholder= ''
      onChangeText={(address) => globalModel.setAddress(address)}/>

      <Text>Cellphone Number:</Text>
      <TextInput keyboardType='numeric'
      style={styles.input} 
      placeholder= ''
      onChangeText={(phone) => globalModel.setPhone(phone)}/>

      <View style={styles.button}>
          <Button  title='Choose File' onPress={pickImage} />
      </View>

      <View style={styles.button}>
      <Button title='Submit' onPress={ async () => {navigation.navigate('Profile',{
        name: globalModel.name,
        surname: globalModel.surname,
        email:globalModel.email,
        address:globalModel.address,
        phone:globalModel.phone,
        image:globalModel.image,
        }
        )}} />
      </View>

    </ScrollView>
    </View>
)

}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#008b8b',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '#00bfff'
},
button:{
  marginTop: 20,
  width: 200,
  borderWidth: 5,
  color: '#808080',
  borderRadius: 15,
  marginLeft: 60
},
input: {
  borderWidth: 3,
  borderColor: '#00bfff',
  padding: 8,
  margin: 10,
  width: 300,
  backgroundColor: '#ffffff'
}
})