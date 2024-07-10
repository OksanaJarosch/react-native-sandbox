import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { FullArticle } from './FullArticle';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "News" }} />
                <Stack.Screen name="Article" component={FullArticle} options={{title: "Article"}} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}