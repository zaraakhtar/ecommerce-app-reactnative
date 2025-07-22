import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const shopScreen = () => {
  return (
    <SafeAreaView>
        <View>
      <Text style={styles.Heading}>Shop Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default shopScreen;

const styles = StyleSheet.create({
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    }
})