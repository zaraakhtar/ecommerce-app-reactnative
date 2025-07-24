import { Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from './logo'

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
      </View>
    </SafeAreaView>
  )
}

export default HomeHeader
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: Platform.OS === 'android' ? 20 : 0,
    },
})