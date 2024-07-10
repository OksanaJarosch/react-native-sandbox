import { View } from "react-native"
import { Article } from "../components/Article"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react";

export const FullArticle = ({ route, navigation }) => {
    const { item } = route.params;
    const { title, text, createdAt, imageUrl } = item;
    
    useEffect(() => {
        navigation.setOptions({title})
    })
    return (
        <View>
            <StatusBar style="auto" />
            <Article
                title={title}
                text={text}
                createdAt={createdAt}
                imageUrl={imageUrl}
                full
            />
        </View>
    )
} 