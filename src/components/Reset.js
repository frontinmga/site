import { createGlobalStyle } from 'styled-components'
import { prop } from 'styled-tools'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  label,
  p,
  a,
  span {
    font-family: ${prop('theme.font.family.oswald')};
  }
`
