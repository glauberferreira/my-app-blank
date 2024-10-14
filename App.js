import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <TextInput/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#12ab32'
  }
});
