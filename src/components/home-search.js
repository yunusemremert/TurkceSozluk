import * as React from 'react'
import { Animated } from 'react-native'

import Box from './box'
import Bg from './bg'
import Search from './search'
import { Logo } from './icons'

const heroHeight = 230

function HomeSearch({ isSearchFocus, onSearchFocus }) {
  const bgOpacity = React.useRef(new Animated.Value(1)).current
  const fadeAnim = React.useRef(new Animated.Value(heroHeight)).current

  React.useEffect(() => {
    if (isSearchFocus) {
      // BG Opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start()
      //
      Animated.timing(fadeAnim, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      // BG Opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
        useNativeDriver: false
      }).start()

      //
      Animated.timing(fadeAnim, {
        toValue: heroHeight,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [bgOpacity, fadeAnim, isSearchFocus])

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={fadeAnim}>
      <Box mt={-60} as={Animated.View} style={{ opacity: bgOpacity }}>
        <Bg pt={60} pb={26}>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} color="white" />
          </Box>
        </Bg>
      </Box>

      {/* Search Input */}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width="100%"
      >
        <Search onChangeFocus={status => onSearchFocus(status)} />
      </Box>
    </Box>
  )
}

export default HomeSearch
