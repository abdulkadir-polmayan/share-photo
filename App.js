import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text,TouchableOpacity, View, Platform } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'

export default function App() {

  const [selectedImage,setSelectedImage]=React.useState(null)

  let imagePickerAsync = async()=>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(permissionResult===false){
      alert("permission to roll out camera");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    
    if(pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri})
  }

  let shareDialogAsync = async()=>{
    if(Platform.OS=="web"){
      alert("we cant sahre here");
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri)


  }

  if(selectedImage!==null){
    return(
      <View style={styles.container}>
        <Image source={{uri:selectedImage.localUri}} style={styles.thumbnail} />
        <TouchableOpacity onPress={shareDialogAsync}>
          <Text>press to share</Text>
        </TouchableOpacity>
      </View>
    )
  }




  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />
      
      <Text style={styles.instruction} >
        click the button to share
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={imagePickerAsync}
        >
        <Text style={styles.btnText}>click for share photo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:305 ,
    height:159,
    marginBottom:50
  },
  instruction:{
    color:"#888", 
    fontSize:18,
    marginHorizontal:50
  },
  button:{
    backgroundColor:"blue",
    padding:20,
    borderRadius:5,
  },
  btnText:{
    fontSize:20,
    color:'#fff'
  },
  thumbnail:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
  
});
