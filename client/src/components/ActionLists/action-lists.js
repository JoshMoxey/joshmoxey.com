import React from "react"
import ActionList from '../ActionList/action-list'

const ActionLists = (props) => {
  if (!props || !props.links) return <div></div>

  //define a blank schema that with the title "actions"
  const actionsData = {
    shortText: "Actions",
    longerText: false,
    priority: 1,
    links: []
  }

  //create a static actionList out of this
  //render before the other actionLists

  //SHARE
  //if title === share && static === true
  //object.keys the links
  //if !value || value is empty, filter it out
  //loop through icon array
  //add href & unique js if there is any
  //icons partially rounded, minimal spacing
  //left align
  // const actionListsSolo = props.links

  const actionLists = props.links.map(function (link, i) {
    if (link.links.length === 1 && link.shortText.toLowerCase() !== "more") {
      //ignore arrays of links that have only 1 link
      //for those "single" arrays, and add the link to actions's links
      actionsData.links = [...actionsData.links, ...link.links]
      return
    }
    return <ActionList key={i} static={true} links={link}/>
  })

  const actions = actionsData.links.length ? <ActionList static={true} links={actionsData} main={true} /> : ""

  return (
    <div>
      {actions}
      {actionLists}
    </div>
  )
}

export default ActionLists