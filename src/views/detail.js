import * as React from 'react'
import { StatusBar, Text } from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Detay sayfası!</Text>
    </Box>
  )
}

export default DetailView
