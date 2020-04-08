import 'react-native-gesture-handler';
import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from './app/screens/FeedScreen';
import SearchScreen from './app/screens/SearchScreen';
import BottleInfoScreen from './app/screens/BottleInfoScreen';



const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen name="Info" component={BottleInfoScreen} options={({ route }) => ({ title: route.params.bottleName })} />
    </FeedStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={FeedStackScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// export default class App extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: "Source Listing",
//       headerStyle: { backgroundColor: "#fff" },
//       headerTitleStyle: { textAlign: "center", flex: 1 }
//     };
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       dataSource: []
//     };
//   }
//   componentDidMount() {
//     fetch("http://192.168.0.6:8000/bottles/api/bottle/")
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState({
//           loading: false,
//           dataSource: responseJson
//         });
//       })
//       .catch(error => console.log(error)); //to catch the errors if any
//   }
//   FlatListItemSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 0.5,
//           width: "100%",
//           backgroundColor: "rgba(0,0,0,0.5)"
//         }}
//       />
//     );
//   };
//   renderItem = data => (
//     <TouchableOpacity style={styles.list}>
//       <Text style={styles.lightText}>{data.item.name}</Text>
//       <Text style={styles.lightText}>{data.item.category}</Text>
//     </TouchableOpacity>
//   );
//   render() {
//     if (this.state.loading) {
//       return (
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#0c9" />
//         </View>
//       );
//     }
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.FlatListItemSeparator}
//           renderItem={item => this.renderItem(item)}
//           keyExtractor={item => item.id.toString()}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff"
//   },
//   list: {
//     paddingVertical: 4,
//     margin: 5,
//     backgroundColor: "#fff"
//   }
// });
