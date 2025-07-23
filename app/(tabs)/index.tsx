import Wrapper from '@/components/ui/Wrapper';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <Wrapper>
      <Text style={styles.text}>
        Our home Screen
      </Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  text: {
     fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
  },
});
