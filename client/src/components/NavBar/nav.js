import React, {Component} from "react";
import { Link } from "react-router-dom"
import CSSModules from 'react-css-modules';
import styles from './nav.css';

class Nav extends Component {
  //go back function
  
  render() {
    return (
      <div styleName="nav">
        <div styleName="top">
          <div styleName="left">
            <a styleName="back">
              <svg width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
              </svg>
            </a>
            <div styleName="title">{this.props.sidebar.open ? "Open" : "Closed"}</div>
          </div>
          {/*<div styleName="right">*/}
            {/*Right*/}
            {/*<div styleName="icon-1"></div>*/}
            {/*<div styleName="icon-2"></div>*/}
          {/*</div>*/}
        </div>
        <div styleName="bottom">
          <Link to="/" styleName="active">
            <div styleName="icon">
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
              </svg>
            </div>
            <span>Home</span>
          </Link>
          <Link to="/content">
            <div styleName="icon">
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path
                  d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
                <path
                  d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
              </svg>
            </div>
            <span>Content</span>
          </Link>
          <Link to="/projects">
            <div styleName="icon">
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path
                  d="M30 8h-8v-2c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v2h-8c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM12 6.004c0.001-0.001 0.002-0.003 0.004-0.004h7.993c0.001 0.001 0.003 0.002 0.004 0.004v1.996h-8v-1.996zM30 16h-4v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-12v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-4v-2h28v2z"></path>
              </svg>
            </div>
            <span>Projects</span>
          </Link>
          <Link to="/profile">
            <div styleName="icon">
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path
                  d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
              </svg>
            </div>
            <span>Profile</span>
          </Link>
          <a>
            <div styleName="icon">
              <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    )
  }
}



export default CSSModules(Nav, styles);