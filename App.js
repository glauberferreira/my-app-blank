import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [senhaProtegida, setSenhaProtegida] = useState(true);

  function inverter() {
    setSenhaProtegida(!senhaProtegida);
  }
  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.logotipo}/>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <TextInput secureTextEntry={senhaProtegida} right={<TextInput.Icon icon="eye" onPress={() => inverter()} />}/>
      <TextInput keyboardType='email-address' style={styles.entradaTexto} activeUnderlineColor='red' label='Nome Completo'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20
  },
  texto: {
    color: '#12ab32'
  },
  logotipo: {
    width: 256,
    height: 256,
    alignSelf: 'center'
  },
  entradaTexto: {
    backgroundColor: 'pink',
  }
});
