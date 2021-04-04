// Reference: src/sass/common/_global.scss
export function global(): object {
    return {
        body:{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
            color: "var(--primary-foreground-color)",
            fontSize: "1rem",
            fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif",
            fontDisplay: "swap",
            overflowX: "hidden",
            backgroundColor: "var(--background-color)",
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            "&.share-menu-displayed": {
                paddingBottom: "45px",
                "@include respond-to('medium')": {
                    paddingBottom: 0
                }
            }
        },
        ".main-wrap":{
            display: "flex",
            flexDirection:"column",
            flexGrow:1
        },
        p:{
            lineHeight: 1.5,
            margin:0
        },
        a:{
            color: "inherit",
            textDecoration: "none"
        },
        fieldset:{
            padding:0,
            margin:0,
            border:0,
            position:"relative"
        },
        ".tippy-popper *":{
            textAlign: "left !important"
        },
        ".medium-zoom-overlay":{
            backgroundColor: "var(--background-color) !important"
        },
        ".medium-zoom-overlay,.medium-zoom-image":{
            zIndex:5
        }
    }
}
