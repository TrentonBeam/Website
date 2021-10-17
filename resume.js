import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './skills'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="page-grid">
          <Cell
            col={4}
            tablet={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="https://render.bitstrips.com/v2/cpanel/a41da708-81e9-4ec3-9364-9d8748f7063d-7fdd1185-df7d-4ea7-9dd1-2359229532c3-v1.png?transparent=1&palette=1"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Trenton Beam</h2>
            <h4 style={{ color: "black" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h4 style={{ color: "black" }}>Grocery Clerk</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h4 style={{ color: "black" }}>Gamer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h4 style={{ color: "black" }}>Seafood Clerk</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8} tablet={12}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2021}
              schoolName={"Alamance Community College"}
              schoolDescription={"High School Disploma"}
            />
            <hr style={{ borderTop: "3px solid #360033" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Food Lion"
              jobDescription="Cashier, Grocery, Frozen, Dairy"
            />
            <Experience
              startYear={2017}
              endYear={2021}
              jobName="Just Save"
              jobDescription="Grocery, Dairy, Frozen"
            />
            <Experience
              startYear={2021}
              endYear= {'Current'}
              jobName="Publix"
              jobDescription="Seafood Clerk / Meat Department"
            />
            <hr style={{ borderTop: "3px solid #360033" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={30} />
            <Skills skill="React" progress={25} />
            <Skills skill="Python" progress={50} />
            <Skills skill="HTML/CSS" progress={50} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

 export default Resume;
