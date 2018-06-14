export const titleEnding = " - joshmoxey.com"

export const globals = {
  random: "random",
  select: "select"
}

export const sectionTitles = {
  podcast: "The Josh Moxey Show",
  reflections: "Reflections",
  gems: "Josh Moxey's Gems",
  articles: "Articles",
  radio: "Josh Moxey Radio"
}

export const linkTitles = {
  google_play: "Google Play",
  soundcloud: "SoundCloud",
  youtube: "YouTube",
  apple_music: "Apple Music",
  apple_podcasts: "Apple",
  spotify: "Spotify",
  stitcher: "Stitcher",
  facebook: "Facebook",
  facebook_v: "Facebook",
  twitter: "Twitter",
  instagram: "Instagram",
  podcast: "Podcast",
  simplecast: "Simplecast",
  tunein: "TuneIn",
  soundcloud_set: "SoundCloud"
}

export const sectionFilters = {
  recent: "recent",
  most_viewed: "most-viewed",
  featured: "featured"
}

export const imgPath = "/img"

export const gradients = [
  "rgba(248,80,50,1), rgba(255,231,110,1)",
  "#b18080, #53639e",
  "rgba(124,87,142,1), rgba(58,136,105,1))",
  "rgba(187,163,199,1), rgba(116,195,164,1)",
  "rgba(255,255,181,1) 0%, rgba(255,222,186,1) 100%",
  "rgba(194,194,255,1) 0%, rgba(199,242,255,1) 100%",
  "rgba(255,236,194,1) 0%, rgba(255,199,204,1) 100%",
  "rgba(199,255,194,1) 0%, rgba(247,255,199,1) 100%",
  "rgba(255,194,255,1) 0%, rgba(212,199,255,1) 100",
  "rgba(235,148,148,1) 0%, rgba(138,94,94,1) 100%",
  "rgba(147,235,215,1) 0%, rgba(93,137,126,1) 100%",
  "rgba(147,190,235,1) 0%, rgba(93,114,137,1) 100%",
  "rgba(166,147,235,1) 0%, rgba(102,93,137,1) 100%",
  "rgba(224,69,61,1) 0%, rgba(245,147,144,1) 100%",
  "rgba(170,62,224,1) 0%, rgba(209,143,245,1) 100%",
  "rgba(119,212,119,1) 0%, rgba(170,182,240,1) 100%",
  "rgba(119,170,212,1) 0%, rgba(240,168,219,1) 100%",
  "rgb(150, 83, 195), rgb(236, 127, 47)"
]

export const colors = [
  "royalblue",
  "grey",
]

export const defaultMoreSchema = (sectionId, count = 1) => {
  return {
    most_viewed: {
      count,
      sectionId
    },
    recent: {
      count,
      sectionId
    },
    featured: {
      count,
      sectionId
    }
  }
}

export function durationFormatter(value) {
  if (value.h === 0) {
    return `${value.m}m`
  } else {
    return `${value.h}h ${value.m}m`
  }
}

export function episodeNumberFormatter(value) {
  if (value < 10) {
    return `00${value}`
  } else if (value < 100) {
    return `0${value}`
  }
}

export function dateFormatter(date, divider = "/") {

  let year, month, day, monthName, ordinal
  date = new Date(date);

  let number = false
  if (number) {
    year = date.getFullYear().toString().substring(2, 4)
    month = date.getMonth() + 1
    day = date.getDate()
    //returns ie. 4/10/96
    return `${month}${divider}${day}${divider}${year}`
  } else {
    year = date.getFullYear()
    monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = monthName[date.getMonth()]
    day = date.getDate();

    //add "type" conditional here
    if (!["May, June, July"].includes(month)) {
      month = month.substring(0, 3)
    }

    //ordinal
    switch (day % 10) {
      case 1:
        ordinal = "st";
        break;
      case 2:
        ordinal = "nd";
        break;
      case 3:
        ordinal = "rd";
        break;
      default:
        ordinal = "th";
    }

    //teens
    if (day > 3 && day < 21) ordinal = 'th';

    //returns ie. November 3rd, 2016
    return `${month} ${day}${ordinal}, ${year}`
  }
}

export const imgPathify = (src) => {
  if (src.startsWith("http"))
    return src
  return `${imgPath}/${src}`
}

export const titlify = (title) => {
  return title + titleEnding
}

export const untitlify = (title) => {
  const length = titleEnding.length
  return title.slice(0, -length)
}

export const idify = (id) => {
  if (!id) return
  return id.toLowerCase().split(" ").join("_")
}

function camelCaseify(str) {
  let strSplit = str.toLowerCase().split(' ')
  if (strSplit.length === 1) {
    return strSplit[0]
  }
  for (let i = 1; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1).toLowerCase();
  }
  return strSplit.join('')
}


export const backgroundStyler = (style) => {
  if (style.active === false) return {}

  // gradientSchema = {
  //   effect: null,
  //   angle: 45,
  //   color: ""
  // }

  let backgroundColor, backgroundImage, overlay, gradient, gradient2, gradientOverlay, gradientOverlay2, img, img2

  if (style.overlay) {
    let color = style.overlay.color || "34, 34, 34"
    let opacity = style.overlay.opacity || .5
    let rgba = `rgba(${color}, ${opacity})`
    overlay = `linear-gradient(${rgba}, ${rgba})`
  }

  img = style.img ? `url(${imgMiddleware(style.img)})` : false
  img2 = style.img2 ? `url(${imgMiddleware(style.img2)})` : false

  const gradientFilter = (gradient) => {
    if (!gradient) return false
    let {effect, angle, color} = gradient
    if (gradient === globals.random || gradient === globals.select) {
      return randomGradient(gradient)
    } else if (color === globals.random || color === globals.select) {
      return randomGradient(color, angle, effect)
    } else if (gradient) {
      return transformToGradientSyntax(color, angle, effect)
    } else if (gradient === undefined) {
      return "linear-gradient(-45deg, #444, #888)"
    } else {
      return false
    }
  }

  gradient = gradientFilter(style.gradient)
  if (style.gradient2)
    gradient2 = gradientFilter(style.gradient2)
  if (style.gradientOverlay)
    gradientOverlay = gradientFilter(style.gradientOverlay)
  if (style.gradientOverlay2)
    gradientOverlay2 = gradientFilter(style.gradientOverlay2)

  if (style.color === globals.random) {
    backgroundColor = generateRandomRGB()
  } else if (style.color === globals.select) {
    backgroundColor = getRandom(colors)
  } else if (style.color) {
    backgroundColor = style.color
  } else {
    backgroundColor = "#666"
  }

  overlay = overlay ? `${overlay}, ` : ""
  gradientOverlay = gradientOverlay ? `${gradientOverlay}, ` : ""
  gradientOverlay2 = gradientOverlay2 ? `${gradientOverlay2}, ` : ""
  gradient = gradient ? `${gradient}, ` : ""
  gradient2 = gradient2 ? `${gradient2}, ` : ""
  img = img ? `${img}, ` : ""
  img2 = img2 ? `${img2}, ` : ""

  //combine all to the proper stacking order and remove comma at end that would cancel it all out
  backgroundImage = `${overlay}${gradientOverlay}${gradientOverlay2}${img}${img2}${gradient}${gradient2}`.slice(0, -2)

  return {
    backgroundColor,
    backgroundImage
  }
}

export const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const generateRandomRGB = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`
}

export const randomGradient = (type, angle, effect) => {
  const gradient = type === globals.random ? [generateRandomRGB(), generateRandomRGB()] : getRandom(gradients)

  return transformToGradientSyntax(gradient, angle, effect)
}

export const transformToGradientSyntax = (gradient, angle, effect = "linear-gradient") => {
  if (gradient.isArray) {
    gradient = `${gradient[0]}, ${gradient[1]}`
  }

  if (angle === globals.random) {
    angle = Math.floor(Math.random() * 360)
  } else if (angle || angle === "0" || angle === 0) {
    angle = parseInt(angle)
  } else {
    angle = -45
  }

  return `${effect}(${angle}deg, ${gradient})`
}

export const production = () => {
  if (!process.env.NODE_ENV) {
    throw new Error("NODE_ENV is not defined")
  }
  return process.env.NODE_ENV.toLowerCase() === "production"
    && !window.location.host.startsWith("localhost")
}

export const urlToIds = (url) => {
  if (!url) throw Error("no value passed to urlToIds")
  url = url.split("/").filter(v => v !== '')

  const filters = Object.values(sectionFilters)
  const section = url[0]
  let page = filters.includes(url[1]) ? undefined : url[1]
  let type, id

  if (page && section) {
    type = "page"
    id = `${section}_${page}`
  } else if (section) {
    type = "section"
    id = section
  }

  return {
    section,
    page,
    type,
    id
  }
}

export const parseBoolean = (str) => {
  return (str === "true")
}

export const linkMiddleware = (data) => {
  let {id, urlId, url} = data
  if (url) {
    return url
  }
  switch (id) {
    case "apple_podcasts":
      if (!urlId) return "https://itunes.apple.com/ca/podcast/the-josh-moxey-journey/id1305500400?mt=2"
      return `https://itunes.apple.com/ca/podcast/the-josh-moxey-journey/id1305500400?mt=2&i=${urlId}`
    case "google_play":
      if (!urlId) return "https://play.google.com/music/m/I5n3a2frujlcypze4b4fh5v2jdi?t=The_Josh_Moxey_Journey"
      return `https://play.google.com/music/m/${urlId}`
    case "stitcher":
      if (!urlId) return `https://www.stitcher.com/podcast/josh-moxey/the-josh-moxey-journey`
      return `https://www.stitcher.com/podcast/josh-moxey/the-josh-moxey-journeE/e/${urlId}`
    case "tunein":
      if (!urlId) return `https://tunein.com/podcasts/Business--Economics-Podcasts/The-Josh-Moxey-Show-p1056867`
      return `https://tunein.com/podcasts/Business--Economics-Podcasts/The-Josh-Moxey-Show-p1056867/?topicId=${urlId}`
    case "facebook_v":
      if (!urlId) return `https://www.facebook.com/joshmoxey/videos`
      return `https://www.facebook.com/joshmoxey/videos/${urlId}/`
    case "facebook":
      if (!urlId) return `https://www.facebook.com/joshmoxey`
    case "youtube":
      return `https://www.youtube.com/channel/UCJl0a8GmK6yX6gB5QHTkZiw`
    case "apple_music":
      if (!urlId) return `https://itunes.apple.com/profile/joshmoxey`
      return `https://itunes.apple.com/ca/playlist/pl.u-${urlId}`
    case "spotify":
      if (!urlId) return `https://open.spotify.com/user/joshmoxey`
      return `https://open.spotify.com/user/joshmoxey/playlist/${urlId}`
    case "soundcloud":
      return `https://soundcloud.com/joshmoxey`
    case "soundcloud_set":
      if (!urlId) return `https://soundcloud.com/joshmoxey`
      return `https://soundcloud.com/joshmoxey/sets/${urlId}`
    default:
      return false
  }
}

export const imgPathRedirect = (src) => {
  //create loop here for going until there's no more redirects
  const redirects = {
    "jmj": "josh-moxey-journey-logo-500-may-2018.png",
    "jmr": "josh-moxey-radio-music-logo.png",
  }
  return redirects[src] || src
}

export const imgMiddleware = (src) => {
  return imgPathify(imgPathRedirect(src))
}

export const isMobile = () => {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true
  }
  return false
}