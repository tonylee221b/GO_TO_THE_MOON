// Here we go!

const SHA256 = require('crypto-js/sha256');

class Patient_Info {
    
}

class Block {
    // index -> Where the block sits on the chain
    // timestamp -> when the block was created
    // data -> Any data that we want to associate with this block
    // previousHash -> string that contains the hash of the block before this one (*important*)
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    // Calculate the hash function of this block
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }   
    
    // Proof-of-work algorithm
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block Data Hash: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block(0, "03/03/2021", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

let PatientConsent = new Blockchain();

console.log("Mining block 1...");
PatientConsent.addBlock(new Block(1, "02/03/2021", {amount: 4}));

console.log("Mining block 2...");
PatientConsent.addBlock(new Block(2, "02/03/2021", {amount: 8}));
