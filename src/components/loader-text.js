import React from 'react'

import Box from './box'

export default function LoaderText({ children, border, ...props }) {
  return <Box bg="light" width={120} height={16} {...props} />
}
