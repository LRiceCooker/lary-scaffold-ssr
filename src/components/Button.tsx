import React from "react"
import Touchable from "./base/Touchable"

const Button = ({children}: {children: string}): JSX.Element => {
    return (
        <Touchable p5 r4 bgPrimary alignCenter inWhite bold>
            {children}
        </Touchable>
    )
}

export default Button;