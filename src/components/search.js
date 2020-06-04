import React from 'react'
import { Keyboard } from 'react-native'

import Box from './box'
import Input from './input'
import { Search, Close } from './icons'
import theme from '../utils/theme'
import Text from './text'
import Button from './button'

function SearchBox({ onChangeFocus }) {
  const [isFocus, setOnFocus] = React.useState(false)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus])

  const onCancel = () => {
    setOnFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alingnItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}
          bg="white"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="TextMedium"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setOnFocus(true)}
          onChangeText={text => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textMedium} />
          </Button>
        )}
      </Box>
      <Button position="absolute" left={16} top={14}>
        <Search color={theme.colors.textMedium} />
      </Button>
      {isFocus && (
        <Button px={15} height={52} onPress={onCancel}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
