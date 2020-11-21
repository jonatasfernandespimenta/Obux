export type QuillToolbarOption = string | number | boolean

/**
 * Prop Types of a a Quill Toolbar
 *
 * @memberof RichText
 * @alias QuillToolbarOptions
 */
export type QuillToolbarOptions = Array<
  QuillToolbarOption |
  Record<string, QuillToolbarOption |
  QuillToolbarOptions> |
  Array<QuillToolbarOptions | QuillToolbarOption>
>

/**
 * variable holding a default quill toolbar. It looks like this:
 *
 * ```javascript
 * export const DefaultQuillToolbarOptions = [
 *   [{ header: [1, 2, 3, 4, 5, 6, false] }],
 *   ['bold', 'italic', 'underline', 'strike'], // toggled buttons
 *   ['blockquote', 'code-block'],
 *   [{ list: 'ordered' }, { list: 'bullet' }],
 *   [{ indent: '-1' }, { indent: '+1' }],
 *
 *   [{ align: [] }],
 *   ['link', 'image', 'video'],
 *
 *   ['clean'], // remove formatting button
 * ]
 * ```
 *
 * ### Usage
 *
 * ```javascript
 * import { DefaultQuillToolbarOptions } from '@admin-bro/design-system`
 * ```
 *
 *
 * @memberof RichText
 * @alias DefaultQuillToolbarOptions
 */
export const DefaultQuillToolbarOptions: Array<QuillToolbarOptions> = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],

  [{ align: [] }],
  ['link', 'image', 'video'],

  ['clean'], // remove formatting button
]

/**
 * Prop Types of a a Quill editor
 *
 * @memberof RichText
 * @alias QuillOptions
 * @see https://quilljs.com/docs/configuration
 */
export type QuillOptions = {
  /** Theme - default to snow */
  theme?: 'snow' | 'bubble';
  modules?: {
    toolbar?: Array<QuillToolbarOptions> | {
      handlers?: Record<string, any>;
      container?: Array<QuillToolbarOptions>
    },
    [key: string]: any
  },
  debug?: string | boolean;
  placeholder?: string;
  readOnly?: boolean;
  formats?: string[];
  bounds?: HTMLElement | string;
  scrollingContainer?: HTMLElement | string;
  strict?: boolean;
}

/**
 * OnChange callback passed to {@link RichTextProps}
 * @memberof RichText
 * @alias RichTextOnChange
 */
export type RichTextOnChange = (
  /** value of the component */
  content: string,
) => void

/**
 * Prop Types of an entire RichText
 *
 * @memberof RichText
 * @alias RichTextProps
 */
export type RichTextProps = {
  /** HTML value */
  value?: string;
  /** Indicates if editor should be more fancy: borderless */
  borderless?: boolean;
  /** On change callback */
  onChange?: RichTextOnChange;
  /** Quill related options */
  quill: QuillOptions,
}
