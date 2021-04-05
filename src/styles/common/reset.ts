// Reference: https://github.com/eddiesigner/liebling/blob/master/src/sass/common/_reset.scss
export function reset(): object {
    return {
        /**
         * 1. Remove repeating backgrounds in all browsers (opinionated).
         * 2. Add border box sizing in all browsers (opinionated).
         */
        "*, ::before, ::after": {
            backgroundRepeat: "no-repeat", /* 1 */
            boxSizing: "border-box" /* 2 */
        },
        /**
         * 1. Add text decoration inheritance in all browsers (opinionated).
         * 2. Add vertical alignment inheritance in all browsers (opinionated).
         */
        "::before,::after": {
            textDecoration: "inherit", /* 1 */
            verticalAlign: "inherit" /* 2 */
        },
        /**
         * 1. Use the default cursor in all browsers (opinionated).
         * 2. Use the default user interface font in all browsers (opinionated).
         * 3. Correct the line height in all browsers.
         * 4. Use a 4-space tab width in all browsers (opinionated).
         * 5. Prevent adjustments of font size after orientation changes in
         *    IE on Windows Phone and in iOS.
         * 6. Breaks words to prevent overflow in all browsers (opinionated).
         */
        "html": {
            fontFamily:/* 2 */
                "system-ui," +
                "-apple-system," + /* macOS 10.11-10.12 */
                "Segoe UI," + /* Windows 6+ */
                "Roboto," + /* Android 4+ */
                "Ubuntu," + /* Ubuntu 10.10+ */
                "Cantarell," + /* Gnome 3+ */
                "Oxygen," + /* KDE Plasma 4+ */
                "sans-serif," +/* fallback */
                "Apple Color Emoji," +/* macOS emoji */
                "Segoe UI Emoji," +/* Windows emoji */
                "Segoe UI Symbol," +/* Windows emoji */
                "Noto Color Emoji", /* Linux emoji */
            lineHeight: 1.15, /* 3 */
            tabSize: 4, /* 4 */
            wordBreak: "break-word", /* 6 */
        },
        /* Sections
         * ========================================================================== */
        /**
         * Remove the margin in all browsers (opinionated).
         */
        "body": {margin: 0},
        /**
         * Correct the font size and margin on `h1` elements within `section` and
         * `article` contexts in Chrome, Firefox, and Safari.
         */
        "h1": {
            fontSize: "2em",
            margin: "0.67em 0"
        },
        /* Grouping content
         * ========================================================================== */

        /**
         * 1. Add the correct sizing in Firefox.
         * 2. Show the overflow in Edge and IE.
         */
        "hr": {
            height: 0, /* 1*/
            overflow: "visible" /* 2 */
        },
        /**
         * Add the correct display in IE.
         */
        "main": {
            display: "block"
        },
        /**
         * Remove the list style on navigation lists in all browsers (opinionated).
         */
        "nav ol, nav ul": {
            listStyle: "none"
        },
        /**
         * 1. Use the default monospace user interface font
         *    in all browsers (opinionated).
         * 2. Correct the odd `em` font sizing in all browsers.
         */
        "pre": {
            fontFamily: /* 1 */
                "Menlo," + /* macOS 10.10+ */
                "Consolas," + /* Windows 6+ */
                "Roboto Mono," + /* Android 4+ */
                "Ubuntu Monospace," + /* Ubuntu 10.10+ */
                "Oxygen Mono," + /* KDE Plasma 4+ */
                "Liberation Mono," + /* Linux/OpenOffice fallback */
                "monospace", /* fallback */
            fontSize: "1em" /* 2 */
        },
        /* Text-level semantics
         * ========================================================================== */

        /**
         * Remove the gray background on active links in IE 10.
         */
        "a": {
            backgroundColor: "transparent"
        },
        /**
         * Add the correct text decoration in Edge, IE, Opera, and Safari.
         */
        "abbr[title]": {
            // textDecoration: "underline",
            textDecoration: "underline dotted"
        },
        /**
         * Add the correct font weight in Chrome, Edge, and Safari.
         */
        "b,strong": {
            fontWeight: "bolder"
        },
        /**
         * 1. Use the default monospace user interface font
         *    in all browsers (opinionated).
         * 2. Correct the odd `em` font sizing in all browsers.
         */
        "code,kbd,samp": {
            fontFamily:/* 1 */
                "Menlo," + /* macOS 10.10+ */
                "Consolas," + /* Windows 6+ */
                "Roboto Mono," + /* Android 4+ */
                "Ubuntu Monospace," + /* Ubuntu 10.10+ */
                "Oxygen Mono," + /* KDE Plasma 4+ */
                "Liberation Mono," + /* Linux/OpenOffice fallback */
                "monospace",/* fallback */
            fontSize: "1em" /* 2 */
        },
        /**
         * Add the correct font size in all browsers.
         */
        "small": {
            fontSize: "80%"
        },
        /*
         * Remove the text shadow on text selections in Firefox 61- (opinionated).
         * 1. Restore the coloring undone by defining the text shadow
         *    in all browsers (opinionated).
         */
        "::-moz-selection":{
            backgroundColor: "#b3d4fc", /* 1 */
            color: "#000000", /* 1 */
            textShadow: "none"
        },
        "::selection":{
            backgroundColor: "#b3d4fc", /* 1 */
            color: "#000000", /* 1 */
            textShadow: "none"
        },
        /* Embedded content
         * ========================================================================== */

        /*
         * Change the alignment on media elements in all browers (opinionated).
         */
        "audio,canvas,iframe,img,svg,video":{
            verticalAlign: "middle"
        },
        /**
         * Add the correct display in IE 9-.
         */
        "audio,video":{
            display: "inline-block"
        },
        /**
         * Add the correct display in iOS 4-7.
         */
        "audio:not([controls])":{
            display: "none",
            height:0
        },
        /**
         * Remove the border on images inside links in IE 10-.
         */
        img: {
            borderStyle: "none"
        },
        /**
         * Change the fill color to match the text color in all browsers (opinionated).
         */
        svg:{
            borderStyle: "none"
        },
        /**
         * Hide the overflow in IE.
         */
        "svg:not(:root)":{
            overflow: "hidden"
        },
        /* Tabular data
         * ========================================================================== */

        /**
         * Collapse border spacing in all browsers (opinionated).
         */
        table: {
            borderCollapse: "collapse"
        },
        /* Forms
         * ========================================================================== */

        /**
         * Inherit styling in all browsers (opinionated).
         */
        "button,input,select,textarea":{
            fontFamily:"inherit",
            fontSize:"inherit",
            lineHeight:"inherit",
        },
        /**
         * Remove the margin in Safari.
         */
        "button,input,select":{
            margin: 0
        },
        /**
         * 1. Show the overflow in IE.
         * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.
         */
        button:{
            overflow: "visible", /* 1 */
            textTransform: "none" /* 2 */
        },
        /**
         * Correct the inability to style clickable types in iOS and Safari.
         */
        'button,[type="button"],[type="reset"],[type="submit"]':{
            "-webkit-appearance":"button"
        },
        /**
         * Correct the padding in Firefox.
         */
        fieldset:{
            padding: "0.35em 0.75em 0.625em"
        },
        /**
         * Show the overflow in Edge and IE.
         */
        input:{
            overflow: "visible"
        },
        /**
         * 1. Correct the text wrapping in Edge and IE.
         * 2. Correct the color inheritance from `fieldset` elements in IE.
         */
        legend:{
            color: "inherit", /* 2 */
            display: "table", /* 1 */
            maxWidth: "100%", /* 1 */
            whiteSpace: "normal" /* 1 */
        },
        /**
         * 1. Add the correct display in Edge and IE.
         * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
         */
        progress: {
            display: "inline-block", /* 1 */
            verticalAlign: "baseline" /* 2 */
        },
        /**
         * Remove the inheritance of text transform in Firefox.
         */
        select:{
            textTransform: "none"
        },
        /**
         * 1. Remove the margin in Firefox and Safari.
         * 2. Remove the default vertical scrollbar in IE.
         * 3. Change the resize direction on textareas in all browsers (opinionated).
         */
        textarea:{
            margin: 0, /* 1 */
            overflow: "auto", /* 2 */
            resize: "vertical" /* 3 */
        },
        /**
         * Remove the padding in IE 10-.
         */
        '[type="checkbox"],[type="radio"]':{
            padding:0
        },
        /**
         * 1. Correct the odd appearance in Chrome and Safari.
         * 2. Correct the outline style in Safari.
         */
        '[type="search"]':{
            "-webkit-appearance": "textfield", /* 1 */
            outlineOffset: "-2px" /* 2 */
        },
        /**
         * Correct the cursor style of increment and decrement buttons in Safari.
         */
        "::-webkit-inner-spin-button,::-webkit-outer-spin-button":{
            height: "auto"
        },
        /**
         * Correct the text style of placeholders in Chrome, Edge, and Safari.
         */
        "::-webkit-input-placeholder":{
            color: "inherit",
            opacity: "0.54"
        },
        /**
         * Remove the inner padding in Chrome and Safari on macOS.
         */
        "::-webkit-search-decoration":{
            "-webkit-appearance": "none"
        },
        /**
         * 1. Correct the inability to style clickable types in iOS and Safari.
         * 2. Change font properties to `inherit` in Safari.
         */
        "::-webkit-file-upload-button":{
            "-webkit-appearance": "button", /* 1 */
            font: "inherit" /* 2 */
        },
        /**
         * Remove the inner border and padding of focus outlines in Firefox.
         */
        "::-moz-focus-inner":{
            borderStyle: "none",
            padding: 0
        },
        /**
         * Restore the focus outline styles unset by the previous rule in Firefox.
         */
        ":-moz-focusring":{
            outline: "1px dotted ButtonText"
        },
        /* Interactive
         * ========================================================================== */

        /*
         * Add the correct display in Edge and IE.
         */
        details:{
            display:"block"
        },
        /*
         * Add the correct styles in Edge, IE, and Safari.
         */
        dialog:{
            backgroundColor: "white",
            border: "solid",
            color: "black",
            display: "block",
            // height: "-moz-fit-content",
            // height: "-webkit-fit-content",
            height: "fit-content",
            left: 0,
            margin: "auto",
            padding: "1em",
            position: "absolute",
            right: 0,
            // width: "-moz-fit-content",
            // width: "-webkit-fit-content",
            width: "fit-content",
        },
        "dialog:not([open])":{
            display: "none"
        },
        /*
         * Add the correct display in all browsers.
         */
        summary: {
            display: "list-item"
        },
        /* Scripting
         * ========================================================================== */

        /**
         * Add the correct display in IE 9-.
         */
        canvas:{
            display: "inline-block"
        },
        /**
         * Add the correct display in IE.
         */
        template:{
            display: "none"
        },
        /* User interaction
         * ========================================================================== */

        /*
         * 1. Remove the tapping delay on clickable elements
              in all browsers (opinionated).
         * 2. Remove the tapping delay in IE 10.
         */
        "a,area,button,input,label,select,summary,textarea,[tabindex]":{
            "-ms-touch-action": "manipulation", /* 1 */
            touchAction: "manipulation" /* 2 */
        },
        /**
         * Add the correct display in IE 10-.
         */
        "[hidden]":{
            display:"none"
        },
        /* Accessibility
         * ========================================================================== */

        /**
         * Change the cursor on busy elements in all browsers (opinionated).
         */
        '[aria-busy="true"]':{
            cursor:"process"
        },
        /*
         * Change the cursor on control elements in all browsers (opinionated).
         */
        '[aria-controls]':{
            cursor: "pointer"
        },
        /*
         * Change the cursor on disabled, not-editable, or otherwise
         * inoperable elements in all browsers (opinionated).
         */
        '[aria-disabled],[disabled]':{
            cursor:"disabled"
        },
        /*
         * Change the display on visually hidden accessible elements
         * in all browsers (opinionated).
         */
        '[aria-hidden="false"][hidden]:not(:focus)':{
            clip: "rect(0, 0, 0, 0)",
            display: "inherit",
            position: "absolute"
        }
    }
}
