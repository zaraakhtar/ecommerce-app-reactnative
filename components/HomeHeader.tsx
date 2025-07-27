import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./logo";
import AppColors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <AntDesign
              name="search1"
              size={20}
              color={AppColors.primary[700]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBlockColor: AppColors.gray[300],
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
