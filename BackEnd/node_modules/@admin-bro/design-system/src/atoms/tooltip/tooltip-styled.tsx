import styled, { css } from 'styled-components'
import themeGet from '../../utils/theme-get'
import Box from '../box/box'
import { StyledTooltipProps } from './tooltip-props'

const ARROW_WIDTH = 7

const topCSS = css<StyledTooltipProps>`
  margin-top: -${(props) => (props.isVisible ? themeGet('space', 'lg')(props) : '0px')};

  &::after, &::before {
    top: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    border-color: ${themeGet('colors', 'primary100')} transparent transparent transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    border-color: ${themeGet('colors', 'highlight')} transparent transparent transparent;
  }
`

const bottomCSS = css<StyledTooltipProps>`
  margin-top: ${(props) => (props.isVisible ? themeGet('space', 'lg')(props) : '0px')};

  &::after, &::before {
    bottom: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    border-color: transparent transparent ${themeGet('colors', 'primary100')} transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    border-color: transparent transparent ${themeGet('colors', 'highlight')} transparent;
  }
`

const leftCSS = css<StyledTooltipProps>`
  margin-left: -${(props) => (props.isVisible ? themeGet('space', 'lg')(props) : '0px')};

  &::after, &::before {
    left: 100%;
    top: 50%;
  }

  &::after {
    margin-right: -${ARROW_WIDTH}px;
    margin-top: -${ARROW_WIDTH}px;
    border-color: transparent transparent transparent ${themeGet('colors', 'primary100')};
  }

  &::before {
    margin-right: -${ARROW_WIDTH - 1}px;
    margin-top: -${ARROW_WIDTH - 1}px;
    border-color: transparent transparent transparent ${themeGet('colors', 'highlight')};
  }
`

const rightCSS = css<StyledTooltipProps>`
  margin-left: ${(props) => (props.isVisible ? themeGet('space', 'lg')(props) : '0px')};

  &::after, &::before {
    right: 100%;
    top: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    margin-top: -${ARROW_WIDTH}px;
    border-color: transparent ${themeGet('colors', 'primary100')} transparent transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    margin-top: -${ARROW_WIDTH - 1}px;
    border-color: transparent ${themeGet('colors', 'highlight')} transparent transparent;
  }
`

const getPadding = (props: StyledTooltipProps): string => {
  const px = (props.size === 'lg' ? 'xl' : 'md')
  const py = (props.size === 'lg' ? 'lg' : 'sm')
  return `${themeGet('space', py)(props)} ${themeGet('space', px)(props)}`
}

const StyledTooltip = styled(Box)<StyledTooltipProps>`
  transition: opacity 0.2s, margin 0.2s;

  position: absolute;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  
  padding: ${(props) => getPadding(props)};

  pointer-events: none;
  
  &::after {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 7px;
    z-index: 1;
  }
  &::before {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 6px;
    z-index: 2;
  }

  ${(props) => ({
    top: topCSS,
    bottom: bottomCSS,
    left: leftCSS,
    right: rightCSS,
  }[props.direction])}
`

StyledTooltip.defaultProps = {
  borderColor: 'primary100',
  borderStyle: 'solid',
  borderWidth: '1px',
  bg: 'highlight',
  borderRadius: '3px',
}

export default StyledTooltip
export { StyledTooltip }
