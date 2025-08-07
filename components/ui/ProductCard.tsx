import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { StyleProps } from 'react-native-reanimated';
import { Product } from '@/type';

interface ProductCardProps {
    product: Product;
    compact?: boolean;
    customStyle?: StyleProp<ViewStyle>;
    }

const ProductCard:React.FC<ProductCardProps> = ({ product, compact=false, customStyle }) => {
  return (
    <View>
      <Text>ProductCard</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})