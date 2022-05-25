import css from 'styled-jsx/css'

import {breakpoints, colors, fonts} from '../../styles/theme'
import {addOpacityToColor} from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${backgroundColor} 1px, #000000 1px),
      radial-gradient(${backgroundColor} 1px, #ffffff 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base}
  }
  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
    height: 100%;
    width: 100%;
    overflow: scroll;
    scrollbar-width: none;
  }

main::-webkit-scrollbar{
    display: block;
    width: 5px;
}
main::-webkit-scrollbar-track{
    background: transparent;
}

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 80vh;
      width: ${breakpoints.mobile};
    }
  }
  @media (min-width: ${breakpoints.tabletLarge}) {
    main {
      height: 80vh;
      width: ${breakpoints.tabletLarge};
    }
  }

  @media (min-width: ${breakpoints.tabletLandscape}) {
    main {
      height: 80vh;
      width: ${breakpoints.tabletLandscape};
    }
  }
  
  
  `