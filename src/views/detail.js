import * as React from 'react'
import { StatusBar, ScrollView } from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import { Favorite, Sound, Hand } from '../components/icons'
import ActionButton, { ActionButtonTitle } from '../components/action-button'

import theme from '../utils/theme'
import DetailSummaryItem from '../components/detail-summary-item'
import LoaderText from '../components/loader-text'

function DetailView({ route }) {
  const keyword = route.params?.keyword
  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async keyword => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()

    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData(keyword)
  }, [keyword])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk işaret dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItem
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
