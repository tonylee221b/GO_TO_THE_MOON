import React, { Component } from 'react';

class ContentCreateRange extends Component {
  state = {
    id: 0,
    drug: '',
    drinking: '',
    smoking: '',
    suicide_attempt: '',
    chronic_disease: '',
    psychological_issue: '',
    allergy: '',
    other_history: '',
  };



  changeFormHandlerRange(ev) {
    let checked = false;
    checked = ev.target.checked;
    if (checked) {
      this.setState({ [ev.target.id]: 'true' });
    }
    else this.setState({ [ev.target.id]: "false" });
  }

  render() {
    return (
      <div className="boxy">
        <div className="boxes">
          <input type="checkbox" id="drug" value={this.state.drug} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="drug">Drug</label>

          <input type="checkbox" id="drinking" value={this.state.drinking} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="drinking">Drinking</label>

          <input type="checkbox" id="smoking" value={this.state.smoking} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="smoking">Smoking</label>

          <input type="checkbox" id="suicide_attempt" value={this.state.suicide_attempt} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="suicide_attempt">Suicide Attempt</label>

          <input type="checkbox" id="chronic_disease" value={this.state.chronic_disease} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="chronic_disease">Chronic Disease</label>

          <input type="checkbox" id="psychological_issue" value={this.state.psychological_issue} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="psychological_issue">Psychological Issue</label>

          <input type="checkbox" id="allergy" value={this.state.allergy} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="allergy">Allergy</label>

          <input type="checkbox" id="other_history" value={this.state.other_history} onChange={this.changeFormHandlerRange.bind(this)}></input>
          <label for="other_history">Others</label>
        </div>

        <div>
          <br />
          <button
            className="sign_butt"
            onClick={function (ev) {
              ev.preventDefault();
              this.props.onClick(this.state);
            }.bind(this)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ContentCreateRange;
