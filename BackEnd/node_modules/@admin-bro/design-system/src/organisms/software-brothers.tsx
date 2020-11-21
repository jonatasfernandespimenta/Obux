import React from 'react'
import styled from 'styled-components'
import { Text, Icon } from '..'
import { cssClass, themeGet } from '../utils'

const StyledWrapper = styled(Text)`
  font-size: ${themeGet('fontSizes', 'sm')};
  & > a {
    color: ${themeGet('colors', 'grey60')};
    font-size: ${themeGet('fontSizes', 'sm')};
    text-decoration: none;
    margin-left: ${themeGet('space', 'xs')};
    &:hover {
      color: ${themeGet('colors', 'love')};
    }
  }

  & > .${cssClass('Icon')} {
    padding: 0 ${themeGet('space', 'xs')};
  }
`

StyledWrapper.defaultProps = {
  color: 'grey60',
  textAlign: 'center',
}

const SoftwareBrothers: React.FC = () => (
  <StyledWrapper>
    With
    <Icon icon="FavoriteFilled" color="love" />
    by
    <a
      href="http://softwarebrothers.co"
      target="_blank"
      rel="noopener noreferrer"
    >
      SoftwareBrothers
    </a>
  </StyledWrapper>
)

export {
  SoftwareBrothers as default,
  SoftwareBrothers,
}
