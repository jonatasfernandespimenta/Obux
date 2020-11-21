/**
 * @interface Theme
 * @load ./theme.doc.md
 * @section design-system
 */
/**
 * Color palette.
 *
 * @memberof Theme
 * @alias colors
 * @property {string} primary100=#4268F6      <div style="background: #4268F6; height: 20px;" />
 * @property {string} primary80=#6483F8     <div style="background: #6483F8; height: 20px;" />
 * @property {string} primary60=#879FFA     <div style="background: #879FFA; height: 20px;" />
 * @property {string} primary40=#A9BAFA     <div style="background: #A9BAFA; height: 20px;" />
 * @property {string} primary20=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
 * @property {string} accent=#38CAF1      <div style="background: #38CAF1; height: 20px;" />
 * @property {string} love=#e6282b      <div style="background: #e6282b; height: 20px;" />
 * @property {string} grey100=#1C1C38     <div style="background: #1C1C38; height: 20px;" />
 * @property {string} grey80=#454655      <div style="background: #454655; height: 20px;" />
 * @property {string} grey60=#898A9A      <div style="background: #898A9A; height: 20px;" />
 * @property {string} grey40=#C0C0CA      <div style="background: #C0C0CA; height: 20px;" />
 * @property {string} grey20=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
 * @property {string} white=#fff      <div style="background: #fff; height: 20px;" />
 * @property {string} errorDark=#DE405D     <div style="background: #DE405D; height: 20px;" />
 * @property {string} error=#FF4567     <div style="background: #FF4567; height: 20px;" />
 * @property {string} errorLight=#FFA5B5      <div style="background: #FFA5B5; height: 20px;" />
 * @property {string} successDark=#32A887     <div style="background: #32A887; height: 20px;" />
 * @property {string} success=#70C9B0     <div style="background: #70C9B0; height: 20px;" />
 * @property {string} successLight=#DBF0F1      <div style="background: #DBF0F1; height: 20px;" />
 * @property {string} infoDark=#4268F6      <div style="background: #4268F6; height: 20px;" />
 * @property {string} info=#879FFA      <div style="background: #879FFA; height: 20px;" />
 * @property {string} infoLight=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
 * @property {string} filterBg=#343F87      <div style="background: #343F87; height: 20px;" />
 * @property {string} hoverBg=#535B8E     <div style="background: #535B8E; height: 20px;" />
 * @property {string} inputBorder=#898A9A     <div style="background: #898A9A; height: 20px;" />
 * @property {string} border=#DDE1E5,     <div style="background: #DDE1E5; height: 20px;" />
 * @property {string} separator=#C0C0CA     <div style="background: #C0C0CA; height: 20px;" />
 * @property {string} highlight=#F6F7FB     <div style="background: #F6F7FB; height: 20px;" />
 * @property {string} filterInputBorder=rgba(255,255,255,0.15)      <div style="background: rgba(255,255,255,0.15); height: 20px;" />
 * @property {string} filterDisabled=rgba(83,91,142,0.05)      <div style="background: rgba(83,91,142,0.05); height: 20px;" />
 * @property {string} bg=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
 */
declare const colors: {
    primary100: string;
    primary80: string;
    primary60: string;
    primary40: string;
    primary20: string;
    accent: string;
    love: string;
    grey100: string;
    grey80: string;
    grey60: string;
    grey40: string;
    grey20: string;
    white: string;
    errorDark: string;
    error: string;
    errorLight: string;
    successDark: string;
    success: string;
    successLight: string;
    infoDark: string;
    info: string;
    infoLight: string;
    filterBg: string;
    hoverBg: string;
    border: string;
    inputBorder: string;
    separator: string;
    highlight: string;
    filterInputBorder: string;
    filterDisabled: string;
    bg: string;
};
/**
 * Sizes can be used with paddings, margins etc.
 *
 * This is the example of using responsive margin with Box component
 *
 * ```javascript
 * <Box p=['default', 'xl']>some content</Box>
 * ```
 *
 * This component will have 8px padding for lowest breakpoint and 24px above
 * this breakpoint.
 *
 * @memberof Theme
 * @alias space

 * @property {string} xs=2px        2px - <span class="space-box" style="width: 2px;" />
 * @property {string} sm=4px        4px - <span class="space-box" style="width: 4px;" />
 * @property {string} default=8px   8px - <span class="space-box" style="width: 8px;" /> (alias md)
 * @property {string} lg=16px       16px - <span class="space-box" style="width: 16px;" />
 * @property {string} xl=24px       24px - <span class="space-box" style="width: 24px;" />
 * @property {string} xxl=32px      32px - <span class="space-box" style="width: 32px;" />
 * @property {string} x3=48px       48px - <span class="space-box" style="width: 48px;" />
 * @property {string} x4=64px       64px - <span class="space-box" style="width: 64px;" />
 * @property {string} x5=80px       80px - <span class="space-box" style="width: 80px;" />
 * @property {string} x6=128px      128px - <span class="space-box" style="width: 128px;" />
 */
declare const space: {
    xs: string;
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    x3: string;
    x4: string;
    x5: string;
    x6: string;
};
/**
 * @memberof Theme
 * @alias sizes
 * @property {string} navbarHeight=64px
 * @property {string} sidebarWidth=300px
 * @property {string} maxFormWidth=740px
 */
declare const sizes: {
    navbarHeight: string;
    sidebarWidth: string;
    maxFormWidth: string;
};
/**
 * @memberof Theme
 * @alias fontSizes
 * @property {string} xs=10px      <div style="font-size: 10px;">'xs' font size</div>
 * @property {string} sm=12px      <div style="font-size: 12px;">'sm' font size</div>
 * @property {string} default=14px (alias md) <div style="font-size: 14px;">'default' font size</div>
 * @property {string} lg=16px      <div style="font-size: 16px;">'lg' font size</div>
 * @property {string} xl=18px      <div style="font-size: 18px;">'xl' font size</div>
 * @property {string} h4=24px      <div style="font-size: 24px;">'h4' font size</div>
 * @property {string} h3=28px      <div style="font-size: 28px;">'h3' font size</div>
 * @property {string} h2=32px      <div style="font-size: 32px;">'h2' font size</div>
 * @property {string} h1=40px      <div style="font-size: 40px;">'h1' font size</div>
 */
declare const fontSizes: {
    xs: string;
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
};
/**
 * @memberof Theme
 * @alias fontWeights
 * @property {string} lighter=200
 * @property {string} lighter=300
 * @property {string} normal=400
 * @property {string} normal=500
 * @property {string} bolder=900
 */
declare const fontWeights: {
    lighter: number;
    light: number;
    normal: number;
    bold: number;
    bolder: number;
};
/**
 * @memberof Theme
 * @alias lineHeights
 * @property {string} xs=10px
 * @property {string} sm=12px
 * @property {string} default=16px (alias md)
 * @property {string} lg=24px
 * @property {string} xl=32px
 * @property {string} xxl=40px
 */
declare const lineHeights: {
    xs: string;
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
/**
 * This dimension can be used with `testShadow` and `boxShadow` props provided
 * by {@link ShadowProps}
 *
 * ```javascript
 * <Box variant="grey" boxShadow="card">Some content...</Box>
 * ```
 *
 * @alias shadows
 * @memberof Theme
 * @property {string} login              <div class="shadow-div" style="box-shadow: 0 15px 24px 0 rgba(137,138,154,0.15);"/>
 * @property {string} cardHover          <div class="shadow-div" style="box-shadow: 0 4px 12px 0 rgba(137,138,154,0.4);"/>
 * @property {string} drawer             <div class="shadow-div" style="box-shadow: -2px 0 8px 0 rgba(137,138,154,0.2);"/>
 * @property {string} card               <div class="shadow-div" style="box-shadow: 0 1px 6px 0 rgba(137,138,154,0.4);"/>
 * @property {string} inputFocus         <div class="shadow-div" style="box-shadow: 0 2px 4px 0 rgba(135,159,250,0.4);"/>
 * @property {string} buttonFocus        <div class="shadow-div" style="box-shadow: 0 4px 6px 0 rgba(56,202,241,0.3);"/>
 */
declare const shadows: {
    login: string;
    cardHover: string;
    drawer: string;
    card: string;
    inputFocus: string;
    buttonFocus: string;
};
/**
 * Responsive breakpoints
 *
 * How to use them - simply pass an array to given prop:
 *
 * ```javascript
 * // Showing box on mobile devices
 * <Box display={["block", "none"]}>...</Box>
 *
 * // responsive width
 * <Box width={[1, 1/2, 1/3, 1/4]}>...</Box>
 * ```
 *
 * @memberof Theme
 * @alias breakpoints
 * @property {string} 0=577px
 * @property {string} 1=769px
 * @property {string} 2=1024px
 * @property {string} 3=1324px
 */
declare const breakpoints: string[];
declare const font: string;
/**
 * Border styles
 *
 * @memberof Theme
 * @alias borders
 * @property {string} input
 * @property {string} filterInput
 * @property {string} bg
 * @property {string} default
 */
declare const borders: {
    input: string;
    filterInput: string;
    bg: string;
    default: string;
};
/**
 * Border widths set for an entire layout. If you like to have border radius in Button's and Box'es
 * Then set default property.
 *
 * @memberof Theme
 * @alias borderWidths
 * @property {string} default - default border with
 */
declare const borderWidths: {
    default: string;
};
export declare type VariantType = 'primary' | 'danger' | 'success' | 'info' | 'secondary' | 'default' | 'light';
export declare const VariantValues: Array<VariantType>;
export { colors, lineHeights, fontWeights, fontSizes, sizes, space, font, shadows, borders, breakpoints, borderWidths, };
/**
 * The color utility parses a component's color and bg props and converts them into CSS
 * declarations. By default the raw value of the prop is returned. But most often you
 * would use one of the color from the [color palette]{@link colors}.
 *
 * @typedef {object} ColorProps
 * @alias ColorProps
 * @memberof Theme
 * @property {string} [color]                 Text color. It could be either a #hash or
 *                                            {@link colors} from css theme name like
 *                                            `grey80`
 * @property {string} [backgroundColor, bg]   Background color. Similar as above could be a
 *                                            #hash or one of {@link colors}.
 */
/**
 * The space utility converts shorthand margin and padding props to margin and padding
 * CSS declarations.
 *
 * You can use as a value raw dimensions in "px" or one of the value from the
 * [space scale]{@link space}.
 *
 * @typedef {object} SpaceProps
 * @alias SpaceProps
 * @memberof Theme
 * @property {string} [margin, m]             margin
 * @property {string} [marginTop, mt]         margin-top
 * @property {string} [marginRight, mr]       margin-right
 * @property {string} [marginBottom, mb]      margin-bottom
 * @property {string} [marginLeft, ml]        margin-left
 * @property {string} [marginX, mx]           margin-left and margin-right
 * @property {string} [marginY, my]           margin-top and margin-bottom
 * @property {string} [padding, p]            padding
 * @property {string} [paddingTop, pt]        padding-top
 * @property {string} [paddingRight, pr]      padding-right
 * @property {string} [paddingBottom, pb]     padding-bottom
 * @property {string} [paddingLeft, pl]       padding-left
 * @property {string} [paddingX, px]          padding-left and padding-right
 * @property {string} [paddingY, py]          padding-top and padding-bottom
 *
 * Set of props related to {@link space}. You can put there either string with 'px' or
 * one of `space` properties like `sm`, `default`, `xl` etc.
 */
/**
 * Typography props include _fontFamily_, _fontSize_, _fontWeight_, _lineHeight_, _letterSpacing_,
 * _textAlign_, and _fontStyle_.
 *
 * @typedef {object} TypographyProps
 * @alias TypographyProps
 * @memberof Theme
 * @property {string} [fontSize]    font-size. Could be either actual css value or key taken from
 *                                  {@link fontSizes}
 * @property {string} [fontWeight]  font-weight. Could be either actual css value or key taken from
 *                                  {@link fontWeights}
 * @property {string} [lineHeight]  line-height. Could be either actual css value or key taken from
 *                                  {@link lineHeights}
 * @property {string} [textAlign]   text-align
 * @property {string} [fontFamily]  font-family
 * @property {string} [fontStyle]   font-style
 * @property {string} [letterSpacing]  letter-spacing
 */
/**
 * The layout utility includes style props for width, height, display, minWidth,
 * minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, overflowX, and overflowY.
 *
 * The width prop is transformed based on the following:
 *
 * - Numbers from 0-1 are converted to percentage widths.
 * - Numbers greater than 1 are converted to pixel values.
 * - String values are passed as raw CSS values.
 * - And arrays are converted to responsive width styles.
 * - the width prop will attempt to pick up values from the {@link sizes}
 *
 * @example
 * // width `50%`
 * <Box width={1/2} />
 *
 * // width `256px`
 * <Box width={256} />
 *
 * // width `'2em'`
 * <Box width='2em' />
 *
 * // width `100%` on all viewport and `50%` from the smallest breakpoint and up
 * <Box width={[ 1, 1/2 ]} />
 *
 * // width from `sizes`
 * <Box height='navbarHeight' />
 *
 * @typedef {object} LayoutProps
 * @alias LayoutProps
 * @memberof Theme
 * @property {string} [width]         width
 * @property {string} [height]        height
 * @property {string} [display]       display
 * @property {string} [minWidth]      min-width
 * @property {string} [minHeight]     min-height
 * @property {string} [maxWidth]      max-width
 * @property {string} [maxHeight]     max-height
 * @property {string} [size]          size
 * @property {string} [verticalAlign] vertical-align
 * @property {string} [overflow]      overflow
 * @property {string} [overflowX]     overflow-x
 * @property {string} [overflowY]     overflow-y
 */
/**
 * The flexbox utility includes style props for alignItems, alignContent, justifyItems,
 * justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis,
 * justifySelf, alignSelf, and order.
 *
 * The width prop is transformed based on the following:
 *
 * - Numbers from 0-1 are converted to percentage widths.
 * - Numbers greater than 1 are converted to pixel values.
 * - String values are passed as raw CSS values.
 * - And arrays are converted to responsive width styles.
 * - the width prop will attempt to pick up values from the {@link sizes}
 *
 * @example
 * // alignItems
 * <Box alignItems='center' />
 *
 * // alignContent
 * <Box alignContent='center' />
 *
 * // justifyContent
 * <Box justifyContent='center' />
 *
 * // flexWrap
 * <Box flexWrap='wrap' />
 *
 * // flexBasis
 * <Box flexBasis='auto' />
 *
 * // flexDirection
 * <Box flexDirection='column' />
 *
 * // flex
 * <Box flex />
 *
 * // justifySelf
 * <Box justifySelf='center' />
 *
 * // alignSelf
 * <Box alignSelf='center' />
 *
 * // order
 * <Box order='2' />
 *
 * @typedef {object} FlexboxProps
 * @alias FlexboxProps
 * @memberof Theme
 * @property {string} [alignItems]         align-items
 * @property {string} [alignContent]       align-content
 * @property {string} [justifyItems]       justify-items
 * @property {string} [justifyContent]     justify-content
 * @property {string} [flexWrap]           flex-wrap
 * @property {string} [flexDirection]      flex-direction
 * @property {boolean} [flex]               flex
 * @property {number|string} [flexGrow]           flex-grow
 * @property {number} [flexShrink]         flex-shrink
 * @property {string} [flexBasis]          flex-basis
 * @property {string} [justifySelf]        justify-self
 * @property {string} [alignSelf]          align-self
 * @property {number|string} [order]              order
 */
/**
 * Reused Variant Enum: `primary` | `danger` | `success` | `info` | `secondary` | `default`
 *
 * @typedef {Enum} VariantType
 * @alias VariantType
 * @memberof Theme
 */
/**
 * The border utility includes all style props related to border
 *
 * @typedef {object} BorderProps
 * @alias BorderProps
 * @memberof Theme
 * @property {string | number} [borderWidth]
 * @property {string} [borderStyle]
 * @property {string} [borderColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderRadius]
 * @property {string | number} [borderTop]
 * @property {string | number} [borderTopWidth]
 * @property {string} [borderTopStyle]
 * @property {string} [borderTopColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderTopLeftRadius]
 * @property {string | number} [borderTopRightRadius]
 * @property {string | number} [borderRight]
 * @property {string | number} [borderRightWidth]
 * @property {string} [borderRightStyle]
 * @property {string} [borderRightColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderBottom]
 * @property {string | number} [borderBottomWidth]
 * @property {string} [borderBottomStyle]
 * @property {string} [borderBottomColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderBottomLeftRadius]
 * @property {string | number} [borderBottomRightRadius]
 * @property {string | number} [borderLeft]
 * @property {string | number} [borderLeftWidth]
 * @property {string} [borderLeftStyle]
 * @property {string} [borderLeftColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderX]
 * @property {string | number} [borderY]
 */
/**
 * The position utility includes style props for position, zIndex, top, right, bottom, and left.
 *
 * @typedef {object} PositionProps
 * @alias PositionProps
 * @memberof Theme
 * property {string | number} [position]
 * property {string | number} [zIndex]
 * property {string | number} [top]
 * property {string | number} [right]
 * property {string | number} [bottom]
 * property {string | number} [left]
 */
/**
 * The shadow utility includes style props for textShadow and boxShadow.
 *
 * @typedef {object} ShadowProps
 * @alias ShadowProps
 * @memberof Theme
 * property {string} [boxShadow]
 * property {string} [textShadow]
 */
