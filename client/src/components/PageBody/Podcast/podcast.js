import React from "react";
import CSSModules from 'react-css-modules';
import styles from '../page-body.css';

import Preview from "../../../components/Preview/preview"
import TextClamp from "../../../components/TextClamp/text-clamp"
import PageList from "../../../containers/PageList/page-list"
import Quote from "../../../components/Quote/quote"
import ActionLists from "../../../components/ActionLists/action-lists"
import Embed from "../../../components/Embed/embed"

const Podcast = (props) => {
  if (!props) return <div></div>
  console.log("props")
  console.log(props)
  return (
    <div styleName="contents">
      <div styleName="primary">
        <Quote
          {...props.quote}
        />
        <TextClamp
          {...props.description}
        />
        <Preview
          {...props.preview}
        />
        <Embed
          {...props.embed}
        />
        <PageList
          {...props.related}
        />
      </div>
      <div styleName="secondary">
        <ActionLists
          {...props.links}
        />
      </div>
    </div>
  )
}

/*<Preview
  {...props.preview}
  togglePopUp={this.togglePopUp.bind(this)}
/>*/

export default CSSModules(Podcast, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});