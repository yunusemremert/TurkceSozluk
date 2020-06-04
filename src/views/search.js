import { Text, ImageBackground, StatusBar, Animated } from 'react-native'
import * as React from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'

import bg from '../assets/bg.jpg'

import SafeAreaView from 'react-native-safe-area-view'

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  const fadeAnim = React.useRef(new Animated.Value(285)).current

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(fadeAnim, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 285,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [fadeAnim, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Box as={Animated.View} position="relative" zIndex={1} height={fadeAnim}>
        {!isSearchFocus && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Box>
        )}

        {/* Search Input */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <Search onChangeFocus={status => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>Geçmiş</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
