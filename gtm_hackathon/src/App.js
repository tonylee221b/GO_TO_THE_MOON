import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';
import ContentCreate from './components/ContentCreate';
import Content from './components/Content';
import Display from './components/Display';
import DisplayRange from './components/DisplayRange'
import ContentCreateId from './components/ContentCreateId';
import ContentCreateRange from './components/ContentCreateRange';
import Block from './components/Block';
import ShowLogHistory from './components/ShowLogHistory';

class App extends Component {
  id_index = 0;
  info_index = 0;
  range_index = 0;
  hash_index = 0;
  block_index = 0;

  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      selected_id_index: 0,
      selected_info_index: 0,
      selected_range_index: 0,
      contents: [
        { id: 1, title: 'Join the website' },
        { id: 2, title: 'Patient Information', desc: 'Please enter your personal information' },
        { id: 3, title: 'Accessible Range', desc: 'Please select which information you want to share' },
        { id: 4, title: 'Block Chain', desc: 'Your Block Chain' },
      ],
      information: [],
      idInfo: [],
      range: [],
      chain: [],
    };
  }

  // ====================================================================================================

  getSelectedContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (this.state.selected_content_id === data.id) {
        return data;
      }
      i++;
    }
  }

  // ====================================================================================================

  getSelectedInfo() {
    var i = 0;
    while (i < this.state.information.length) {
      var data = this.state.information[i];
      if (this.state.selected_info_index === data.id) {
        return data;
      }
      i++;
    }
  }

  //====================================================================================================

  getSelectedRange() {
    var i = 0;
    while (i < this.state.range.length) {
      var data = this.state.range[i];
      if (this.state.selected_range_index === data.id) {
        return data;
      }
      i++;
    }
  }
  //====================================================================================================

  getLogHistory() {
    let i = 0;
    let _value;
    let arr = [];

    while (i < this.state.chain.length) {
      let obj = {
        time: '',
        hash: ''
      }
      _value = Object.values(this.state.chain[i]);
      obj.time = _value[1];
      obj.hash = _value[4];

      arr.push(obj);
      i++;
    }

    return arr;
  }
  //====================================================================================================

  DisplayChain() {
    let lastIndex = this.state.chain.length;
    let _keys = Object.keys(this.state.chain[lastIndex - 1]);
    let _values = Object.values(this.state.chain[lastIndex - 1]);
    let _preHash = '';
    let _curHash = '';
    let _curTime = '';

    for (let i in _keys) {
      if (_keys[i] === 'previousHash') {
        if (_values[i].length > 0) _preHash = _values[i];
        else _preHash = 'None';
      } else if (_keys[i] === 'hash') {
        _curHash = _values[i];
      } else if (_keys[i] === 'timestamp') {
        _curTime = _values[i];
      }
    }

    return (
      <div className="hash_container">
        <h2>This is your timestamp and Hash values</h2>

        <div className="hash_con_under1">
          <span className="hash_title">Timestamp: </span>
          <strong className="hash_content">{_curTime}</strong>
        </div>

        <div className="hash_con_under2">
          <span className="hash_title">Previous Hash Value: </span>
          <strong className="hash_content">{_preHash}</strong>
        </div>

        <div className="hash_con_under3">
          <span className="hash_title">Current Hash Value: </span>
          <strong className="hash_content">{_curHash}</strong>
        </div>
      </div>
    );
  }
  // ====================================================================================================

  getContentComponent() {
    // ================================ navigate ================================
    if (this.state.mode === 'welcome') {
      return (
        <Content
          data={{
            title: "This is GTM(Go To the Moon)'s project",
            desc: 'Blockchain-based Patient Consent application.',
          }}
        ></Content>
      );
    } else if (this.state.mode === 'read' && this.state.selected_content_id === 1) {
      return (
        <div>
          <div>
            <Content data={this.getSelectedContent()}></Content>
          </div>

          <br />
          <div>{this.getSigninComponent()}</div>
        </div>
      );
    } else if (this.state.mode === 'read' && this.state.selected_content_id === 2) {
      return (
        <div>
          <div>
            <Content data={this.getSelectedContent()}></Content>
          </div>

          <br />
          <div>{this.getControlComponent()}</div>
        </div>
      );
    } else if (this.state.mode === 'read' && this.state.selected_content_id === 3) {
      return (
        <div>
          <div>
            <Content data={this.getSelectedContent()}></Content>
          </div>

          <br />
          <div>{this.getChoiceRange()}</div>
        </div>
      );
    } else if (this.state.mode === 'read' && this.state.selected_content_id === 4) {
      return (
        <div>
          <div>
            <Content data={this.getSelectedContent()}></Content>
          </div>

          <br />
          <div>{this.showHashLoge()}</div>
        </div>
      );
    }

    // ================================ button event 'Sign in' ================================
    else if (this.state.mode === 'signin') {
      return (
        <ContentCreateId
          onClick={function (formData) {
            formData.id = this.id_index;
            this.id_index++;
            this.state.idInfo.push(formData);
            this.setState({
              idInfo: this.state.idInfo,
              selected_id_index: formData.id,
              mode: 'submit_sign',
            });
          }.bind(this)}
        ></ContentCreateId>
      );
    } else if (this.state.mode === 'submit_sign') {
      return (
        <div>
          <div>
            <Content
              data={{
                title: 'Welcome to our web site',
                desc: 'Successfully signed in',
              }}
            ></Content>

            <br />
          </div>

          <div>
            <Block
              data={this.getBlockData()}
              onClick={function (formData) {
                this.block_index++;
                this.state.chain.push(formData);
                this.setState({
                  chain: this.state.chain,
                  mode: 'showChain',
                });
              }.bind(this)}
            ></Block>
          </div>
        </div>
      );
    }
    // ================================ button event 'Information' ================================
    else if (this.state.mode === 'create') {
      return (
        <ContentCreate
          onSubmit={function (formData) {
            formData.id = this.info_index;
            this.info_index++;
            this.state.information.push(formData);
            this.setState({
              information: this.state.information,
              selected_info_index: formData.id,
              mode: 'submit_info',
            });
          }.bind(this)}
        ></ContentCreate>
      );
    } else if (this.state.mode === 'submit_info') {
      return (
        <div>
          <Content
            data={{
              title: 'Submit Complete',
              desc: 'Your information has been successfully submitted',
            }}
          ></Content>

          <br />
          <div>
            <Display data={this.getSelectedInfo()}></Display>
          </div>

          <div>
            <Block
              data={this.getBlockData()}
              onClick={function (formData) {
                this.block_index++;
                this.state.chain.push(formData);
                this.setState({
                  chain: this.state.chain,
                  mode: 'showChain',
                });
              }.bind(this)}
            ></Block>
          </div>
        </div>
      );
    }
    // ================================ button event 'Range' ================================
    else if (this.state.mode === 'choice') {
      return (
        <ContentCreateRange
          onClick={function (formData) {
            formData.id = this.range_index;
            this.range_index++;
            this.state.range.push(formData);
            this.setState({
              range: this.state.range,
              selected_range_index: formData.id,
              mode: 'submit_range',
            });
          }.bind(this)}
        ></ContentCreateRange>
      );
    } else if (this.state.mode === 'submit_range') {
      return (
        <div className="test">
          <Content
            data={{
              title: 'Accessibility Settings are successfully modified',
              desc: 'Only the following information will be shown!',
            }}
          ></Content>

          <br />
          <div>
            <DisplayRange data={this.getSelectedRange()}></DisplayRange>
            <Block
              data={this.getBlockData()}
              onClick={function (formData) {
                this.block_index++;
                this.state.chain.push(formData);
                this.setState({
                  chain: this.state.chain,
                  mode: 'showChain',
                });
              }.bind(this)}
            ></Block>
          </div>
        </div>
      );
    }
    // ================================ button event 'Show Log' ================================
    else if (this.state.mode === 'showhashlog') {
      return <ShowLogHistory data={this.getLogHistory()}></ShowLogHistory>;
    }
    // ================================ button event 'Hash' ================================
    else if (this.state.mode === 'showChain') {
      return <div>{this.DisplayChain()}</div>;
    }
  }
  // ====================================================================================================

  getControlComponent() {
    return [
      <button
        className="basic_butt"
        key="1"
        onClick={function (ev) {
          ev.preventDefault();
          this.setState({ mode: 'create' });
        }.bind(this)}
      >
        Create
      </button>,
    ];
  }
  // ====================================================================================================

  getSigninComponent() {
    return [
      <button
        key="1"
        className="basic_butt"
        onClick={function (ev) {
          ev.preventDefault();
          this.setState({ mode: 'signin' });
        }.bind(this)}
      >
        Sign Up
      </button>,
    ];
  }
  // ====================================================================================================

  getChoiceRange() {
    return [
      <button
        key="1"
        className="basic_butt"
        onClick={function (ev) {
          ev.preventDefault();
          this.setState({ mode: 'choice' });
        }.bind(this)}
      >
        Enter
      </button>,
    ];
  }
  // ====================================================================================================

  showHashLoge() {
    return [
      <button
        key="1"
        className="basic_butt"
        onClick={function (ev) {
          ev.preventDefault();
          this.setState({ mode: 'showhashlog' });
        }.bind(this)}
      >
        Show
      </button>,
    ];
  }
  // ====================================================================================================

  getBlockData() {
    let sendData = [];
    let _lastOfInfo = this.state.information.length - 1;
    let _lastOfId = this.state.idInfo.length - 1;
    let _lastOfRange = this.state.range.length - 1;

    if (_lastOfInfo >= 0 || _lastOfId >= 0 || _lastOfRange >= 0) {
      let obj = {
        index: this.block_index,
        idInfo: this.state.idInfo[_lastOfId],
        info: this.state.information[_lastOfInfo],
        range: this.state.range[_lastOfRange],
        chain: this.state.chain,
      };
      sendData.push(obj);
    }
    return sendData;
  }

  // ====================================================================================================

  render() {
    return (
      <div className="App">
        <div className="Title_Header">
          <h1>GO TO THE MOON 🚀</h1>
        </div>

        <div className="grid">
          <Index
            className="main_index"
            onSelect={function (id) {
              this.setState({
                selected_content_id: id,
                mode: 'read',
              });
            }.bind(this)}
            data={this.state.contents}
          ></Index>
          <div className="main">{this.getContentComponent()}</div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default App;
