import {
  StyleProp,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { StyleProps } from "react-native-reanimated";
import { Product } from "@/type";
import AppColors from "@/constants/Colors";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
  customStyle?: StyleProp<ViewStyle>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  compact = false,
  customStyle,
}) => {
  const { id, title, price, image, category } = product;
  return (
    <TouchableOpacity
      style={[styles.card, compact && styles.compactCard, customStyle]}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image
         source={{ uri: image }}
         style={styles.image}
         resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title} numberOfLines={compact?1 : 2}
        ellipsizeMode="tail"
        >{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  compactCard: {
    marginRight: 12,
    width: 150,
  },
  card: {
    backgroundColor: AppColors.background.primary,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
    width: "48%",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: AppColors.gray[200],
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    position: "relative",
    height: 150,
    backgroundColor: AppColors.background.primary,
    padding: 5,
  },
  content: {
    padding: 12,
    backgroundColor: AppColors.background.secondary,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: AppColors.text.primary,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: AppColors.text.tertiary,
    textTransform: "capitalize",
    marginBottom: 4,
  },
  footer: {
    justifyContent: "space-between"
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: AppColors.primary[600],
  },
});
