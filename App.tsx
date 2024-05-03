import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Sign In to your account</Text>
      <TextInput placeholder="example@gmail.com" style={styles.textInput} />
      <TextInput placeholder="password" style={styles.textInput} secureTextEntry={true}/>
      <TouchableOpacity style={styles.touchableOpacityButtom}>
        <Text style={styles.textButtom}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    borderRadius: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    backgroundColor: 'white',
    paddingStart: 30,
  },
  touchableOpacityButtom: {
    backgroundColor: 'dodgerblue',
    marginTop: 40,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  textButtom: {
    color: 'white',
    fontSize: 15
  }
})