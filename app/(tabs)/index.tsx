import HomeHeader from '@/components/HomeHeader';
import LoadingSpinner from '@/components/loadingSpinner';
import Wrapper from '@/components/ui/Wrapper';
import AppColors from '@/constants/Colors';
import { useProductStore } from '@/store/productStore';
import { Product } from '@/type';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <LoadingSpinner fullScreen/>
        </View>
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Error: {error}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.wrapper}>
      <HomeHeader />
      <View style={styles.contentContainer}>
        <ScrollView>
          <View>
            <View>
              <Text>Categories</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.background.primary,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  errorText: {
    fontFamily: 'Inter_Medium',
    fontSize: 16,
  },
  contentContainer: {},
});
