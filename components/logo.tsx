import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Logo = () => {
  return (
    <TouchableOpacity>
        <MaterialIcons name="shopping-cart" size={25} />
    </TouchableOpacity>
  )
}

export default Logo

const styles = StyleSheet.create({})