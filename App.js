import { Navigation } from './screens/Navigation';


export default function App() {

  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  // const fetchPosts = () => {
  //   setIsLoading(true);

  //   axios.get("https://656fb2c96529ec1c62382546.mockapi.io/contacts/articles")
  //     .then((resp) => {
  //       setItems(resp.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  // useEffect(() => {
  //   fetchPosts()
  // }, []);

  return (
    <Navigation />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   }
// });