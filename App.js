import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Article } from './components/Article';


export default function App() {

  const [items, setItems] = useState([]);
  
  const fethPosts = () => {
    axios.get("https://656fb2c96529ec1c62382546.mockapi.io/contacts/articles")
    .then((resp) => {
      setItems(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    fethPosts()
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        refreshControl={<RefreshControl refreshing={""} onRefresh={fethPosts} />}
        data={items}
        renderItem={({ item }) =>
          <Article
            title={item.title}
            text={item.text}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
          />
        }
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    gap: 16,
    alignItems: 'flex-start',
    marginTop: 48,
    padding: 16,
  },
});
