import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import UserDashboard from "../components/UserDashboard";

const Home = () => {
  return (
    <ScrollView>
      <UserDashboard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Home;
