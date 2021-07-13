import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.body},
      font-family: ${theme.font.family},
    }

    h1 {
      font-size: ${theme.font.sizes.h1},
      line-height: '3.2rem',
      font-weight: ${theme.font.normal},
      padding-bottom: ${theme.spacings.medium},
    }

    h2 {
      font-size: ${theme.font.sizes.h2},
      line-height: '2.4rem',
      font-weight: ${theme.font.normal},
      padding-bottom: ${theme.spacings.xsmall},
    }

    h3 {
      font-size: ${theme.font.sizes.h3},
      line-height: '2.4rem',
      font-weight: ${theme.font.semiBold},
    }

    p {
      font-size: ${theme.font.sizes.body},
      line-height: '2.4rem',
      font-weight: ${theme.font.normal},
      padding-bottom: ${theme.spacings.xxsmall},
    }

    .bodyBold {
      font-size: ${theme.font.sizes.body},
      line-height: '2.4rem',
      font-weight: ${theme.font.semiBold},
      padding-bottom: ${theme.spacings.xxsmall},
    }

    .button {
      font-size: ${theme.font.sizes.button},
      line-height: '2.0rem',
      font-weight: ${theme.font.semiBold},
    }

    .buttonBold {
      font-size: ${theme.font.sizes.button},
      line-height: '2.0rem',
      font-weight: ${theme.font.bold},
    }

    .caption {
      font-size: ${theme.font.sizes.caption},
      line-height: '1.6rem',
      font-weight: ${theme.font.normal},
    }

    .captionBold {
      font-size: ${theme.font.sizes.caption},
      line-height: '1.6rem',
      font-weight: ${theme.font.semiBold},
    }
  `}
`

export default GlobalStyles
