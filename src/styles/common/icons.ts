// Reference: https://github.com/eddiesigner/liebling/blob/master/src/sass/common/_icons.scss
export function getIconBaseStyle():object{
    return{
        fontFamily: "'icomoon' !important",
        speak: "none",
        fontStyle: "normal",
        fontWeight: "normal",
        fontVariant: "normal",
        textTransform: "none",
        lineHeight: 1,
        /* Better Font Rendering =========== */
        "-webkit-font-smoothing":"antialiased",
        "-moz-osx-font-smoothing":"grayscale"
    }
}

export function getMoonIconStyle():object{
    return {
        iconMoon:Object.assign({
            "&:before":{content: "\e90f"},
        },getIconBaseStyle())
    }
}

export function getSunnyIconStyle():object{
    return{
        iconSunny:Object.assign({
            "&:before":{content:"\e910"}
        },getIconBaseStyle())
    }
}

export function getChevronDownIconStyle():object{
    return {
        iconChevronDown:Object.assign({
            "&:before":{content:"\e900"}
        },getIconBaseStyle())
    }
}

export function getStarIconStyle():object{
    return {
        iconStar: Object.assign({
            "&:before":{content:"\e901"}
        },getIconBaseStyle())
    }
}

export function getArrowLeftStyle():object{
    return {
        iconArrowLeft:Object.assign({
            "&:before":{content:"\e902"}
        })
    }
}

export function getArrowRightStyle():object{
    return {
        iconArrowRight:Object.assign({
            "&:before":{content:"\e903"}
        },getIconBaseStyle())
    }
}

export function getArrowTopIconStyle():object{
    return {
        iconArrowTop:Object.assign({
            "&:before":{content:"\ee904"}
        },getIconBaseStyle())
    }
}

export function getCloseIconStyle():object{
    return {
        iconClose:Object.assign({
            "&:before":{content:"\e905"}
        },getIconBaseStyle())
    }
}

export function getCommentIconStyle():object{
    return {
        iconComment:Object.assign({
            "&:before":{content:"\e906"}
        },getIconBaseStyle())
    }
}

export function getFacebookIconStyle():object{
    return {
        iconFacebook:Object.assign({
            "&:before":{content:"\e907"}
        },getIconBaseStyle())
    }
}

export function getGlobeIconStyle():object{
    return {
        iconGlobe:Object.assign({
            "&:before":{content:"\e908"}
        },getIconBaseStyle())
    }
}

export function getMenuIconStyle():object{
    return {
        iconMenu:Object.assign({
            "&:before":{content:"\e909"}
        },getIconBaseStyle())
    }
}

export function getMoreIconStyle():object{
    return {
        iconMore:Object.assign({
            "&:before":{content:"\e90a"}
        },getIconBaseStyle())
    }
}

export function getSearchIconStyle():object{
    return {
        iconSearch:Object.assign({
            "&:before":{content:"\e90b"}
        },getIconBaseStyle())
    }
}

export function getTwitterIconStyle():object{
    return {
        iconTwitter:Object.assign({
            "&:before":{content:"\e90c"}
        },getIconBaseStyle())
    }
}

export function getIMDBIconStyle():object{
    return {
        iconIMDB:Object.assign({
            "&:before":{content:"\e90d"}
        },getIconBaseStyle())
    }
}

export function getVKIconStyle():object{
    return {
        iconVK:Object.assign({
            "&:before":{content:"\e90e"}
        },getIconBaseStyle())
    }
}

export function getSteamIconStyle():object{
    return {
        iconSteam:Object.assign({
            "&:before":{content:"\e914"}
        },getIconBaseStyle())
    }
}

export function getTwitchIconStyle():object{
    return {
        iconTwitch:Object.assign({
            "&:before":{content:"\e915"}
        },getIconBaseStyle())
    }
}

export function getYoutubeIconStyle():object{
    return {
        iconYouTube:Object.assign({
            "&:before":{content:"\e916"}
        },getIconBaseStyle())
    }
}

export function getVimeoIconStyle():object{
    return {
        iconVimeo:Object.assign({
            "&:before":{content:"\e917"}
        },getIconBaseStyle())
    }
}

export function getWhatsappIconStyle():object{
    return {
        iconWhatsapp:Object.assign({
            "&:before":{content:"\e918"}
        },getIconBaseStyle())
    }
}

export function getRedditIconStyle():object{
    return {
        iconReddit:Object.assign({
            "&:before":{content:"\e919"}
        },getIconBaseStyle())
    }
}

export function getRSSIconStyle():object{
    return {
        iconRSS:Object.assign({
            "&:before":{content:"\e91a"}
        },getIconBaseStyle())
    }
}

export function getSpotifyIconStyle():object{
    return {
        iconSpotify:Object.assign({
            "&:before":{content:"\e91b"}
        },getIconBaseStyle())
    }
}

export function getTelegramIconStyle():object{
    return {
        iconTelegram:Object.assign({
            "&:before":{content:"\e91c"}
        },getIconBaseStyle())
    }
}

export function getSoundcloudIconStyle():object{
    return {
        iconSoundcloud:Object.assign({
            "&:before":{content:"\e91d"}
        },getIconBaseStyle())
    }
}

export function getFlickrIconStyle():object{
    return {
        iconFlickr:Object.assign({
            "&:before":{content:"\e91e"}
        },getIconBaseStyle())
    }
}

export function getLetterboxdIconStyle():object{
    return {
        iconLetterboxd:Object.assign({
            "&:before":{content:"\e91f"}
        },getIconBaseStyle())
    }
}

export function getOdnoklassnikiIconStyle():object{
    return {
        iconOdnoklassniki:Object.assign({
            "&:before":{content:"\e920"}
        },getIconBaseStyle())
    }
}

export function getPinterestIconStyle():object{
    return {
        iconPinterest:Object.assign({
            "&:before":{content:"\e921"}
        },getIconBaseStyle())
    }
}

export function getTiktokIconStyle():object{
    return {
        iconTiktok:Object.assign({
            "&:before":{content:"\e922"}
        },getIconBaseStyle())
    }
}

export function getTumblrIconStyle():object{
    return {
        iconTumblr:Object.assign({
            "&:before":{content:"\e923"}
        },getIconBaseStyle())
    }
}

export function getXingIconStyle():object{
    return {
        iconXing:Object.assign({
            "&:before":{content:"\e924"}
        },getIconBaseStyle())
    }
}

export function getMixcloudIconStyle():object{
    return {
        iconMixcloud:Object.assign({
            "&:before":{content:"\e925"}
        },getIconBaseStyle())
    }
}

export function getMixerIconStyle():object{
    return {
        iconMixer:Object.assign({
            "&:before":{content:"\e926"}
        },getIconBaseStyle())
    }
}

export function getWechatIconStyle():object{
    return {
        iconWechat:Object.assign({
            "&:before":{content:"\e927"}
        },getIconBaseStyle())
    }
}

export function getDeviantArtIconStyle():object{
    return {
        iconDeviantArt:Object.assign({
            "&:before":{content:"\e928"}
        },getIconBaseStyle())
    }
}

export function getDiscordIconStyle():object{
    return {
        iconDiscord:Object.assign({
            "&:before":{content:"\e929"}
        },getIconBaseStyle())
    }
}

export function getInstagramIconStyle():object{
    return {
        iconInstagram:Object.assign({
            "&:before":{content:"\e92a"}
        },getIconBaseStyle())
    }
}

export function getLinkedInIconStyle():object{
    return {
        iconLinkedIn:Object.assign({
            "&:before":{content:"\e92b"}
        },getIconBaseStyle())
    }
}

export function getSnapchatIconStyle():object{
    return {
        iconSnapchat:Object.assign({
            "&:before":{content:"\e92c"}
        },getIconBaseStyle())
    }
}

export function getGitlabIconStyle():object{
    return {
        iconGitlab:Object.assign({
            "&:before":{content:"\e92d"}
        },getIconBaseStyle())
    }
}

export function getGitHubIconStyle():object{
    return {
        iconGithub:Object.assign({
            "&:before":{content:"\e930"}
        },getIconBaseStyle())
    }
}

export function getBehanceIconStyle():object{
    return {
        iconBehance:Object.assign({
            "&:before":{content:"\e951"}
        },getIconBaseStyle())
    }
}
