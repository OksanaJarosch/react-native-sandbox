import { Image, StyleSheet, Text, View } from 'react-native';

export const Article = ({title, createdAt, imageUrl, text}) => {
    return (
        <View style={articleStyles.container}>
            <Image style={articleStyles.image}
                source={{uri: imageUrl}} />
            <View style={articleStyles.detailsContainer}>
                <Text style={articleStyles.postTitle}>{title}</Text>
                <Text>{text}</Text>
                <Text style={articleStyles.postDate}>{createdAt}</Text>
            </View>
        </View>
    )
}

const articleStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 14,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#b3b3b3",
        borderBottomStyle: "solid",
    },
    detailsContainer: {
        flexDirection: "column",
        maxWidth: "75%",
        gap: 12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "700",
    },
    postDate: {
        fontSize: 12,
        color: "grey",
    },
});