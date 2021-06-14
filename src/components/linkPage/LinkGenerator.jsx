import React, { Component } from 'react';
import "./link_page_style.scss";

class LinkGenerator extends Component {
    {
        title_link,
        link
    } = const;
    render() {
        return (
            <div className="main_wrapper_links">
            <div className="links_wrapper">
              <a href={this.props.href} className="title_link">
                {this.props.title_link}
              </a>
                (
                    
                )
            </div>
          </div>
        )
    }
}

export default LinkGenerator;