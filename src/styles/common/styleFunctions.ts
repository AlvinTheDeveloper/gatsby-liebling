// Reference: https://github.com/eddiesigner/liebling/blob/master/src/sass/common/_mixins.scss

const breakSmall: string = "35.5rem"; // >= 568px @ 16px
const breakMedium: string = "48rem"; // >= 768px @ 16px
const breakLarge: string = "64rem"; // >= 1024px @ 16px
const breakExtraLarge: string = "80rem"; // >= 1280px @ 16px
const breakLargest: string = "90rem"; // >= 1440px @ 16px

export function getBreakSmall():string{return breakSmall;}
export function getBreakMedium():string{return breakMedium;}
export function getBreakLarge():string{return breakLarge;}
export function getBreakExtraLarge():string{return breakExtraLarge;}
export function getBreakLargest():string{return breakLargest;}

export function respondTo(condition: string, content: object): object {
    switch (condition) {
        case "initialize":
            return {"@media only screen and (min-width: 1px)": content}
        case "small":
            return {"@media only screen and (min-width: $break-small)": content}
        case "medium":
            return {"@media only screen and (min-width: $break-medium)": content}
        case "large":
            return {"@media only screen and (min-width: $break-large)": content}
        case "extraLarge":
            return {"@media only screen and (min-width: $break-extra-large)": content};
        case "largest":
            return {"@media only screen and (min-width: $break-largest)": content};

    }
}

export function ts({tsVal = "0 1px 0 #fff"}: { tsVal: string }): object {
    return {"textShadow": tsVal}
}

export function bs({bsVal = "0 0 0.83em #333", due = "0 0 0 transparent"}: { bsVal: string, due: string }): object {
    return {
        "-moz-box-shadow": `${bsVal}, ${due}`,
        "-webkit-box-shadow": `${bsVal}, ${due}`,
        "box-shadow": `${bsVal}, ${due}`
    }
}

export function opacity(opacity:string):object{
    return {
        opacity,
        "-moz-opacity":opacity
    }
}

export function transition({transition="all linear 0.2s"}: { transition: string }):object{
    return {
        "-webkit-transition": transition,
        "-moz-transition": transition,
        "-o-transition": transition,
        "-ms-transition": transition,
        transition: transition,
    }
}


export function transform({transform="translate3d(0, 0, 0)"}:{transform:string}):object{
    return {
        "-moz-transform": transform,
        "-ms-transform": transform,
        "-o-transform": transform,
        transform: transform,
    }
}

export function animation(...animate:string[]):object{
    let animations=animate.join(", ").slice(0, -2);

    return {
        "-webkit-animation": animations,
        "-moz-animation": animations,
        "-o-animation": animations,
        animation: animations,
    }
}

export function keyframes(animationName,content:string):object{
    let output:object={}
    output[`@-webkit-keyframes ${animationName}`]=content
    return output
}

export function strip({lines=0,fontSize=0,lineHeight=0,width="100%"}:{lines: number, fontSize: number, lineHeight: number, width: number|string}){
    return {
        display: "block",
        width,
        "min-height": (fontSize*lineHeight*lines) + 2,
        "max-height": (fontSize*lineHeight*lines) + 2, /* Fallback for non-webkit */
        "font-size": fontSize,
        "line-height": lineHeight,
        "white-space": "nowrap",
        "-webkit-line-clamp": lines,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        "text-overflow": "ellipsis",}
}

export function stripUnit(num:number):number{
    return num/(num * 0 + 1)
}

export function clearfix():object{
    return {
        zoom:1,
        "&::before,&::after":{
            content: " ", /* 1 */
            display: "table" /* 2 */
        },
        "&::after":{
            clear:"both"
        }
    }
}
