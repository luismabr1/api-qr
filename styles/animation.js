import {keyframes, css} from 'styled-components'

export const fadeIn = ({time = '1s', type = 'ease'} = {}) => css`    animation: ${time} ${fadeInKeyFrames} ${type};`

export const fadeInKeyFrames = keyframes`
    from{
        filter: blur(5px);
        opacity: 0;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`


export const rotateFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const rotate = () => css`
  animation
  `