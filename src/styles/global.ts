import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('@/public/fonts/poppins-v20-latin-300.eot');
        src: url('@/public/fonts/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'),
            url('@/public/fonts/poppins-v20-latin-300.woff2') format('woff2'),
            url('@/public/fonts/poppins-v20-latin-300.woff') format('woff'),
            url('@/public/fonts/poppins-v20-latin-300.ttf') format('truetype'),
            url('@/public/fonts/poppins-v20-latin-300.svg#Poppins') format('svg');
    }
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('@/public/fonts/poppins-v20-latin-regular.eot');
        src: url('@/public/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'),
            url('@/public/fonts/poppins-v20-latin-regular.woff2') format('woff2'),
            url('@/public/fonts/poppins-v20-latin-regular.woff') format('woff'),
            url('@/public/fonts/poppins-v20-latin-regular.ttf') format('truetype'),
            url('@/public/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg');
    }
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('@/public/fonts/poppins-v20-latin-600.eot');
        src: url('@/public/fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'),
            url('@/public/fonts/poppins-v20-latin-600.woff2') format('woff2'),
            url('@/public/fonts/poppins-v20-latin-600.woff') format('woff'),
            url('@/public/fonts/poppins-v20-latin-600.ttf') format('truetype'),
            url('@/public/fonts/poppins-v20-latin-600.svg#Poppins') format('svg');
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }
        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
        }
    `}
`