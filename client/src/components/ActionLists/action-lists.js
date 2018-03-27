import React from "react"
import ActionList from '../ActionList/action-list'

const ActionLists = (props) => {
  if (!props || !props.links) return <div></div>

  const actionLists = props.links.map((link, i) =>
    <ActionList key={i} static={true} links={link}/>
  )

  return (
    <div>
      {actionLists}
    </div>
  )
}

export default ActionLists