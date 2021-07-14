import {createGlobalStyle} from 'styled-components'
import NunitoRegular from 'fonts/Nunito-Regular.ttf'
import NunitoBlack from 'fonts/Nunito-Black.ttf'

export const colors = {
    white: "#ffffff",
    darkGray: "#1a1c20",
    deepDarkGray: "#404040",
    blueShade1: "#215973",
    blueShade2: "#6fadc6",
    blueShade3: "#d1e1e9"
}

export const darkTheme = {
    colors: {
        backgraound: colors.darkGray,
        menuBackground: colors.blueShade1,
        textDark: colors.blueShade3,
        testMain: colors.blueShade2,
        textSecondary: colors.blueShade3
    },
}

export const lightTheme = {
    colors: {
        backgraound: colors.white,
        menuBackground: colors.blueShade3,
        textDark: colors.blueShade1,
        testMain: colors.blueShade2,
        textSecondary: colors.deepDarkGray
    },
}