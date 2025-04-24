import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowLeft01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react-native'
import { theme } from '../constants/theme'

const BackButton = ({router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <HugeiconsIcon
        icon={ArrowLeft01FreeIcons}
        size={26}
        color={theme.colors.text}
        strokeWidth={2.5}
      />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({})