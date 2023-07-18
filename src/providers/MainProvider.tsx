import React from 'react'
import { LaryProvider } from '@_ricecooker/lary'

const MainProvider = ({children}: {children: JSX.Element}) => {
    return (
        <LaryProvider>
            {children}
        </LaryProvider>
    )
}

export default MainProvider