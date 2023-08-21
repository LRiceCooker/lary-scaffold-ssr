import React from "react"
import Touchable from "./base/Touchable"

const ButtonOutline = ({children}: {children: string}): JSX.Element => {
    return (
        <Touchable p5 r4 b1 bdPrimary alignCenter inPrimary bgWhite bold>
            {children}
        </Touchable>
    )
}

export default ButtonOutline;