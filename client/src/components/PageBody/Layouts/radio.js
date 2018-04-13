import React from "react";
import CSSModules from 'react-css-modules';
import styles from '../page-body.css';

import Preview from "../../../components/Preview/preview"
import TextClamp from "../../../components/TextClamp/text-clamp"
import PageList from "../../../containers/PageList/page-list"
import Quote from "../../../components/Quote/quote"
import ActionLists from "../../../components/ActionLists/action-lists"
import Embed from "../../../components/Embed/embed"

const Radio = (props) => {
  if (!props) return <div></div>
  return (
    <div styleName="contents">
      <div styleName="primary">
        <TextClamp
          {...props.description}
        />
        <Embed
          id="apple_music"
          src="https://tools.applemusic.com/embed/v1/playlist/pl.u-zPyLA2vudW4ePJ?country=ca"
        >
        <PageList
          {...props.related}
          // id="related"
          id="related"
          sectionId="podcast"
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

export default CSSModules(Radio, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});