import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


function About() {

  return(
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={12}>
          <h2>Trenton Beam</h2>
          <img
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/79032571_1331462823692853_8378302994772393984_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TamHgXaMCQIAX_ep-XO&tn=iU8JgMcLUUUAogAe&_nc_ht=scontent-atl3-1.xx&oh=5d83eca6218dde639dd6a4039cc6b665&oe=619101FE"
            alt="avatar"
            style={{height: '300px'}}
            />
            {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>This is just dummy text givin by myself trenton beam</p> */}

        </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      {/* <a href={'https://trentonbeam.appointlet.com'} style={{ color: 'black', textDecoration: 'none' }} target="_blank"} */}
                        <i className="fa fa-question-circle" aria-hidden="true"/>
                        <span style={{ paddingTop: 5, paddingBottom: 10 }}>Who Am I...</span>
                        <p>I am a Seafood Clerk at Publix living in Wilmington, North Carolina. I like to make cool websites and games part time and making them different from each other besides doing my day to day job.</p>
                        {/* </a> */}
                    </ListItemContent>
                  </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-info-circle" aria-hidden="true"/>
                    <span style={{ paddingTop: 5, paddingBottom: 10 }}> Facts About Me...</span>
                    <p>I Really Love Italian Food.</p>
                    <p>I Relate To Music Than Anything Else.</p>
                    <p>I love Gaming.</p>
                    <p> I Like To Hang Out With Friends.</p>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    <span style={{ paddingTop: 5, paddingBottom: 10 }}>What I Can Be Found Doing...</span>
                    <p>Programming</p>
                    <p>Working At Publix</p>
                    <p>Gaming</p>
                    <p>Hanging With Friends</p>
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                      <span>trentonbeam123</span>
                </ListItem> */}
                </List>
              </div>
          </Cell>
          {/* <Cell col={4}>
          
              </Cell> */}
      </Grid>
    </div>
  )
}

export default About