import * as React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import Text from './text'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'

function SearchHistoryList({ data }) {
  return (
    <FlatList
      style={{ padding: 16 }}
      data={data}
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
  )
}

export default SearchHistoryList
