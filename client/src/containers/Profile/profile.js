import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./profile.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import Helmet from "react-helmet"
import {fetchPage, updateTitle} from "../../actions/index";
import PageHeroDetails from "../../components/PageHeroDetails/page-hero-details"
import TextClamp from "../../components/TextClamp/text-clamp"
import Preview from "../../components/Preview/preview"
import {imgPathify, titlify} from "../../global/global";
import Footer from "../../components/Footer/footer"
import ScrollMemory from 'react-router-scroll-memory';

import PageList from "../PageList/page-list"
import Banner from "../../components/Banner/banner"
import ActionLists from "../../components/ActionLists/action-lists";

class Profile extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false
  }

  render() {
    const title = "About Josh Moxey: Creator, Entrepreneur, Designer"
    this.props.updateTitle("Profile")

    const banner = {
      active: true,
      gradient: "45deg, #222, #888"
    }

    const details = {
      location: "Kitchener, ON",
      age: 22,
      birthday: "April 10th, 1996",
      //age date - now?
    }

    const about = {
      title: "About",
      text: [
        "Josh is an entrepreneur and creative. From his earliest days, he’s been building and creating whatever he wants to see in the world. From LEGO as a boy, to video editing in high school, to web development & design most recently, he’s always been up to something interesting.",
        "The 22 year old Canadian is also an obsessive learner. His craving for knowledge, mindset, skills, “success”, life hacking and more, lead him to fascinating places on his entrepreneurial journey. The man is absolutely obsessed with growing, improving, and applying that which he learns.",
        "In addition, Josh is pumped to share his journey. On his podcast, The Josh Moxey Journey, and on his social media pages, he documents his journey to becoming world class in business and in life. Though it can be uncomfortable for him, at the end of the day he really loves sharing his thoughts, experiences, lessons, perspectives with the world in real time.",
        "The thoughtful man is also an unconventionalist. He is all for doing things differently than the rest of society, to the point where many would label him as “eccentric”. He’s all for new paradigm shifts, modern wisdom, non traditional routes and is willing and eager to experiment his way to the top in a trailblazing manner."
      ]
    }

    const previewData = {
      title: false,
      slides: [
        {
          img: "http://via.placeholder.com/350x150",
          caption: [
            "caption here"
          ]
        }
      ]
    }

    const links = [
      {
        "shortText": "Socials",
        "longerText": false,
        "priority": 1,
        "links": [
          {
            "name": "Instagram",
            "href": "https://instagram.com/instagram",
            "external": true
          },
          {
            "name": "Facebook",
            "href": "https://facebook.com/joshmoxey.com",
            "external": true
          },
          {
            "name": "YouTube",
            "href": "https://www.youtube.com/channel/UCJl0a8GmK6yX6gB5QHTkZiw",
            "external": true
          },
          {
            "name": "Twitter",
            "href": "https://twitter.com/joshmoxey",
            "external": true
          },
          {
            "name": "Snapchat",
            "href": "https://snapchat.com/add/moxeyjosh",
            "external": true
          },
          {
            "name": "Soundcloud",
            "href": "https://soundcloud.com/joshmoxey",
            "external": true
          },
        ]
      }
    ]

    return (
      <div styleName="body">
        <Helmet>
          <title>{titlify(title)}</title>
        </Helmet>
        <Banner banner={banner} height={200}/>
        <div styleName="header">
          <div styleName="img">
            <img
              src="http://www.comingsoon.net/assets/uploads/2017/07/spider-man-homecoming-df-24018-1.jpg"
              alt="Josh Moxey"
              onClick={(e) => this.props.togglePopUp(e)}
            />
          </div>
          <div styleName="text">
            <h1>Josh Moxey</h1>
            <PageHeroDetails
              details={details}
              type="swiper"
              style={{
                marginTop: 0,
                paddingBottom: "4px"
              }}
            />
          </div>
        </div>
        <div styleName="contents">
          <div styleName="primary">
            <TextClamp
              {...about}
            />
            <Preview
              {...previewData}
              togglePopUp={this.props.togglePopUp}

            />
            <section>
              <h2>More coming soon...</h2>
            </section>
          </div>
          <div styleName="secondary">
            <ActionLists links={links}/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

const ComponentWithCSS = CSSModules(Profile, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage, updateTitle})(ComponentWithCSS);