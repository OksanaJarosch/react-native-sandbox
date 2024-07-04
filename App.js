import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function App() {

  const [items, setItems] = useState();
  
  useEffect(() => {
    axios.get("https://656fb2c96529ec1c62382546.mockapi.io/contacts/articles")
    .then((resp) => {
      setItems(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
