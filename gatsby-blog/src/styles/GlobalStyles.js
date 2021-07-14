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
        textMain: colors.blueShade2,
        textSecondary: colors.blueShade3
    },
}

export const lightTheme = {
    colors: {
        backgraound: colors.white,
        menuBackground: colors.blueShade3,
        textDark: colors.blueShade1,
        textMain: colors.blueShade2,
        textSecondary: colors.deepDarkGray
    },
}

export const GlobalStyles = createGlobalStyle`
    :root{
        --site-max-width: 1200px;
    }
    @font-face {
        font-family: "Nunito Regular";
        src: 
        local("Nunito Regular"), local("NunitoRegular"),
        url(${NunitoRegular}) format('ttf');
        font-weigt: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Nunito Blacl";
        src: 
        local("Nunito Black"), local("NunitoBlack"),
        url(${NunitoBlack}) format('ttf');
        font-weigt: 300;
        font-style: normal;
    }
    body {
        background: ${props => props.theme.colors.backgraound};
        color: ${props => props.theme.colors.textSecondary};
        font-family: "Nunito Regular", Arial;
        margin: 0px;
        padding: 0 20px 80px 20px;
        transition: all 0.5s ease;
    }
    main {
        max-width: 960px;
        margin: 40px auto;
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.textMain};
        font-family: "Nunito Black", Arial;
        transition: all 0.5s ease;
        letter-spacing: 1px;
    }
    p {
        font-size: 0.9rem;
        line-height: 1.2;

        @media screen and (min-width: 768px) {
            font-size: 1.1rem;
            line-height: 1.5;
        }
    }
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1.8px;

        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
    h3 {
        font-size: 0.8rem;
        letter-spacing: 1.5px;
        margin: 30px 0 -15px 0;

        @media screen and (min-width: 768px) {
            font-size: 1.2rem;
        }
    }
    a {
        text-decoration: none;
    }
`