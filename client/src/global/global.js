export const titleEnding = " - joshmoxey.com"

export const globals = {
  random: "random",
  select: "select"
}

export const sectionId = {
  podcast: "The Josh Moxey Show",
  gems: "Josh Moxey's Gems",
  articles: "Articles",
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

]

export const colors = [
  "royalblue"
]

export function durationFormatter(value) {
  if (value.h === 0 && value.m === 0) {
    return `${value.m}s`
  } else if (value.h === 0) {
    return `${value.m}m ${value.m}s`
  } else {
    return `${value.h}h ${value.m}m ${value.m}s`
  }
}

export function episodeNumberFormatter(value) {
  if (value < 10) {
    return `00${value}`
  } else if (value < 100) {
    return `0${value}`
  }
}

export function dateFormatter(date, short = false, divider = "/") {
  let year, month, day, monthName, ordinal
  date = new Date(date);

  if (short) {
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
  return id.toLowerCase().split(" ").join("_")
}

export const backgroundStyling = (style) => {
  if (style.active === false) return {}
  style = {
    gradient: {
      color: "select"
    },
    color: "grey"
  }

  let backgroundColor = style.color
  let gradient = style.gradient || false
  let img = style.img ? imgPathify(style.img) : false
  let backgroundImage = ""

  if (style.color === globals.random) {
    backgroundColor = generateRandomRGB()
  } else if (style.color === globals.select) {
    backgroundColor = getRandom(colors)
  } else if (!style.color) {
    backgroundColor = "#666"
  }

  // gradientSchema = {
  //   effect: null,
  //   angle: 45,
  //   color: ""
  // }

  let {effect, angle, color} = style.gradient
  let filter = color

  if (style.gradient === globals.random || style.gradient === globals.select) {
    gradient = randomGradient(style.gradient)
  } else if (filter === globals.random || filter === globals.select) {
    gradient = randomGradient(filter, angle, effect)
  } else if (style.gradient) {
    gradient = transformToGradientSyntax(color, angle, effect)
  } else if (style.gradient === undefined) {
    gradient = "linear-gradient(-45deg, #444, #888)"
  }

  if (!gradient && img) {
    backgroundImage = `url(${img})`
  } else if (gradient && !img) {
    backgroundImage = gradient
  } else if (gradient && img) {
    backgroundImage = `url(${img}), ${gradient}`
  }

  console.log({backgroundColor, backgroundImage})

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

  console.log("angle", angle)

  if (angle === globals.random) {
    angle = Math.floor(Math.random() * 360)
  } else if (angle) {
    angle = parseInt(angle)
  } else {
    angle = -45
  }

  console.log(angle)

  return `${effect}(${angle}deg, ${gradient})`
}

export const production = () => {
  if (!process.env.NODE_ENV) {
    throw new Error ("NODE_ENV is not defined")
  }
  return process.env.NODE_ENV.toLowerCase() === "production"
    && !window.location.host.startsWith("localhost")
}