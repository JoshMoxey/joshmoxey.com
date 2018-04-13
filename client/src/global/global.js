export function durationFormatter (value) {
  if (value.h === 0 && value.m === 0) {
    return `${value.m}s`
  } else if (value.h === 0) {
    return `${value.m}m ${value.m}s`
  } else {
    return `${value.h}h ${value.m}m ${value.m}s`
  }
}

export function episodeNumberFormatter (value) {
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

export const imgPath = "/img"

export const imgPathify = (src) => {
  if (src.startsWith("http"))
    return src
  return `/${imgPath}/${src}`
}

export const backgroundStyling = (style) => {
  if (style.active === false) return {}

  // let backgroundColor = style.color || "#666"
  // let gradient = style.gradient || style.gradient === false ? "" : "-45deg, #444, #888"
  // let img = style.img ?
  //   ( style.img.startsWith("http") ? style.img : `${imgPath}/${style.img}` )
  //   : false
  // let backgroundImage = img ? `url(${img}), linear-gradient(${gradient})` : gradient

  let backgroundColor = style.color || "#666"
  let img = style.img ? imgPathify(style.img): false
  let gradient = style.gradient || false
  let backgroundImage = ""

  if (style.gradient === undefined) {
    gradient = "-45deg, #444, #888"
  }

  if (!gradient && img) {
    backgroundImage = `url(${img})`
  } else if (gradient && !img) {
    backgroundImage = `linear-gradient(${gradient})`
  } else if (gradient && img) {
    backgroundImage = `url(${img}), linear-gradient(${gradient})`
  }

  console.log(style.gradient)
  console.log(style.gradient || style.gradient === undefined ? "-45deg, #444, #888" : false)
  console.log(style.gradient || style.gradient === false ? false : "-45deg, #444, #888")
  console.log(gradient, img)
  console.log(backgroundImage)
  return {
    backgroundColor,
    backgroundImage
  }
}

export const sectionId = {
  podcast: "The Josh Moxey Show",
  gems: "Josh Moxey's Gems",
  articles: "Articles",
}

export const togglePopUp = (e) => {
  //if it's open
  //check if it's clicking on non img, then close
  //if it's closed
  //check if it's clicking on img, then open
  if (!this.state.imagePopUpActive && e.target.tagName === "IMG") {
    this.setState({
      imagePopUpActive: true,
      imagePopUpSrc: e.target.src
    })
  }
  if (this.state.imagePopUpActive && e.target.tagName !== "IMG") {
    this.setState({
      imagePopUpActive: false
    })
  }
}

export const titleEnding = " - joshmoxey.com"

export const titlify = (title) => {
  return title + titleEnding
}

export const untitlify = (title) => {
  const length = titleEnding.length
  return title.slice(0, -length)
}
