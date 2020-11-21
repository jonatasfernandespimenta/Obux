import React, { useEffect, useRef, useState } from 'react'
import useWindowSize from '../../hooks/use-window-size'

import { PortalProps } from './tooltip-props'
import { StyledTooltip } from './tooltip-styled'

type PositionProps = {
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * @component
 * @private
 * @memberof Tooltip
 */
const TooltipControl: React.FC<PortalProps> = (props) => {
  const { title, childRef, direction = 'bottom', ContentElement, size } = props
  const tooltipRef = useRef<HTMLElement>(null)
  const [dimension, setDimension] = useState<Pick<PositionProps, 'width' | 'height'> | null>(null)
  const [position, setPosition] = useState<Pick<PositionProps, 'left' | 'top'> | null>(null)
  const [elementPosition, setElementPosition] = useState<PositionProps | null>(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (childRef.current) {
      const { clientWidth, offsetTop, offsetLeft, clientHeight } = childRef.current
      setElementPosition({
        width: clientWidth,
        top: offsetTop,
        left: offsetLeft,
        height: clientHeight,
      })
    }
  }, [
    childRef,
    windowSize?.width,
    windowSize?.height,
  ])

  useEffect(() => {
    if (tooltipRef.current) {
      const { clientWidth, clientHeight } = tooltipRef.current
      setDimension({
        width: clientWidth,
        height: clientHeight,
      })
    }
  }, [
    tooltipRef?.current?.clientWidth,
    tooltipRef?.current?.clientHeight,
    title,
  ])

  useEffect(() => {
    if (!elementPosition || !dimension) {
      return
    }

    // eslint-disable-next-line default-case
    switch (direction) {
    case 'bottom': {
      setPosition({
        top: elementPosition.top + elementPosition.height,
        left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2,
      })
      break
    }
    case 'top': {
      setPosition({
        top: elementPosition.top - dimension.height,
        left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2,
      })
      break
    }
    case 'left': {
      setPosition({
        top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
        left: elementPosition.left - dimension.width,
      })
      break
    }
    case 'right': {
      setPosition({
        top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
        left: elementPosition.left + elementPosition.width,
      })
      break
    }
    }
  }, [elementPosition, dimension, direction])

  const isVisible = !!(dimension && position)

  return (
    <StyledTooltip
      ref={tooltipRef}
      left={position?.left || '-1110px'}
      top={position?.top || '-1110px'}
      size={size}
      direction={direction}
      isVisible={isVisible}
    >
      { ContentElement || title }
    </StyledTooltip>
  )
}

export {
  TooltipControl as default,
  TooltipControl,
}
