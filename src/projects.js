import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
toggleCategories() {
  if(this.state.activeTab ===0){
    return(
      <div className= "projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}} >React Project #1</CardTitle>
        <CardText>
          Portfolio Website
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
       {/* Project 2 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}} >React Project #2</CardTitle>
        <CardText>
          Password Generator
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
       {/* Project 3 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}} >React Project #3</CardTitle>
        <CardText>
        Rock, Paper, Scissors
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      </div>
    )
  } else if(this.state.activeTab ===1) {
    return (
      <div><h1>This Is React Native</h1></div>
    )
  } else if(this.state.activeTab ===2) {
    return (
      <div><h1>This Is JavaScript</h1></div>
    )
  } else if(this.state.activeTab ===3) {
    return (
      <div><h1>This Is Python</h1></div>
    )
  }


}
  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
        </Tabs>

            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
            </Cell>
              </Grid>


      </div>
    )
  }
}





export default Projects;
