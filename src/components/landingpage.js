import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
render() {
    return(
      <div style={{display: 'flex', height: '100%'}}>
        <Grid className="landing-grid">
           <Cell col={12}>
            <img
              src= "https://render.bitstrips.com/v2/cpanel/a41da708-81e9-4ec3-9364-9d8748f7063d-7fdd1185-df7d-4ea7-9dd1-2359229532c3-v1.png?transparent=1&palette=1"
              alt="avatar"
              className="avatar-img"
              />

              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <h1>Web & Mobile</h1>

              <hr/>

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | Python</p>

            <div className="social-links">

                {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/trenton-beam-b01581191/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
            <a href="https://github.com/TrentonBeam" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Youtube */}
          <a href="http://youtube.com/truspike" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>


              </div>
            </div>
            </Cell>
      </Grid>
        </div>
    )
  }
}

 export default Landing;
