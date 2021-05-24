import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-body">
          <Cell col={6}>
            <h2>Trenton Beam</h2>
            <img
              src="https://render.bitstrips.com/v2/cpanel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-7fdd1185-df7d-4ea7-9dd1-2359229532c3-v1.png?transparent=1&palette=1"
              alt="avatar"
              style={{height: '250px'}}
              />


          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

          <div className="contact-list">
          <List>
          <ListItem>
           <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <a href={'https://trentonbeam.appointlet.com'} style={{ color: 'black', textDecoration: 'none' }} target="_blank">
            <i className="fa fa-calendar" aria-hidden="true"/>
            <span style={{ paddingTop: 5}}>Click to Schedule Appointment</span>
            </a>


            </ListItemContent>
                   </ListItem>
                   <ListItem>
                     <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                       <i style={{ position: 'relative', left: 0 }} className="fa fa-phone-square" aria-hidden="true"/>
                       <span>(336) 269-3914</span>
                     </ListItemContent>
                   </ListItem>

                   <ListItem>
                     <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                       <i className="fa fa-envelope" aria-hidden="true"/>
                       <span>trentonbeam123@gmail.com</span>
                     </ListItemContent>
                   </ListItem>

                   <ListItem>
                     <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                       <i className="fa fa-skype" aria-hidden="true"/>
                       <span>TrentonBeam123</span>
                     </ListItemContent>
                   </ListItem>
                 {/* <ListItem>
                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                     <a href={'https://calendar.google.com/calendar/embed?src=brently.bazor@gmail.com&mode=WEEK'} style={{ color: 'black', textDecoration: 'none' }} target="_blank">
                       <i className="fa fa-calendar" aria-hidden="true"/>
                       <span style={{ paddingTop: 5}}>Click to View Calendar</span>
                     </a>
                   </ListItemContent>
                 </ListItem> */}
               </List>
               </div>
             </Cell>
           </Grid>
         </div>
       )
     }
   }

 export default Contact;
