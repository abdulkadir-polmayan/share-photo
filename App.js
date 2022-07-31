import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text,TouchableOpacity, View,  } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instruction} >
        click the button to share
      </Text>
      <TouchableOpacity
        onPress={()=> alert("hello world")}
        >
        <Text>frf</Text>
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
  }
  
});
