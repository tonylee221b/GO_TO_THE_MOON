 # GO_TO_THE_MOON 🚀

![GTM-logo-white](https://user-images.githubusercontent.com/47313362/110156626-36fc7780-7db5-11eb-8d90-396030328db9.png)

> This is the prototype of GTM(Go to the Moon)'s Blockchain-based Patient Consent application.
### Hackathon 2021 Winter

## What we have done
Using React, we have attempted to create a website that manages patients' medical data based on blockchain technology. Although we didn't complete it, we were able to complete the various things we aimed for.

- First, when a patient joins our website, the user has a block and gets the Hash value accordingly.

- Second, patients can enter their personal information and modify it at any time. At this time, a new block is created, and at the same time, information is stored in the block with the Hash value. At this time, the blocks are connected to each other.

- Third, patients can choose the data they want to disclose. Of course, modifications can be made at any time and are operated with the same blockchain system. However, we could not make many check items due to the lack of time but added some important things that we thought.

- Finally, whenever patients sign up or modify our personal information, disclosure range, we create a hash value and implement it to show the timestamp, previous hash value, and current hash value when the customer finally submits it.

- Finally, we implemented to show the log history of continuously stacked hash values while patients change their personal data or store new data. Our system shows the date the hash value was stored and the hash value of the day, allowing the patient to check his or her own records. Furthermore, using the hash value, patients can use it with our planned solution of the insurance company.

## What we have learned in this Hackathon
We lacked a lot of knowledge about blockchain, but we were able to get a lot of information about blockchain through this Hackathon. And once again, we thought about the importance of personal data and we learned that if we use blockchain, we can manage that important data more safely. Our skills were still lacking, so we couldn't proceed as much as we aimed, but it was so meaningful to participate in this Hackathon for the first time among classmates. We plan to continue making parts that are not completed separately.

==============================================================================================
# Getting Started with Create React App

##  This project was bootstrapped
We created a react environment using the npx command. 
```
npx create-react-app {your folder name}
```
You can see more details on this link [Create React App](https://github.com/facebook/create-react-app).



## The module we added to use blockchain
In the project directory, you need to install
### `npm install --save crypto-js`

To use `SHA256`(Secure Hash Algorithm) which returns a 64-digit string consisting of 256 bits.

To use this algorithm, add the code below to the top of the js folder you're trying to write.
```
import SHA256 from '../../node_modules/crypto-js/sha256';
```

<video width="800px" height="600px" src="https://user-images.githubusercontent.com/47313362/110155207-4d093880-7db3-11eb-95fd-b2067415ca02.mov"
   autoplay loop />
