import React from "react";
import CSSModules from 'react-css-modules';
import styles from '../page-body.css';

import Preview from "../../../components/Preview/preview"
import TextClamp from "../../../components/TextClamp/text-clamp"
import PageList from "../../../containers/PageList/page-list"
import Quote from "../../../components/Quote/quote"
import ActionLists from "../../../components/ActionLists/action-lists"
import Embed from "../../../components/Embed/embed"

const Music = (props) => {
  if (!props) return <div></div>
  return (
    <div styleName="contents">
      <div styleName="primary">
        <TextClamp
          {...props.description}
        />
        <Embed
          {...props.embed}
        />
        <PageList
          {...props.more}
          currentIds={props.currentIds}
          sectionIds={props.sectionIds}
          id={"more"}
        />
      </div>
      <div styleName="secondary">
        <ActionLists
          links={props.links}
        />
      </div>
    </div>
  )
}

export default CSSModules(Music, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});