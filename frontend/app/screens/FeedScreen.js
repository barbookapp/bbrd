import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import BottleCard from '../components/BottleCard';


export default class FeedScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: "Source Listing",
  //     headerStyle: { backgroundColor: "#fff" },
  //     headerTitleStyle: { textAlign: "center", flex: 1 }
  //   };
  // };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("http://192.168.0.6:8000/bottles/api/bottle/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
    );
  };
  // renderItem = data => (
  //   <TouchableOpacity style={styles.list}>
  //     <Text style={styles.lightText}>{data.item.name}</Text>
  //     <Text style={styles.lightText}>{data.item.category}</Text>
  //   </TouchableOpacity>
  // );
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={data => (
            <BottleCard
              name={data.item.name}
              keyExtractor={item => item.id}
              description={data.item.description}
              onSelect={() => {
                this.props.navigation.navigate('Info', {
                  bottleName: data.item.name,
                  bottleId: data.item.id,
                  bottleDescription: data.item.description,
                  bottleSubcat: data.item.subcat
                }
                );
              }}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  }
});