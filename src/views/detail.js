import * as React from 'react'
import { StatusBar, ScrollView } from 'react-native'

import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import { FavoriteSolid, Sound, Hand } from '../components/icons'
import ActionButton, { ActionButtonTitle } from '../components/action-button'

import theme from '../utils/theme'
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary
} from '../components/detail-summary-item'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Detay
          </Text>
          <Text color="textLight" mt={6}>
            Arapça kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12}>
            <FavoriteSolid width={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk işaret dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
              aaawdawdawdawdawdawdawd
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>aawdawdawdawd</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              aaawdawdawdawdawdawdawd
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>aawdawdawdawd</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              aaawdawdawdawdawdawdawd
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>aawdawdawdawd</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
