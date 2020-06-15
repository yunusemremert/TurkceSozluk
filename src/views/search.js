import { StatusBar, Animated, FlatList } from 'react-native'
import * as React from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Logo } from '../components/icons'
import Search from '../components/search'
import Box from '../components/box'
import Bg from '../components/bg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'

import SafeAreaView from 'react-native-safe-area-view'
import Text from '../components/text'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'açıklama 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'açıklama 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 3'
  }
]

const heroHeight = 230

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

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

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Box as={Animated.View} position="relative" zIndex={1} height={fadeAnim}>
        <Box mt={-60} as={Animated.View} opacity={bgOpacity}>
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
          <Search onChangeFocus={status => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              keyExtractor={item => item.id}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  Son Aramalar
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir deyim</Text>

              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('Details', {
                    title: 'aa'
                  })
                }
              >
                <CardTitle>aa</CardTitle>
                <CardSummary>bbb</CardSummary>
              </CardContainer>
            </Box>
            <Box mt={30}>
              <Text color="textLight">Bir deyim, bir atasözü</Text>

              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('Details', {
                    title: 'bb'
                  })
                }
              >
                <CardTitle>bb</CardTitle>
                <CardSummary>bbbcc</CardSummary>
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
