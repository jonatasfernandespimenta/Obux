/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useRef, useMemo, useCallback, forwardRef } from 'react'

import styled from 'styled-components'
import snow from './snow.styles'
import bubble from './bubble.styles'
import styles from './styles'
import Box from '../../atoms/box/box'
import { Quill as QuillClass } from 'quill/index'
import { DefaultQuillToolbarOptions, RichTextProps } from './rich-text-props'

// Following hack is done for SSR case, where Quill wants to invoke `document.createElement...`
// So when system sees that file is run by the server (window is not defined) then it sets
// quill to null instead throwing errors. We have to use require because import has to be
// top-level. This line cannot be changed since rollup bundler relies on it in the exact form.
// Check out `config/rollup.js`
// @ts-ignore
const Quill: typeof QuillClass = typeof window === 'object' ? require('quill') : null

const Theme = styled(Box)<RichTextProps>`
  ${bubble};
  ${snow};
  ${styles};
`

/**
 * @load ./rich-text.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see RichTextProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-rich-text--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const RichText = forwardRef<HTMLDivElement, RichTextProps>((props, ref) => {
  const { value: initialValue, borderless, quill: options, onChange } = props

  options.theme = options.theme || 'snow'
  if (!options.modules?.toolbar) {
    options.modules = options.modules || {}
    options.modules.toolbar = DefaultQuillToolbarOptions
  }

  if (!Quill) {
    return <div>Server Side Rendered</div>
  }

  const classNames: Array<string> = []
  if (borderless) {
    classNames.push('quill-borderless')
  }

  const [quill, setQuill] = useState<QuillClass | null>(null)
  const [content, setContent] = useState<string>(initialValue || '')
  // TODO: right now I don't watch for changes on ref - maybe I should?
  const editorRef = ref as React.RefObject<HTMLDivElement> || useRef<HTMLDivElement>(null)

  const handleChange = useCallback(() => {
    const editor = quill?.root
    if (editor) {
      const currentContent = editor.innerHTML
      setContent(currentContent)
      if (onChange) {
        onChange(currentContent)
      }
    }
  }, [onChange, quill])

  useEffect(() => {
    if (editorRef.current) {
      const quillInstance = new Quill(editorRef.current, options)
      setQuill(quillInstance)
    }
    return () => {
      setQuill(null)
    }
  }, [])

  useEffect(() => {
    if (!editorRef.current || !quill) {
      return
    }
    if (content && quill.root.innerHTML !== content) {
      quill.clipboard.dangerouslyPasteHTML(content)
    }
  }, [quill]) // only when quill is initialized - later on it should update content

  useEffect(() => {
    const editor = quill?.root
    if (!editor) {
      return undefined
    }
    editor?.addEventListener('DOMSubtreeModified', handleChange)
    return () => {
      editor?.removeEventListener('DOMSubtreeModified', handleChange)
    }
  }, [onChange, handleChange])

  return (
    <Theme quill={options}>
      <div className={classNames.join(' ')}>
        <div
          className="quill-editor"
          ref={editorRef}
        />
      </div>
    </Theme>
  )
})

export default RichText
