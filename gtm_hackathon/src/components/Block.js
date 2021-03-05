import React, { Component } from 'react';
import SHA256 from '../../node_modules/crypto-js/sha256';

class Block extends Component {
  state = {
    index: this.getIndex(),
    timestamp: new Date().toString(),
    data: this.props.data,
    previousHash: this.getPrevHash(),
    hash: this.calculateHash(),
    nonce: 0,
  };

  calculateHash() {
    return SHA256(
      this.getIndex().toString() + this.getPrevHash() + new Date().toString() +
      JSON.stringify(this.props.data.toString()) + '0').toString();
  }

  getIndex() {
    return this.props.data[0].index + 1;
  }
  getPrevHash() {
    let _chain = this.props.data[0].chain;
    let _lastIndexChain = _chain.length;
    let _value;
    let _preHash = '';

    if (_lastIndexChain > 0) {
      let chain_data = _chain[_lastIndexChain - 1];
      _value = Object.values(chain_data);
      _preHash = _value[4];
    }

    return _preHash;
  }

  isChainValid() {
    for (let i = 1; i < this.props.data.chain.length; i++) {
      const currentBlock = this.props.data.chain[i];
      const previousBlock = this.props.data.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return <span>Warning!!! Someone tried to access your info without permission!!!</span>;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return <span>Warning!!! Someone tried to access your info without permission!!!</span>;
      }
    }
    return <span>Looking alright!</span>;
  }

  render() {
    return (
      <div>
        <div>
          Your{' '}
          <strong>
            <em>Blockchained Hash</em>
          </strong>{' '}
          is almost created! <br />
          <b>Click the button below</b> to make sure to <strong>create and check your Hash value !!!</strong>
          <br />
          ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
        </div>
        <button
          className="sign_butt"
          onClick={function (ev) {
            ev.preventDefault();
            this.props.onClick(this.state);
          }.bind(this)}
        >
          Show
        </button>
      </div>
    );
  }
}

export default Block;