import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UserDashboard = () => {
  const data = [
    {
      title: "Characters",
      id: "1",
      icon: <Entypo name="man" style={styles.icon} />,
    },
    {
      title: "Comics",
      id: "2",
      icon: <Entypo name="open-book" style={styles.icon} />,
    },
    {
      title: "Creators",
      id: "3",
      icon: <FontAwesome name="paint-brush" style={styles.icon} />,
    },
    {
      title: "Events",
      id: "4",
      icon: <MaterialIcons name="event" style={styles.icon} />,
    },
  ];
  return (
    <View>
      <View style={styles.box}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tile}>
              {item.icon}
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    marginBottom: 5,
  },

  tile: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 80,
    margin: 15,
    borderRadius: 15,
  },
});

export default UserDashboard;
