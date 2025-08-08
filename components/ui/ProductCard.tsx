import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
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
    <TouchableOpacity style={[styles.card, compact && styles.compactCard, customStyle]}>
      <Text>ProductCard</Text>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    compactCard:{},
    card:{},
})