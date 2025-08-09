import { Platform, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./logo";
import AppColors from "@/constants/Colors";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/(tabs)/Search")}
          >
            <AntDesign
              name="search1"
              size={20}
              color={AppColors.primary[700]}
            />
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/(tabs)/Favorites")}>
        
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color={AppColors.primary[700]}
            />
            <View style={styles.itemsView}>
                <Text style={styles.itemsText}>
                    0
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/(tabs)/Cart")}>
        
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color={AppColors.primary[700]}
            />
            <View style={styles.itemsView}>
                <Text style={styles.itemsText}>
                    0
                </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
//styles for home header
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchButton: {
    backgroundColor: AppColors.primary[50],
    borderRadius: 5,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: AppColors.primary[500],
    position: "relative",
  },
  itemsView:{
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: AppColors.background.primary,
    borderRadius: 50,
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: AppColors.primary[500],
  },
  itemsText: {
    fontSize: 10,
    color: AppColors.accent[500],
    fontWeight: 800,
  },
});
