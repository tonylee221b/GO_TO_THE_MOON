const SHA256 = require('crypto-js/sha256');

class Patient_Info {
    constructor(){
        this.name = '0';
        this.age = 0;
        this.sex = '0';
        this.dateOfBirth = 0;
        this.height = 0;
        this.weight = 0;
        this.bloodType = '0';
        this.address = '0';
        this.phoneNum = 0;
        this.country = '0';
    }

    createPatient(name, age, sex, dateOfBirth, height, weight, bloodType, address, phoneNum, country) {
        // return new Patient_Info(name, age, sex, dateOfBirth, height, weight, bloodType, address, phoneNum, country);
        // let T_patient = new Patient_Info(name, age, sex, dateOfBirth, height, weight, bloodType, address, phoneNum, country);
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.dateOfBirth = dateOfBirth;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.address = address;
        this.phoneNum = phoneNum;
        this.country = country;
        
    }
}

    let Patient1 = new Patient_Info();
    Patient1.createPatient(
      document.getElementById("name").value,
      document.getElementById("age").value,
      document.getElementById("sex").value,
      document.getElementById("dateOfBirth").value,
      document.getElementById("height").value,
      document.getElementById("weight").value,
      document.getElementById("bloodType").value,
      document.getElementById("address").value,
      document.getElementById("phoneNum").value,
      document.getElementById("country").value
    );



class Block {
    // index -> Where the block sits on the chain
    // timestamp -> when the block was created
    // data -> Any data that we want to associate with this block
    // previousHash -> string that contains the hash of the block before this one (*important*)
    constructor(index, timestamp, data, accessibility, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.accessibility = accessibility;
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

/* html
가입하는 단계
name:
age:
sex:
.
.
phone:

button -submit and next-

accessibility
yes or no
yes or no
yes or no
yes or no
yes or no
yes or no

button -submit and next-


<script type="text/javascript" src="practice.js"></script>
*/
