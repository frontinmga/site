import styled, { css } from 'styled-components'
import { switchProp, theme } from 'styled-tools'

const Button = styled.a`
  cursor: pointer;
  font-family: ${theme('typographies.muli')};
  border-radius: 25px;
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  letter-spacing: 2px;
  display: block;
  text-decoration: none;

  ${switchProp('size', {
    default: css`
      width: 100%;
      max-width: 250px;
      margin: 0 auto;
    `,
    large: css`
      width: 100%;
    `
  })}

  ${switchProp('variant', {
    primary: css`
      background-color: ${theme('colors.black')};
      color: ${theme('colors.white')};
    `,
    secondary: css`
      background-color: ${theme('colors.white')};
      color: ${theme('colors.black')};
    `
  })}

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

Button.defaultProps = {
  variant: 'primary',
  size: 'default'
}

export default Button
