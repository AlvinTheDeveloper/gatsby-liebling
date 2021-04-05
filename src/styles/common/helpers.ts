// Reference: https://github.com/eddiesigner/liebling/blob/master/src/sass/common/_helpers.scss
import {respondTo} from './styleFunctions'

export function getHelpers():object{
    return {
        hide:{display:"none"},
        srOnly:{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(100%)",
            position:"absolute",
            width:"1px",
            height:"1px",
            overflow:"hidden",
            whiteSpace:"nowrap"
        },
        contentCentered:{
            display:"flex",
            alignItem:"center",
            justifyContent:"center"
        },
        focusable:{
            "&:focus": {
                boxShadow: "0 0 0 2px var(--primary-subtle-color) !important",
            }
        },
        noAppearance:{
            "-webkit-appearance": "none !important",
            appearance: "none !important"
        },
        noPadding:{
            padding: 0
        },
        noMargin:{
            margin:0
        },
        noScrollY:{
            overflowY: "hidden"
        },
        alignCenter:{
            textAlign: "center"
        },
        alignLeft:{
            textAlign: "left"
        },
        alignRight:{
            textAlign: "right"
        },
        posRelative:{
            position: "relative"
        },
        posAbsolute:{
            position: "absolute"
        },
        bold:{
            fontWeight: "bold"
        },
        underline:{
            textDecoration: "underline"
        },
        uppercase:{
            textDecoration: "uppercase"
        },
        pointor:{
            cursor:"pointer"
        },
        onlyDesktop:Object.assign({display: "none"},respondTo('medium',{display: "block"}))
    }
}
