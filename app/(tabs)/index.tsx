import HomeHeader from '@/components/HomeHeader';
import LoadingSpinner from '@/components/loadingSpinner';
import Wrapper from '@/components/ui/Wrapper';
import { useProductStore } from '@/store/productStore';
import { Product } from '@/type';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const { products, categories, loading, error, fetchProducts, fetchCategories } = useProductStore();
useEffect(() => {
  fetchProducts();
  fetchCategories();
}, []);
useEffect(() => {
  if (products.length > 0) {
    const reverseProducts = [...products].reverse();
    setFeaturedProducts(reverseProducts as Product[]);
  }
}, [products]);
  if (loading ) {
    return (
      <Wrapper>
        <LoadingSpinner fullScreen />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <SafeAreaView>
        <View>
          <Text>
            Error: {error}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.wrapper}>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
});
