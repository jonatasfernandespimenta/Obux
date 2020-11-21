/* eslint-disable arrow-body-style */
import ReactDOM from 'react-dom'
import React, { useEffect, useState, FC } from 'react'

import generateId from './generate-id'

// TODO: handle iframe case with ref.current.ownerDocument
const PortalUtils = {
  appendElement: (element: HTMLDivElement): void => {
    window.document.body.appendChild(element)
  },

  removeElement: (id: string): void => {
    const domElement = window.document.getElementById(id)
    domElement?.remove()
  },

  createPortalForKey: function createPortalForKey<Props>(
    idKey: string, Component: FC<Props>,
  ): FC<Props> {
    const Portal: FC<Props> = (props) => {
      const [id] = useState(generateId(idKey))
      const [portalElement] = useState<HTMLDivElement>(window.document.createElement('div'))

      useEffect(() => {
        portalElement.id = id
        PortalUtils.appendElement(portalElement)

        return () => {
          PortalUtils.removeElement(id)
        }
      })

      return ReactDOM.createPortal((
        <Component {...props} />
      ), portalElement)
    }
    return Portal
  },
}

export {
  PortalUtils as default,
  PortalUtils,
}
