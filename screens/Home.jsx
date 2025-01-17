import { StyleSheet, View, FlatList, RefreshControl, ActivityIndicator, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Article } from '../components/Article';
import { useEffect, useState } from 'react';
import axios from "axios";
import { StatusBar } from 'expo-status-bar';


export const Home = ({navigation}) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = () => {
        setIsLoading(true);

        axios.get("https://656fb2c96529ec1c62382546.mockapi.io/contacts/articles")
            .then((resp) => {
            setItems(resp.data);
            })
            .catch(err => {
            console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchPosts()
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            {isLoading ? (
            <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
            </View>

        ) : (
            <FlatList 
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
            data={items}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate("Article", {item: item})}>
                <Article
                title={item.title}
                text={item.text}
                createdAt={item.createdAt}
                imageUrl={item.imageUrl}
                />    
                </TouchableOpacity>

            }
            keyExtractor={(item) => item.id.toString()}
            />
        )}
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    loadingContainer: {
        gap: 10,
    },
});