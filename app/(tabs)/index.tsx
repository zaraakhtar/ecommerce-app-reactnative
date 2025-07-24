import HomeHeader from '@/components/HomeHeader';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
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
