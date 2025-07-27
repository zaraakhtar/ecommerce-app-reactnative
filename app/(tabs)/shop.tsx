import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@/components/HomeHeader";

const shopScreen = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <View>
        <Text>Shop Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default shopScreen;

const styles = StyleSheet.create({
});
