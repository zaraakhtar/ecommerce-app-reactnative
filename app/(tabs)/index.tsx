import HomeHeader from '@/components/HomeHeader';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
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
