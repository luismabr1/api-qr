import css from 'styled-jsx/css'

import {breakpoints, colors, fonts} from '../../styles/theme'
import {addOpacityToColor} from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
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
  .formularios {
    margin: 30px
  }

  .mini-list{
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
    height: 40vh;
    width: 100%;
    overflow: scroll;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }`