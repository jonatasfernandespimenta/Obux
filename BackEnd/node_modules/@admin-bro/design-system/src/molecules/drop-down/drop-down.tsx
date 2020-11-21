/* eslint-disable default-case */
import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxProps } from '../..'

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`

export const DEFAULT_STICK = 'left'

/**
 * Available values for {@link DropDown}.stick prop
 * @memberof DropDown
 */
export type DropDownStickProp = 'left' | 'right'

/**
 * Props passed to DropDown element.
 * @property {string} [...] Other props from {@link BoxProps}
 * @memberof DropDown
 * @extends BoxProps
 */
export type DropDownProps = {
  /** Indicates if menu should stick to left or right */
  stick?: DropDownStickProp;
} & BoxProps

type PositionProps = {
  left?: number,
  right?: number,
  top: number,
}

/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropDown: React.FC<DropDownProps> = (props) => {
  const { children, stick = DEFAULT_STICK, ...boxProps } = props
  const [isVisible, setIsVisible] = useState(false)
  const [initialHeight, setInitialHeight] = useState<number | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const [menuPosition, setMenuPosition] = useState<PositionProps | null>()

  useLayoutEffect(() => {
    if (ref.current && !initialHeight) {
      const { offsetHeight } = ref.current
      setInitialHeight(offsetHeight)

      switch (stick) {
      case 'left':
        setMenuPosition({ left: 0, top: offsetHeight })
        break
      case 'right':
        setMenuPosition({ right: 0, top: offsetHeight })
      }
    }
  }, [ref.current])

  const elements = React.Children.map(children, (child: any) => {
    const type = child && child.type && child.type.displayName
    if (type === 'DropDownTrigger') {
      // getting rid of DropDownTrigger and render just what was inside
      return React.cloneElement(child.props.children)
    }
    if (type === 'DropDownMenu') {
      return React.cloneElement(child, {
        isVisible,
        stick,
        ...menuPosition,
      })
    }
    return child
  })
  return (
    <StyledDropDown
      {...boxProps as any}
      onMouseEnter={(): void => setIsVisible(true)}
      onMouseLeave={(): void => setIsVisible(false)}
      ref={ref}
    >
      {elements}
    </StyledDropDown>
  )
}

export { DropDown }
export default DropDown
