import React from 'react'
import { laryfy } from '@_ricecooker/lary'
import { Text } from 'react-native'

export default laryfy<React.ComponentProps<typeof Text>>(Text as React.ComponentType<unknown>)