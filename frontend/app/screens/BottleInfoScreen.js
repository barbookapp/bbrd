import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default function BottleInfoScreen({ route, navigation }) {
//   const { bottleId } = route.params;
//   const { bottleName } = route.params;
//   const { bottleAbv } = route.params;
  return (
    <View style={styles.screen}>
      <View style={styles.info}>
        <View>
          <View style={styles.bottleImage}>
            {/* <Text>{JSON.stringify(bottleName)}</Text> */}
            <Image
              source={
                __DEV__
                  ? require("../assets/images/robot-dev.png")
                  : require("../assets/images/robot-prod.png")
              }
              style={styles.welcomeImage}
            />
          </View>
          <Text>{route.params.bottleSubcat}</Text>
          <Text>{route.params.bottleDescription}</Text>
          {/* <Image
                style={styles.bottleImage}
                source={{ uri: selectedBottle.imageUri }}
              ></Image> */}
        </View>
        {/* <Text>{selectedBottle.Description}</Text> */}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.addButton}>
          <Text>Add To Barbook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    },
    itemBottom: {
      alignItems: "flex-start"
    },
    reviewtabs: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    bottleImage: {
      alignItems: "center"
    },
    welcomeImage: {
      width: 300,
      height: 240,
      resizeMode: "contain",
      marginTop: 3,
      marginLeft: -10
    },
    addButton: {
      height: 20,
      // width: "50%",
      backgroundColor: "#ccc",
      borderRadius: 10,
      overflow: "hidden",
      marginVertical: 10,
    },
  });