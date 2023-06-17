import React, { Component } from 'react'

class Instructions extends Component {
    constructor() {
      super()
    
      this.state = {
         instructions: true
      }
    }

    toggleInstructions = () => {
        this.setState(prevState =>({
            instructions: !prevState.instructions
        }))
    }


  render() {
    return (
      <div>
        {this.state.instructions && (
          <div id="Instructions">
            <div className="container">
              <h2>Instructions</h2>
              <ul>
                <li>Do NOT refresh the page until you save your Resume</li>
                <br></br>
                <li>
                  Hover over the areas of the resume to find Edit and Add
                  buttons
                </li>
                <br></br>
                <li>
                  Edit your information in the form fields and submit your edits
                </li>
                <br></br>
                <li>
                  Add your Education and Experience or click on entries to
                  remove them
                </li>
                <br></br>
                <li>
                  When your done editing, close all edit buttons, use{" "}
                  <code>CTRL</code> + <code>P</code> (<code>CMND</code> +{" "}
                  <code>P</code> on a Mac) to print your resume to pdf
                </li>{" "}
                <br></br>
                <li>
                  Select 'Save as PDF' and check the 'Background graphics'
                  option while unchecking the 'Headers and Footers' option under
                  settings.
                </li>
              </ul>
              <button type="button" onClick={this.toggleInstructions}>
                I GRAB
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Instructions