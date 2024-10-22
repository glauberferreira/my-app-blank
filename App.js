import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function App() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);

  const handleCadastrar = () => {
    console.log(descricao);
    console.log(valor);

    fetch('https://668d6800099db4c579f2dcc2.mockapi.io/roupas', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: valor,
        descricao: descricao,
      }),
    });    
  }
  
  // const [senhaProtegida, setSenhaProtegida] = useState(true);

  // function inverter() {
  //   setSenhaProtegida(!senhaProtegida);
  // }
  
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/icon.png')} style={styles.logotipo}/>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <TextInput secureTextEntry={senhaProtegida} right={<TextInput.Icon icon="eye" onPress={() => inverter()} />}/>
      <TextInput keyboardType='email-address' style={styles.entradaTexto} activeUnderlineColor='red' label='Nome Completo'/> */}
      <TextInput label="Descrição" defaultValue={descricao} onChangeText={setDescricao}/>
      <TextInput label="Valor" defaultValue={valor} onChangeText={setValor}/>
      <Button mode='contained' onPress={handleCadastrar}>Cadastrar</Button>
      
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
