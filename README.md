# data-hackfest

Hack for patient consent management using react.js, ether.js, ipfs, tailwindCss, solidity and hardhat.

##Inspiration
Understanding the current challenges and loopholes in existing healthcare data system, technological advancement in digitalization of patients record, learning from data breaches and privacy issues in healthcare, recognizing the importance of patient consent and their desire for control over their medical data and regulatory demands inspires us for a project MediCare. 

## What it does
MediCare focused on managing patient records by ensuring data security and a smart contract-based consent management system, the technology plays a vital role in securing sensitive healthcare information and enhancing patient privacy. The system serves as a comprehensive repository for patient records, offering healthcare providers and authorized personnel quick and secure access to critical medical data.
Data security is a primary concern, access control for reassuring patients that their sensitive data is handled with utmost care, and secure storage mechanisms to protect patient information from unauthorized access or breaches.
The smart contract-based consent management system is a groundbreaking feature that empowers patients to exercise control over who can access their medical information. Through blockchain technology and self-executing smart contracts, patients can grant or revoke consent to specific healthcare providers, researchers, or institutions, all while maintaining a transparent and immutable record of their choices. This not only respects patients' autonomy but also reduces administrative overhead in managing consent, eliminating the need for extensive paperwork and administrative processes.

In summary, MediCare project revolutionizes patient record management by emphasizing data security and enabling patients to exercise precise control over their healthcare data with the innovative use of smart contracts, ensuring that sensitive information remains confidential and patient privacy is upheld to the highest standards.

## How we built it
For the frontend we used React and Tailwind CSS to create a sleek design, that is pleasant to the eye. Initially we created some of the Figma templates and finalized one for MediCare. We chose shades of green as our color theme as it symbolises growth. Working on the backend is what we found the most difficult of all, one of us had experience with solidity and in building smart contract, though we could by the very end of the hackathon were successful in creating a smart contract that would fetch the patient medical info by it's CID if the information of consenter matches with the info provided by patient for the consenter. For this we used, Solidity and chose hardhat for providing suitable development environment. Right now we have yet not deployed the smart contract but we look forward to deploying it and using it in our project. In addition to this we have used IPFS to store patient info and consenter info. As IPFS is a protocol for a peer to peer network and thus a decentralized network, it provided similar properties to a blockchain for patient data security, consent management. Also it it cheap to use, and each patient's info can be accessed by its CID.

## Challenges we ran into
 MediCare project focused on data security and the utilization of smart contracts to facilitate patient consent for sharing medical details in healthcare, we encountered several significant challenges. One significant challenge was ensuring seamless integration and communication between the frontend components. One of the foremost obstacles was ensuring the robustness and immutability of the smart contracts themselves, as any vulnerability could potentially compromise the integrity of patient data.

One major obstacle was ensuring the seamless integration of smart contracts and blockchain technology within the traditional healthcare framework proved to be challenging. Addressing these challenges required a multidisciplinary approach that involved expertise in blockchain technology, legal compliance and healthcare protocols, illustrating the complexity of merging cutting-edge technology with the sensitive domain of healthcare data security.

Additionally, ensuring the utmost security and privacy for patients' medical data posed a continuous challenge. We had to address issues related to data encryption, access control, and compliance with healthcare regulations. Striking a balance between the transparency offered by blockchain and the need for data confidentiality was a delicate task.

Collaborative challenges during the development process could have arisen from the need for effective communication and coordination among team members. Clear communication and proper documentation were likely crucial in addressing challenges related to code integration, feature implementation, and ensuring that everyone was aligned with the project's goals.

In conclusion, our project in data security and smart contract-based patient consent in healthcare faced multifaceted challenges that encompassed technical, regulatory, operational, and educational aspects. Successfully navigating these challenges was essential to achieving our project's objectives and ensuring the secure and efficient sharing of medical data.



## Accomplishments that we're proud of
We are incredibly proud of the accomplishments we have achieved in our project focused on enhancing data security for patients and enabling them to control the consent for their medical information through a robust frontend interface integrated with blockchain technology. One of our key accomplishments is the successful development and implementation of a cutting-edge technologies such as blockchain, ipfs, frontend that provides patients with an intuitive and user-friendly interface to manage their medical data, despite being unfamiliar with some tools. This reflects our team's dedication to continuous learning and the ability to adapt to new technologies to bring innovative solutions to life. This interface empowers patients to easily grant or revoke consent for the use of their health records, ensuring that their privacy and preferences are respected at all times. Additionally, our integration of blockchain technology into the project has been a major milestone. We have successfully leveraged blockchain's inherent security features to create an immutable and transparent ledger for storing patient consent records and medical data access requests. One major achievement lies in our ability to efficiently plan and execute strategic workflows within a limited timeframe, resulting in the successful delivery of the project MediCare. Another accomplishment we take pride in is the development of a highly secure and efficient data encryption and decryption mechanism, which further fortifies patient data against unauthorized access.


## What we learned
 The main takeaway from our endeavor is the recognition of what can be achieved when the team is aligned on objectives and leverages individual strengths effectively. Through the implementation of blockchain technology in the frontend, we discovered the potential to create an immutable, decentralized ledger for patients' medical information. We gained valuable insights into the critical intersection of healthcare and privacy. Through meticulous research and analysis ,we comprehensively grasped the significance of safeguarding sensitive patient information in the digital age. We learned that patients should have complete control over who can access their medical data, ensuring their privacy and autonomy. We learned about various encryption techniques, secure data storage protocols, and stringent access controls, all of which are pivotal in ensuring the confidentiality and integrity of patient data. Moreover, we explored the ethical aspects of granting consent for sharing medical information, understanding the necessity of empowering patients to make informed decisions about who can access their records. This project not only enhanced our technical skills but also deepened our understanding of the ethical responsibilities associated with handling patient data, emphasizing the importance of striking a balance between technological advancements and ethical considerations in healthcare information management. For this we used Pinata IPFS API for storing info on IPFS.  

## What's next for MediCare:A healthTrack system


# How to get started

- Git Bash the below command-
```
git clone git@github.com:arcVaishali/data-hackfest.git
```

- Move to frontend folder run the following command 
```
cd frontend
```

- Run the below code for installing dependencies, ether.js, tailwindcss and ipfs-http-client
```
npm install
```

- Work on pages assigned, or any feature in frontend folder
  
- To run the frontend on your local development server
```
npm start
```

For working on Backend
```
cd backend
```

```
npm install
```

