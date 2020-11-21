import styled from 'styled-components'
import { NavigationElementProps } from './navigation-element-props'

import { Title, Box } from '../..'
import { themeGet } from '../../utils'

export type StyledNavigationElementProps = Pick<NavigationElementProps, 'isSelected' | 'isOpen'>

export const getBg = (props: StyledNavigationElementProps): string => (
  props.isOpen
    ? themeGet('colors', 'grey20')(props)
    : 'transparent'
)

export const getSelectedColor = (props: StyledNavigationElementProps): string => themeGet('colors',
  props.isSelected ? 'primary100' : 'grey80')(props)

export const getHoverColor = (props: StyledNavigationElementProps): string => themeGet('colors',
  props.isOpen ? 'grey80' : 'primary100')(props)

export const StyledNavigationElement = styled(Box)<StyledNavigationElementProps>`
  background-color: ${getBg};
  padding: ${themeGet('space', 'md', '-1px')} ${themeGet('space', 'lg')};
  text-decoration: none;
  color: ${getSelectedColor};
  cursor: pointer;
  &:hover {
    color: ${getHoverColor};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${themeGet('space', 'lg')};
    & svg {
      fill: ${getSelectedColor};
    }
  }
  & > ${Title} {
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      fill: ${themeGet('colors', 'grey40')};
    }
  }
`
