import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.Container}>{children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
