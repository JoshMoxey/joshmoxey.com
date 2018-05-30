import React from "react"
import Page from "../../containers/Page/page"
import Section from "../../containers/Section/section"

const Sorter = (props) => {
  //if additional url === /recent, most-viewed, etc. send section
  //if there's no additional, send section
  //else, send page

  const sectionTabs = ["home", "recent", "most-viewed", "featured"]
  if (sectionTabs.includes(props.match.params.page)) {
    return <Section {...props}></Section>
  }
  return (
    <Page {...props}></Page>
  )
}

export default Sorter