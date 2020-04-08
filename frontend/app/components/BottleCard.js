import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert
} from "react-native";

const BottleCard = props => (
  <View style={styles.bottleItem}>
    <View style={styles.itemTop}>
      <Text> {props.name} </Text>
      <Image
        source={
          __DEV__
            ? require("../assets/images/robot-dev.png")
            : require("../assets/images/robot-prod.png")
        }
        style={styles.welcomeImage}
      />
    </View>
    <View style={styles.itemBottom}>
      <Text>Bottle Info</Text>
      <View style={styles.moreInfo}>
          <Text numberOfLines={2} style={{ flex: 1 }}>
            {props.description} ...
          </Text>
      </View>
    </View>
    <TouchableOpacity onPress={props.onSelect} style={{ flex: 1 }}>
      <Text style={styles.moreButton}>more info</Text>
    </TouchableOpacity>
    <View style={styles.itemBottom}>
      <Text>Brand Info</Text>
      <View style={styles.moreInfo}>
        <Text>Actual brand stuff will go here...</Text>
        <TouchableOpacity onPress={props.onSelect}>
          <Text style={styles.moreButton}>more info</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bottleItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  itemTop: {
    alignItems: "center"
  },
  itemBottom: {
    // alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  moreInfo: {
    flexDirection: "row",
    alignContent: "space-between",
    flexWrap: 'wrap'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  description: {
    flex: 1,
    flexWrap: 'wrap'
  },
  moreButton: {
    color: 'blue'
  }
});

export default BottleCard;
