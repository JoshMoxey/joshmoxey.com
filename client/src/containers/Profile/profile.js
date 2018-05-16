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
import ScrollMemory from 'react-router-scroll-memory';

import PageList from "../PageList/page-list"
import Banner from "../../components/Banner/banner"
import ActionLists from "../../components/ActionLists/action-lists";

class Profile extends Component {

  render() {
    const title = "About Josh Moxey: Creator, Entrepreneur, Designer"
    this.props.updateTitle("Profile")

    const banner = {
      active: true,
      gradient: "45deg, #222, #888"
    }

    const details = {
      location: "Kitchener, ON",
      birthday: "April 10th, 1996",
      //age date - now?
      age: 22,
    }

    const textClampData = {
      title: "About",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum delectus doloribus, ipsam nemo quaerat quam sapiente. Animi consectetur cupiditate itaque nam perferendis, quisquam quod sapiente sit suscipit veritatis voluptatum?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at, beatae consectetur cupiditate distinctio eos facilis harum illo illum iste minus odit, officiis provident quas qui quisquam saepe voluptates voluptatibus!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam aut deserunt dicta ea eius esse est, excepturi iure magnam minima molestias natus nesciunt officiis provident quasi, quibusdam quidem, soluta.",
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
        "shortText" : "Socials",
        "longerText" : false,
        "priority" : 1,
        "links" : [
          {
            "name" : "Instagram",
            "href" : "https://instagram.com/instagram",
            "external" : true
          },
          {
            "name" : "Facebook",
            "href" : "https://facebook.com/joshmoxey.com",
            "external" : true
          },
          {
            "name" : "YouTube",
            "href" : "https://www.youtube.com/channel/UCJl0a8GmK6yX6gB5QHTkZiw",
            "external" : true
          },
          {
            "name" : "Twitter",
            "href" : "https://twitter.com/joshmoxey",
            "external" : true
          },
          {
            "name" : "Snapchat",
            "href" : "https://snapchat.com/add/moxeyjosh",
            "external" : true
          },
          {
            "name" : "Soundcloud",
            "href" : "https://soundcloud.com/joshmoxey",
            "external" : true
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
              {...textClampData}
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

const ComponentWithCSS = CSSModules(Profile, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage, updateTitle})(ComponentWithCSS);