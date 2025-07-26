import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import AppColors from '@/constants/Colors'

const Logo = () => {
  return (
    <TouchableOpacity>
        <MaterialIcons name="shopping-cart" size={25} color={AppColors.primary[700]} />
    </TouchableOpacity>
  )
}

export default Logo
// This component can be used in the HomeHeader or any other place where a logo is needed.

const styles = StyleSheet.create({
    logoView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        fontFamily: "Inter-Bold",
        color: AppColors.primary[700],
        fontSize: 20,
        marginLeft: 2,
    },
})